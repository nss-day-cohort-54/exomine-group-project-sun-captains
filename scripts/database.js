/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    governors: [
        {
            id: 1,
            name: "Jim Smith",
            colonyId: 4,
            active: true
        },
        {
            id: 2,
            name: "James Wallow",
            colonyId: 3,
            active: false
        },
        {
            id: 3,
            name: "Stacy Fleetwood",
            colonyId: 1,
            active: true
        },
        {
            id: 4,
            name: "Tyler Dunn",
            colonyId: 5,
            active: true
        },
        {
            id: 5,
            name: "Kelsey Moore",
            colonyId: 4,
            active: true
        },
        {
            id: 6,
            name: "Madison Green",
            colonyId: 1,
            active: false
        },
        {
            id: 7,
            name: "Tony James",
            colonyId: 6,
            active: true
        },
        {
            id: 8,
            name: "Sarah Floor",
            colonyId: 2,
            active: true
        }

    ],
    colonies: [
        {
            id: 1,
            name: "Greenwood"
        },
        {
            id: 2,
            name: "Europa"
        },
        {
            id: 3,
            name: "Moon"
        },
        {
            id: 4,
            name: "Cordor"
        },
        {
            id: 5,
            name: "Livingston"
        },
        {
            id: 6,
            name: "Marsh"
        }

    ],
    facilityMinerals: [
        {
            id: 1,
            mineralId: 2,
            facilityId: 3,
            amount: 20
        },
        {
            id: 2,
            mineralId: 4,
            facilityId: 4,
            amount: 15
        },
        {
            id: 3,
            mineralId: 3,
            facilityId: 5,
            amount: 10
        },
        {
            id: 4,
            mineralId: 1,
            facilityId: 2,
            amount: 10
        },
        {
            id: 5,
            mineralId: 5,
            facilityId: 1,
            amount: 15
        }

    ],
    minerals: [
        {
            id : 1,
            name: "Copper"
        },
        {
            id: 2,
            name: "Pyrite"
        },
        {
            id: 3,
            name: "Magnesium"
        },
        {
            id: 4,
            name: "Mica"
        },
        {
            id: 5,
            name: "Quartz"
        }

    ],
    facilities: [
        {
            id: 1,
            name: "Clownings",
            active: true
        },
        {
            id: 2,
            name: "Willburn",
            active: true
        },
        {
            id: 3,
            name: "Biggums",
            active: true
        },
        {
            id: 4,
            name: "Mummington",
            active: true
        },
        {
            id: 5,
            name: "Walshberg",
            active: false
        }

    ],
    purchases: [
        { id: 1, colonyId: 1, mineralId: 1, amount: 10 }
    ],

    transientState: {}
}

// use getter functions to export all sets of data to be used in other modules 

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const getGovernors = () => {
    return database.governors.map(g => ({ ...g }))
}

export const getColonies = () => {
    return database.colonies.map(c => ({ ...c }))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(fM => ({ ...fM }))
}

export const getMinerals = () => {
    return database.minerals.map(m => ({ ...m }))
}

export const getState = () => {
    return {...database.transientState}
}

// use setter functions to set the state for all sets of data

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacilityMineral = (facilityMineralId) => {
    database.transientState.selectedFacilityMineral = facilityMineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColonyPurchase = (colonyPurchaseId) => {
    database.transientState.selectedColonyPurchase = colonyPurchaseId
    document.dispatchEvent(new CustomEvent("stateChanged"))
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
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

