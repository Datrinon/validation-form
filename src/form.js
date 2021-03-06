import Utility from "./utility";

/**
 * A class for creating form elements with custom validation
* techniques, utilizing the Constraint Validation API. Every input that 
* you give to form is tracked in the inputs field, do use this to assign
* validation to the element with the method attachValidation().
 */
export default class Form {
  
  /**
   * The form element.
   * @type {HTMLFormElement}
   */
  form;
  /**
   * Contains the form's contents as a ul element.
   */
  #formContents;
  /**
   * The inputs given to the form, arranged in order of addition. 
   * @type {{id : {element : HTMLelement, type : type}}[]}
   */
  inputs;

  constructor(className) {
    this.form = Utility.createElement("form", "form", className);
    this.#formContents = document.createElement("ul");
    
    this.form.append(this.#formContents);

    this.inputs = {};
  }

  /**
   * Add an input (with an accompanying label) to the form of this instance. A reference to the input 
   * can be obtained through the inputs object field.
   * 
   * @param {string} type - The type of input to add into the form.
   * @param {string} labelText - The label to advise what sort of input is needed.
   * @param {string} id - The id to refer to the input by; label will use this in "for=".
   * @param {boolean} required - Whether or not the input should be required.
   * @param {string} placeholder - The placeholder string to display in the field.
   * @param {string} classNames - Any additional class names assigned to the input.
   */
  addInputToForm(type="text", labelText, id, required, placeholder="", ...classNames) {
    const container = document.createElement("li");
    
    const labelView = document.createElement("label");
    labelView.setAttribute("for", id);
    labelView.textContent = labelText;

    const input = Utility.createElement("input", "form-input", ...classNames);
    input.setAttribute("type", type);
    input.setAttribute("required", required);
    input.id = id;
    input.name = id;
    input.setAttribute("placeholder", placeholder);

    container.append(labelView, input, Utility.createElement("span", "error"));
    
    this.inputs[id] = { element: container, type : type };

    this.#formContents.append(this.inputs[id].element);
  }

  /**
   * Attach a datalist element to an input. Appends it to the input.
   * 
   * @param {string} listId - The name of the list.
   * @param {string[]} list - A list of options to attach to the input.
   * @param {*} inputId - the ID of the input to attach the datalist to.
   */
  attachDatalist(listId, list, inputId) {
    const dataList = document.createElement("datalist");
    const inputField = this.form.querySelector(`#${inputId}`);
    
    inputField.setAttribute("list", listId);
    inputField.insertAdjacentElement("afterend", dataList);

    dataList.id = listId;

    list.forEach(entry => {
      let option = document.createElement("option");
      option.textContent = entry;
      dataList.append(option);
    });

    this.#addDatalistValidation(inputField, list);
  }

  /**
   * Create an options list and add it to the form.
   * 
   * @param {string} title - The title provided to the legend.
   * @param {string} isRadio - if true, then make a radio option list, else checkboxes.
   * @param { {id : string,
   *           value : string,
   *           selected : bool}[]} options 
   * The selections available on the options list.
   * id refers to the id that should be assigned the input. value refers to its textual
   * presentation.
   * @param {string} name - The name of the options list.
   * @param {boolean} required - Does the user need to answer the options list?
   */
  addOptionsListToForm(title, isRadio, options, name, required) {
    const container = document.createElement("li");
    const type = isRadio ? 'radio' : 'checkbox';
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");

    legend.textContent = title;
    fieldset.append(legend);

    options.forEach(selection => {
      let container = document.createElement("div");
      let input = document.createElement("input");
      let label = document.createElement("label");

      input.setAttribute("type", type);
      input.id = selection.id;
      input.setAttribute("name", name);
      if (Number(selection.default) === 1) {
        input.setAttribute("checked", true);
      }

      label.setAttribute("for", input.id);
      label.textContent = selection.value;  

      container.append(input, label);
      fieldset.append(container);
    });
    
    // to make an options list required, you just need to set required on one field.
    // https://stackoverflow.com/a/8287947/14146474
    if (required) {
      fieldset.querySelector("div input").setAttribute("required", "true");
    }

    this.inputs[name] = { element: fieldset, type: type };

    container.append(fieldset);
    this.#formContents.append(container);
  }
  
  /**
   * Add submit and cancel buttons to the form.
   * @param {string} confirmMsg - Message to display on the confirm.
   * @param {string} cancelMsg - Message to display on cancel.
   */
  addSubmitCancelButtons(confirmMsg, cancelMsg) {
    let submitButton = Utility.createElement("button", "form-submit");
    let cancelButton = Utility.createElement("button", "form-cancel");

    submitButton.textContent = confirmMsg;
    cancelButton.textContent = cancelMsg;

    submitButton.setAttribute("type", "submit");
    cancelButton.setAttribute("type", "button");
    
    this.#formContents.append(submitButton, cancelButton);
  }

  /**
   * Adds basic validation for inputs with datalists. Meaning, the given input
   * matches an entry in the list.
   * 
   * @param input {HTMLElement} - An input element with an attached datalist.
   * @param datalist {string[]} - String array representing the list of options.
   */
  #addDatalistValidation(input, datalist) {
    const error = input.parentNode.querySelector(".error");

    input.addEventListener("focusout", () => {
      let userInput = input.value.toLowerCase();
      if (userInput === "") {
        return;
      }

      let found = datalist.findIndex(country => country.toLowerCase() === userInput);
      if (found === -1) {
        // keep this here to catch bad submissions.
        input.setCustomValidity(`Not a valid ${input.name}.`);
        error.classList.add("active");
        input.classList.add("error-active");
        error.textContent = `Not a valid ${input.name}.`;
      } else {
        error.textContent = "";
        input.classList.remove("error-active");
        error.classList.remove("active");
      } 
    });      
  }

  /**
   * Add custom validation to a form input through the use of a callback.
   * The callback will be invoked each time the user moves out of focus of the
   * element.
   * @param {string} inputId - The id of the input to attach the validation to.
   * @param {function} callback - Callback to invoke to check for validation.
   * @param {string} event - The sort of event that causes the validation to be invoked.
   */
  attachValidation(inputId, callback, event="focusout") {
    const input = this.form.querySelector(`#${inputId}`);
    input.addEventListener(event, callback);
  }

  /**
   * Attach an annotation message below an input field. You can pass in multiple
   * messages; each element in the message block will be turned into a separate
   * p element.
   * @param {HTMLElement} inputId - The ID of the input to attach to.
   * @param {{string : string}[]} messages - The messages to include in the annotation.
   * Provide as a key-value pair, with the key being the class name for the element,
   * and the content being the message to show. 
   */
  attachAnnotation(inputId, ...messages) {
    const input = this.form.querySelector(`#${inputId}`);
    const container = Utility.createElement("ul", `${inputId}-annotations`);
    // convert messages into a 1D array.
    messages = messages.reduce((messages, message) => {
      return messages.concat(message);
    }, []);

    messages.forEach((msg) => {
      let note = document.createElement("li");
      note.className = msg.className;
      note.textContent = msg.textContent;

      container.append(note);
    });

    input.parentNode.append(container);
  }

  /**
   * A built-in method for checking password validation. Use this with 
   * pwRequirements.csv.
   */
  static addPasswordValidation(e) {
    let isValidPw = true;
    const password = e.currentTarget.value;
    const successClass = "req-met";
    const annotations = Array
        .from(document.querySelectorAll(".password-annotations > *"))
        .reduce((annotations, element) => {
          annotations[element.classList.item(0)] = element;
          return annotations;
        }, {});

    const requirementsNotMet = (annotationElement) => {
      isValidPw = false;
      annotationElement.classList.remove(successClass);
    }

    const requirementsMet = (annotationElement) => {
      annotationElement.classList.add(successClass);
    }

    if (password.length < 8) {
      requirementsNotMet(annotations.length);
    } else {
      requirementsMet(annotations.length);
    }

    if (password.match(/[0-9]/) === null) {
      requirementsNotMet(annotations.digit);
    } else {
      requirementsMet(annotations.digit);
    }

    if (password.match(/[A-Z]/) === null) {
      requirementsNotMet(annotations.uppercase);
    } else {
      requirementsMet(annotations.uppercase);
    }

    if (password.match(/[a-z]/) === null) {
      requirementsNotMet(annotations.lowercase);
    } else {
      requirementsMet(annotations.lowercase);
    }

    if (password.match(/\W/) === null) {
      requirementsNotMet(annotations.special);
    } else {
      requirementsMet(annotations.special);
    }

    if (!isValidPw) {
      e.currentTarget.setCustomValidity("Please ensure your password meets all requirements.");
    } else {
      e.currentTarget.setCustomValidity("");
    }
  }

  /**
   * A built-in method which ensures that password and confirm password matches.
   * If the confirm password does not match the password field, the span element
   * inside of the confirm password field will enable the active class. That is,
   *  as long as "confirm password" is not empty.
   * @param pwId {string} - The ID of the password input field.
   * @param confirmPwId {string} - The ID of the confirm password input field.
   */
  static addPasswordMatchValidation(form, pwId, confirmPwId, msg="Passwords do not match.") {
    const pwField = form.querySelector(`#${pwId}`);
    const confirmPwField = form.querySelector(`#${confirmPwId}`);
    const errorElement = confirmPwField.parentNode.querySelector(".error");

    confirmPwField.addEventListener("focusout", () => {
      if (confirmPwField.value !== "" 
          && pwField.value !== confirmPwField.value) {
        confirmPwField.setCustomValidity(msg);
        pwField.classList.add("active-error");
        errorElement.classList.add("active");
        errorElement.textContent = msg;
      } else {
        confirmPwField.setCustomValidity("");
        pwField.classList.remove("active-error");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
      }
    });
  }

  /**
   * Ensures an entered email is actually valid. Part of the provided validations 
   * of the form class.
   * @param {*} form 
   * @param {*} emailId 
   * @param {*} msg 
   */
  static addEmailValidation(form, emailId, msg="Please enter a valid email.") {
    const emailField = form.querySelector(`#${emailId}`);
    const errorElement = emailField.parentNode.querySelector(".error");

    emailField.addEventListener("focusout", () => {
      if (emailField.value !== "" &&
          emailField.value.match(Utility.emailRegex) === null) {
        emailField.setCustomValidity(msg);
        emailField.classList.add("active-error");
        errorElement.classList.add("active");
        errorElement.textContent = msg;
      } else {
        emailField.setCustomValidity("");
        emailField.classList.remove("active-error");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
      }
    });
  }
}
