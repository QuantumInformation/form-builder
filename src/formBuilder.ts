import {Field,FieldTypes} from './components/TextField'

export class FormBuilder{

  constructor(private fields :Field[], isEditMode:boolean = true){

  // we render the fields to work with a flexbox form layout

  const fullFieldHTML = fields

  /*     .filter(field => {
   return field.editable
   })*/

    .map(field => {

      if (field.type === 'select') {
        return `<select  name='${field.name}'>
                  ${field.placeholder?`<option disabled selected>${field.placeholder}</option>`:''}
                  ${field.options.map(option => `<option>${option}</option>`).join('')}
                </select>`
      }
      if (field.type === 'textarea') {
        return `<textarea  name='${field.name}'  placeholder='${field.placeholder}'></textarea>`
      }

      if (field.editable) {
        return `<div class='field'>
                   <input name='${field.name}' type='${field.type}'  value='${field.value}'
                       placeholder='${field.placeholder}'>
                  </div> `
      }
      return `<div class='field'>
                  <input name='${field.name}' type = 'hidden' value='${field.value}'>
                 </div>`
    }).join('')

  // todo, generate form validation
  const template =
    `<form>
        <div class='fields'>${fullFieldHTML}</div>
        <button type="submit" style='margin-top: 10px' class='btn-block'>
         Submit
        </button>
      </form>`

  const el = document.createElement('DIV')
  el.innerHTML = template
  this._element = el.firstChild
}

FormBuilder.prototype = {
  getElement() {
    return this._element
  },

  /**
   * queries the form elements and returns the data
   * @returns {{}}
   */
  getFormData() {
  /*  const data = {}
    this._fields.forEach(function (field) {
      console.log(this._element.querySelector(`[name=${field.name}`))
      data[field.name] = this._element.querySelector(`[name=${field.name}`).value
    }.bind(this))

    method: 'POST',
      body: new FormData(form)*/

    return new FormData(this._element)
  }
}

