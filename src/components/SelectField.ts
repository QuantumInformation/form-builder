import {IField} from "./IField";
export class SelectField implements IField {

  constructor(public isRequired: boolean,
              public name: string,
              public options: string,
              public placeHolder: String = null,) {
  }

  render() {
    return `<select  name='${field.name}'>
                  ${this.placeholder?`<option disabled selected>${field.placeholder}</option>`:''}
                  ${this.options.map(option => `<option>${option}</option>`).join('')}
                </select>`

  }

}

