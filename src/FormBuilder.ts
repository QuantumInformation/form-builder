import {Field, FieldTypes} from './components/TextField'

export class FormBuilder implements IComponent {

  private hostElement: HTMLElement


  constructor(private selector: string, private fields: Field[], isEditMode: boolean = true) {

    hostElement = document.querySelector(selector)

  }

  render() {
    const template =
      `<form>
        <div class='fields'>${this.fields.map(field => field.render())}</div>
        <button type="submit" style='margin-top: 10px' class='btn-block'>
         Submit
        </button>
      </form>`

    this.hostElement.innerHTML = template

  }

  getFormData() {
    return new FormData(this.hostElement.querySelector('form'))
  }
}


