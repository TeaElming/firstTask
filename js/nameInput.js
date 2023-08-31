// define template
const template = document.createElement('template')
template.innerHTML = `
<form>
  <label for="input-name">Enter your name here: </label>
  <input type="text" id="input-name">
  <button id="save-button" type="submit">Save</button>
</form>
`

class NameInput extends HTMLElement {
  constructor () {
    super()

    this.nameInput = 'Blank Space'
  }

  // When added to the DOM
  connectedCallback () {
    this.form = this.shadowRoot.querySelector('form')
    this.input = this.shadowRoot.querySelector('"input-name')

    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (this.input.value !== '') {
        this.nameInput = this.input.value
        this.remove()
        const nameEnteredEvent = new CustomEvent('nameEntered')
        document.dispatchEvent(nameEnteredEvent)
      }
    })
  }
}