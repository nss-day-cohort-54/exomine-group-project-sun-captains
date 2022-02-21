import { getFacilityMinerals, setFacilityMineral, getMinerals } from "./database.js"
// rmember to import setters for selecting

// Add a change event listener
    // if it's changed invoke the setter function
    document.addEventListener("change", 
    (event) => {
    if (event.target.name === "facilityMineral") {
        setFacilityMineral(parseInt(event.target.value))
    }
})

// stored FacilityMinerals array in variable facilityMinerals    


// This page will store function for facility minerals selection box and html display 





// Iterate to check if mineral.id === mineralFacilities.mineralId, then return mineral.name has mineralFacilities.amount tons
// maybe use .find method

// store the minerals and FacilityMinerals arrays in two variables
const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()
// define function that finds the amount of a certain mineral
const findMineralAmount = (facilityMineral) => {
    // using the .find method to find the 
    const foundMineral = facilityMinerals.find(
        // uses mineral as the parameter
        (facilityMineral) => {
            // return the matching id, this finds the specific mineral
            return mineral.id === facilityMineral.mineralId
        }
    )
    // set var foundAmount to equal the specific minerals amount
    let foundAmount = foundMineral.amount
    
}








// main html for displaying mineral inventory in facility
export const FacilityMinerals = () => {
    //iterates through the minerals array and returns a string displaying the mineral name and amount
    let html = `<ul>
        ${
            minerals.map(mineral=> {
                return `<li>
                            
                <input type="radio" name="mineral" value="${mineral.id}" /> 
                            ${foundAmount} tons of ${mineral.name}
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
// export const ColonyPurchase = () => {
//     html = ""

//     html += `<li>
//         ${mineralAmount} tons of ${mineral.name}
//     </li>`
// }