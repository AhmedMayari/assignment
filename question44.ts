function create_car(manufacturer: string, model: string, options: { [key: string]: any }): Record<string, any> {
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model,
        ...options
    };
    return car;
}

let carInfo = create_car("Honda", "Civic", { color: "Grey", year: 2012 });

console.log(carInfo);
