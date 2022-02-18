// Import the exomine.js module

// Set the variable mainContainer equal to the targeted area class container in index.html
const mainContainer = document.querySelector("#container")

// Declare a function that will render the HTML in the exomine function 
const renderAllHTML = () => {
    mainContainer.innerHTML = // Exomine()
}

// Invoke the function
renderAllHTML()

// Add an event listener that will display the new state to the user
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})