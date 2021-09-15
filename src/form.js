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
    this.form = Utility.createElement("form", className);
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
      let found = datalist.findIndex(country => country.toLowerCase() === userInput);
      if (found === -1) {
        // keep this here to catch bad submissions.
        input.setCustomValidity("Not a valid country.");
        error.classList.add("active");
        error.textContent = "Not a valid country.";
      } else {
        error.textContent = "";
        error.classList.remove("active");
      } 
    });      
  }

  /**
   * Add custom validation to a form input through the use of a callback.
   * The callback will be invoked each time the user moves out of focus of the
   * element.
   * @param {*} input 
   */
  addValidation(input, callback) {

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


}
