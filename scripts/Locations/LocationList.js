import {GetLocationData} from "./LocationDataProvider.js"
import LocationHTML from "./Location.js"

const LocationList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locationsList")
    const LocationArray = GetLocationData()

    for (const location of LocationArray){

    
    //const LocationOutput=LocationHTML(location)
    // Add to the existing HTML in the content element
    contentElement.innerHTML+= LocationHTML(location) //LocationOutput
    //contentElement.innerHTML += fishHTML
      //  <section class="fishList">
        //    All the fish go here!
        //</section>
    }
}

export default LocationList