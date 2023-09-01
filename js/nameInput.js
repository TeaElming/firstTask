// define template
const template = document.createElement('template')
template.innerHTML = `
<form>
  <label for="input-name">Enter your name here: </label>
  <input type="text" id="input-name">
  <button id="submit-button" type="submit">Submit</button>
</form>
`

class NameInput extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))


    this.nameInput = 'Blank Space'
  }

  // When added to the DOM
  connectedCallback() {
    this.form = this.shadowRoot.querySelector('form')
    this.input = this.shadowRoot.querySelector('#input-name')

    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (this.input.value !== '') {
        this.nameInput = this.input.value
        console.log(this.nameInput)
        const nameEnteredEvent = new CustomEvent('nameEntered', { detail: { nameInput: this.nameInput}})
        document.dispatchEvent(nameEnteredEvent)
      }
    })
  }
}
customElements.define('name-input', NameInput)