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
   * @type {{defaultClass : element}[]}
   */
  inputs;

  constructor(className) {
    this.form = Utility.createElement("form", className);
    let ul = document.createElement("ul");
    
    this.form.append(ul);
  }

  /**
   * Add an input (with an accompanying label) to the form of this instance. A reference to the input 
   * can be obtained through the inputs object field.
   * 
   * @param {string} type - The type of input to add into the form.
   * @param {string} label - The label to advise what sort of input is needed.
   * @param {string} id - The id to refer to the input by; label will use this in "for=".
   * @param {string} classNames - Any additional class names assigned to the input.
   */
  addInputToForm(type="text", label, id, ...classNames) {
    const container = document.createElement("ul");
    
    const labelElem = document.createElement("label");
    labelElem.setAttribute("for", id);
    labelElem.textContent = label;

    const input = Utility.createElement("input", "form-input", ...classNames);
    input.setAttribute("type", type);
    input.id = id;
    input.name = id;

    container.append(labelElem, input, document.createElement("span"));
    
    const inputInfo = {
      id: id,
      elem: container,
      type: type,
    };

    this.inputs.push(inputInfo);
    this.form.append(inputInfo.elem);
  }
}
