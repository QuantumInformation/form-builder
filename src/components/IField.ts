export interface IField {
  isRequired: boolean
  inEditMode: boolean
  value: string
  name: string
  render: ()=>string
}
