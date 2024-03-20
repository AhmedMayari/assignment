"use strict";
function make_sandwich(items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Sandwich ready!\n");
}
make_sandwich(["Chicken", "Cheese", "Lettuce"]);
make_sandwich(["Chicken", "Cheese", "Tomato", "Mayonnaise"]);
make_sandwich(["Butter", "Jelly"]);
