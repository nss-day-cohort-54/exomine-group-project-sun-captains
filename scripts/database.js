/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    governers: [

    ],
    colonies: [

    ],
    facilityMinerals: [

    ],
    minerals: [

    ],
    facilities:[

    ],
    purchases: [

    ],

    transientState: {}
}

// use getter functions to export all sets of data to be used in other modules 

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

// use setter functions to set the state for all sets of data

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const purchaseMineral = () => {
    // Copy the current state of user choices

    // Add a new primary key to the object

       // Add a timestamp to the order

    // Add the new order object to custom orders state

    // Reset the temporary state for user choices

     // Broadcast a notification that permanent state has changed
    

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

