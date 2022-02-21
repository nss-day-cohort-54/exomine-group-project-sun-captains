// Only enable drop down if a governor is chosen

// Import getter and setter functions for facility data
import { getFacilities, setFacility } from "./database.js";
import { FacilityMinerals } from "./FacilityMinerals.js";
// Declare a new variable that holds return value of faciltiies getter function
const facilities = getFacilities()
// If facility is changed, invoke the setter function
// Add a change event listener that listens for facility to be changed
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))
            FacilityMinerals()
        }
    }
)

// function for facility selection box and html display
// Export and declare a function that displays selection box for facilities
export const Facilities = () => {

    let html =

        `<select disabled id="facility">
    <option value="0">Choose a facility</option>
    `

    // Use .map() on faciltiies array for converting objects to <li> elements
    const listItemsArray = facilities.map(
        (facility) => {
            // each color id will print the color's name attributed to it
            return `
    <option value="${facility.id}"> ${facility.name}</option>
    `
        }
    )
    // Return html at the end
    html += listItemsArray.join("")
    html += `</select>`

    return html

}