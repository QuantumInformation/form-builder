import {IField} from "../../src/components/IField";
import {TextField} from "../../src/components/TextField";
import {SelectField} from "../../src/components/SelectField";
import {FormBuilder} from "../../src/FormBuilder";
/**
 * @param {string} selector
 * @constructor
 */
export class App {

  private formBuilder: FormBuilder
  private hostElement: HTMLElement

  constructor(private selector) {

    hostElement = document.querySelector(selector)
    const formContainer = document.createElement('ARTICLE')
    formContainer.className = 'form-container'
    this.hostElement.appendChild(formContainer)

    const fields: IField[] = [
      new TextField(true, "username", "Username"),
      new SelectField(true, "title", ["Mr", "Mrs"])
    ]

    formBuilder = new FormBuilder('.form-container', fields)
  }
}






