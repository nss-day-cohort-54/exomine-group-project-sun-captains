// Import getter and setter functions for governor data
import { getGovernors } from "./database.js"
// This page will store function for governor selection box and html display

// Declare a new variable that holds return value of governors getter function
const governors = getGovernors()

// Add a change event listener that listens for governor to be changed
// If governor is changed, invoke the setter function


// Export and declare a function that displays selection box for governors
export const Governors = () => {
    let html = 
        `<select id="governor">
        <option value="0">Choose a governor</option>
        `
// Use .map() on governors array for converting objects to <li> elements
    const listItems = governors.map(
        (governor) => {
            return `
                <option value="${governor.id}">${governor.name}</option>
            `
        }
    )

    html += listItems.join("")
    html += `</select>`

// Return html at the end
    return html
}
