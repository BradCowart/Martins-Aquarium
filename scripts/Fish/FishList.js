/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import {useFish} from "./FishDataProvider.js"
import Fish from "./Fish.js"

const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const FishArray = useFish()

    for (const fishObject of FishArray){

    
    const fishHTML=Fish(fishObject)
    // Add to the existing HTML in the content element
    contentElement.innerHTML+= fishHTML
    //contentElement.innerHTML += fishHTML
      //  <section class="fishList">
        //    All the fish go here!
        //</section>
    }
}

export default FishList