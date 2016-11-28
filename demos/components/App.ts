import {IField} from "../../src/components/IField";
import {TextField} from "../../src/components/TextField";
import {SelectField} from "../../src/components/SelectField";
import {FormBuilder} from "../../src/formBuilder";
/**
 * @param {string} selector
 * @constructor
 */
export class App {


  private formBuilder = new FormBuilder(selector, fields)


  private fields: IField[] = [
    new TextField(true, "username", "Username"),
    new SelectField(true, "title", ["Mr", "Mrs"])
  ]


  constructor(private selector){

  private hostElement = document.querySelector(selector)


}






