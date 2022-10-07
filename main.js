const createWoodBlock = () => {
    // Return an object with 4 properties.
    let obj = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return obj
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    let str = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
    return str
}


//The 10-inch, pine woodblock was carved into a wooden flute

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)