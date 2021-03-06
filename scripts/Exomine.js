import { FacilityMinerals } from "./FacilityMinerals.js"
// This module will be in charge of structuring HTML
// Import all necessary functions below
import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"

// Add event listener for purchase mineral button on this module

// We will invoke functions from other modules here with string interpoloation 
// Import string interpolation functions and order button function

export const Exomine = () => {
    return `
    <h1>Exomine</h1>

    <article class="choices">
        <section class="choices_governors options">
        <h2>Choose Governor</h2>
        ${Governors()}
    </section>
    <section class="choices_facilities options">
        <h2>Choose Facility</h2>
        ${Facilities()}
    </section>
        <section class="choices_facilityMinerals options">
        <h2>Minerals at Facility</h2>
        
    
    </section>

    <article>
    <br>
    <h2>Cart</h2>
    <button id="orderButton">Purchase Mineral</button>
    </article>

    <article class="purchases">
            <h2>Available Resources for Colony</h2>
            Colony purchase function goes here
        </article>
    `
}