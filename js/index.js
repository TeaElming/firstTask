export class Index {
  constructor() {
    // Input custom element
    this.nameInputElement = document.createElement('name-input')

    // Append the name-input element to the nameInputHere div
    const nameInputContainer = document.getElementById('nameInputHere')
    nameInputContainer.appendChild(this.nameInputElement)

    // Name entered event from NameInput class
    document.addEventListener('nameEntered', this.handleNameEntered.bind(this))
  }

  reverseName(string) {
    // Turn name string into array
    const nameInput = string.toLowerCase()
    const nameArray = nameInput.split('')
    const nameLength = nameArray.length // get lenght of name

    let backwardsArray = [] // empty array

    for (let i = 0; i < nameLength; i++) {
      backwardsArray[i] = nameArray[nameLength - (i + 1)] // length is one more than highest index
    }
    backwardsArray[0].toUpperCase()

    const reversedName = backwardsArray.join('')
    // Set first letter to upper case
    const reversedNameWithUppercase = reversedName.charAt(0).toUpperCase() + reversedName.slice(1)

    return reversedNameWithUppercase
  }

  checkPalindrome(originalName, reversedName) {
    if (originalName.toLowerCase() === reversedName.toLowerCase()) {
      return true
    }
    return false
  }

  handleNameEntered(event) {
    const responseContainer = document.getElementById('responseInputHere')
    responseContainer.innerHTML = '' // clear previous content

    const submittedName = event.detail.nameInput

    const reversedName = this.reverseName(submittedName)

    const responseDiv = document.createElement('div')
    if (this.checkPalindrome(submittedName, reversedName)) {

      responseDiv.textContent = `Your name in reverse is: ${reversedName} and it IS a palindrome, since it is the same as the name you entered: ${submittedName}.`
    } else {
      responseDiv.textContent = `Your name in reverse is: ${reversedName} and it IS NOT a palindrome.`
    }

    responseContainer.appendChild(responseDiv)
  }
}

new Index()