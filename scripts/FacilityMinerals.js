import { getFacilityMinerals, setFacilityMineral, getMinerals, getState} from "./database.js"
// rmember to import setters for selecting

// Add a change event listener
    // if it's changed invoke the setter function
    document.addEventListener("change", 
    (event) => {
    if (event.target.name === "mineral") {
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
// define function that finds the amount of a certain mineral chosen
const findMineralAmount = (facilityMineral) => {
    // using the .find method to find the mineral with the right conditions
    const foundMineral = minerals.find(
        // uses mineral as the parameter
        (mineral) => {
            // return to check if matching ids of the mineral and mineralId property of the facility
            return mineral.id === facilityMineral.mineralId
        }
    )
    
    // return foundMineral which will be the the mineral object 
    return foundMineral
}
 







// main html for displaying mineral inventory in facility
export const FacilityMinerals = () => {
    // set a var to the getState function to get a copy of the current transient state 
    let state = getState()
    // removed the FaciliyMinerals function from main html and added a query selector to input the new html
    let facilityMineralContainer = document.querySelector(".choices_facilityMinerals")
    // defined a function that will filter through the facilityMinerals array to check if the facilityMineral
    // has been selected(state being changed)
    let filteredFacilityMinerals = facilityMinerals.filter(
        facilityMineral => facilityMineral.facilityId === state.selectedFacility
    )
    //for the facilityMineral selected html will be returned showing the amount of inventory for that facility
    let html = `<ul>
        ${
            filteredFacilityMinerals.map(facilityMineral=> {
                let foundMineral = findMineralAmount(facilityMineral)
                return `<li>
                            
                <input type="radio" name="mineral" value="${foundMineral.id}" /> 
                            ${facilityMineral.amount} tons of ${foundMineral.name}
                        </li>`
            }).join("")
        }
    </ul>`
    
    facilityMineralContainer.innerHTML = html
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