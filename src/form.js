import Utility from "./utility";

/**
 * A class for creating form elements with custom validation
* techniques, utilizing the Constraint Validation API.
 */
export default class Form {
  
  /**
   * The form element.
   * @type {HTMLFormElement}
   */
  form;
  /**
   * The inputs given to the form, arranged in order of addition. 
   * @type {{id : {element : HTMLelement, type : type}}[]}
   */
  inputs;

  constructor(className) {
    this.form = Utility.createElement("form", className);
    let ul = document.createElement("ul");
    
    this.form.append(ul);

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
   * @param {string} classNames - Any additional class names assigned to the input.
   */
  addInputToForm(type="text", labelText, id, required, ...classNames) {
    const container = document.createElement("li");
    
    const labelView = document.createElement("label");
    labelView.setAttribute("for", id);
    labelView.textContent = labelText;

    const input = Utility.createElement("input", "form-input", ...classNames);
    input.setAttribute("type", type);
    input.setAttribute("required", required);
    input.id = id;
    input.name = id;

    container.append(labelView, input, document.createElement("span"));
    
    this.inputs[id] = { element: container, type : type };

    this.form.append(this.inputs[id].element);
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
    this.form.querySelector(`#${inputId}`).setAttribute("list", listId);
    this.form.querySelector(`#${inputId}`)
        .insertAdjacentElement("afterend", dataList);

    dataList.id = listId;

    list.forEach(entry => {
      let option = document.createElement("option");
      option.textContent = entry;
      dataList.append(option);
    });
  }

  /**
   * Create an options list and add it to the form.
   * 
   * @param {string} title - The title provided to the legend.
   * @param {string} isRadio - if true, then make a radio option list, else checkboxes.
   * @param { {id : string,
   *           value : string,
   *           selected : bool}[], } options 
   * The selections available on the options list.
   * id refers to the id that should be assigned the input. value refers to its textual
   * presentation.
   * @param {string} name - The name of the options list.
   * @param {boolean} required - Does the user need to answer the options list?
   */
  addOptionsListToForm(title, isRadio, options, name, required) {
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

    this.form.append(fieldset);
  }
  
}
