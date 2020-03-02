
const  LocationHTML= (location) => {
    return `
        <div class="location">
            <div class="location__name"><h1>${location.name}</h1></div>
            <div class="location--Columns">
                <div class=location__descp>${location.descp}</div>
                <div class="imagebox"><img class="location__image" src="${location.image}" alt=""></image></div>
            </div>
            <div class="dialogButton">
                <button id="button--${location.name}">Details</button>   
                <dialog class="dialog--location" id="details--${location.name}">
                    <div>Temprature: ${location.temprature}</div>
                    <button class="button--close">Close Dialog</button>
                </dialog>
            </div>        
        </div>
    `
}
export default LocationHTML
