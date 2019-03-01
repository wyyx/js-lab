// Create a class for the element
class PopUpInfo extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super()

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' })

		// Create spans
		const wrapper = document.createElement('span')
		wrapper.setAttribute('class', 'wrapper')

		const info = document.createElement('span')
		info.setAttribute('class', 'info')

		// Take attribute content and put it inside the info span
		const text = this.getAttribute('data-text')
		info.textContent = text

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style')
		console.log(style.isConnected)

		style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 1;
        z-index: 3;
      }
      :host {
        background-color: green;
      }
    `

		// Attach the created elements to the shadow dom
		shadow.appendChild(style)
		console.log(style.isConnected)

		shadow.appendChild(wrapper)
		wrapper.appendChild(info)
	}
}

// Define the new element
customElements.define('popup-info', PopUpInfo)
