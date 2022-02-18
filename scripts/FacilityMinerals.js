import { getFacilityMinerals, setFacilityMineral, getColonies } from "./database.js"


const colonies = getColonies()
// Add a change event listener
    // if it's changed invoke the setter function
    document.addEventListener("change", 
    (event) => {
    if (event.target.name === "facilityMineral") {
        setFacilityMineral(parseInt(event.target.value))
    }
})

// stored FacilityMinerals array in variable facilityMinerals    
const facilityMinerals = getFacilityMinerals()
// This page will store function for facility minerals selection box and html display 

export const FacilityMinerals = () => {
    let html = `<ul>
        ${
            facilityMinerals.map(facilityMineral => {
                return `<li>
                            <input type="radio" name="facilityMineral" value="${facilityMineral.id}" /> 
                            ${facilityMineral.amount} tons of mineral ${facilityMineral.mineralId}
                        </li>`
            }).join("")
        }
    </ul>`
    return html
}
// Displays amount of facility minerals available at the facility chosen 

// Add radio buttons for governor to select a mineral purchase 

// Each time a mineral is selected display a message in the cart 

// Have the ability to choose from more than one facility and keep track of the purchased list 