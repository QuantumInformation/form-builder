import {IField} from "./IField";
export class TextField implements IField {

  constructor(public isRequired: boolean,
              public name: string,
              public placeHolder: String) {
  }

  render() {
    if (field.editable) {
      return `<div class='field'>
                <input name='${this.name}' type='datetime-local'  value='${this.value}'
                   placeholder='${this.placeholder}'>
              </div> `
    }
    return `<div class='field'>
               <input name='${this.name}' value='${this.value}'>
             </div>`

  }

}

