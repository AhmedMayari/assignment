"use strict";
function create_car(manufacturer, model, options) {
    let car = Object.assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
let carInfo = create_car("Honda", "Civic", { color: "Grey", year: 2012 });
console.log(carInfo);
