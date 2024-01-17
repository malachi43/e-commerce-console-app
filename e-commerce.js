//to enable us read input form the command line.
const readline = require("node:readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const pathArray = __filename.split(process.platform === `win32` ? "\\" : "/")
const filename = pathArray[pathArray.length - 1]
let des = `\nDESCRIPTION:\n`
let price = '\nPRICE:\n'
let exitCode

const learnableEcommerceObj = {
    welcomeMessage: `\nWELCOME!!! TO LEARNABLE E-COMMERCE APPLICATION.\nLEARNABLE E-COMMERCE platform makes your buying experience a memorable one :). It is just a command away.Press 0 for an immersive experience.\n`,
    products: ["watches", "footwears", "bluetooth speakers", "home appliances"],
    services: `\nLEARNABLE E-COMMERCE SERVICES:\nPress 1 - To see our products.\nPress 5 - to exit the application.\n`,
    cart: [],
    goodbye: `\nPlease do to visit our site again.see you soon!!!\n`,
    subOption: {},
    productDes: [`${des}It is ideal for all occassions and events.${price}`, `${des}Thanks to unique adaptable fitting. The breathable upper material and the lightweight foot bed makes sure that the shoe is offering a best quality ventilation experience to keep your feet dry and cool all day. We have engineered this safety shoes to be extremely comfortable without feeling a sense of fatigue or discomfort. Some say it feels like having a sock on your feet.${price}`],
    watches: {
        types: [{ item: 'Richard Mille', price: generatePrice() }, { item: 'Patek Phillipe', price: generatePrice() }, { item: 'Rolex', price: generatePrice() }, { item: 'Schwarz Etienne', price: generatePrice() }]
    },
    footwears: {
        types: [{ item: 'Sandals', price: generatePrice() }, { item: 'Boots', price: generatePrice() }, { item: 'Heels', price: generatePrice() }, { item: 'Sneakers', price: generatePrice() }]
    },
    "bluetooth speakers": {
        types: [{ item: 'JBL', price: generatePrice() }, { item: 'Sony', price: generatePrice() }, { item: 'Bose Mini', price: generatePrice() }, { item: 'Oraimo', price: generatePrice() }]
    },
    "home appliances": {
        types: [{ item: 'Microwave', price: generatePrice() }, { item: 'Blender', price: generatePrice() }, { item: 'Washing Machine', price: generatePrice() }, { item: 'Refrigerator', price: generatePrice() }]
    }
}

const welcomeMessage = learnableEcommerceObj.welcomeMessage
const services = learnableEcommerceObj.services
const goodbye = learnableEcommerceObj.goodbye
const errorMsg = `\nYou entered a wrong input.\n`
let init = `run "node ${filename}" to lauch the app again.`
const help = `Use the alphabet list to select a product category.`
const productCategoryText = `OUR PRODUCTS CATEGORY:\n`

//this clears the user input after it is entered.
function eraseUserInput() {
    process.stdout.moveCursor(0, -1)
    process.stdout.clearLine(0)
}

rl.question(welcomeMessage, (answer) => {
    eraseUserInput()
    if (Number(answer) === 0) {
        process.stdout.write(services)
    } else {
        process.stdout.write(errorMsg)
        process.stdout.write(init)
        rl.close()
    }
})

rl.on('line', (line) => {
    switch (line) {
        case `${1}`: {
            eraseUserInput()
            rl.write("\n")
            let count = 96
            rl.write(productCategoryText)
            let n = learnableEcommerceObj.products.length

            for (let i = 0; i < n; i++) {
                learnableEcommerceObj.subOption[String.fromCharCode(++count)] = learnableEcommerceObj.products[i].toLowerCase()
                rl.write(learnableEcommerceObj.subOption)
                rl.write(`${String.fromCharCode(count)}. ${learnableEcommerceObj.products[i].toUpperCase()}\n`)
            }

            rl.write(`\n${help}Example enter "a" for itemes category.\n`)
            return
        }
        case `${5}`: {
            rl.close()
            exitCode = 5
            return
        }
        case `a`: {
            eraseUserInput()
            //check if the subOption object is not empty.
            if (Object.keys(learnableEcommerceObj.subOption).length > 0) {
                return listProductCategory(`a`)
            }
            return
        }
        case `b`: {
            eraseUserInput()
            //check if the subOption object is not empty.
            if (Object.keys(learnableEcommerceObj.subOption).length > 0) {
                return listProductCategory(`b`)
            }
            return
        }
        case `c`: {
            eraseUserInput()
            //check if the subOption object is not empty.
            if (Object.keys(learnableEcommerceObj.subOption).length > 0) {
                return listProductCategory(`c`)
            }
            return
        }
        case `d`: {
            eraseUserInput()
            //check if the subOption object is not empty.
            if (Object.keys(learnableEcommerceObj.subOption).length > 0) {
                return listProductCategory(`d`)
            }
            return
        }

        // default: {
        // console.log(`Please select a valid option.`)
        // }
    }
})

rl.on('close', () => {
    if (exitCode === String(5)) {
        rl.write(goodbye.toUpperCase())
    }
    process.exit()
})

function productDes(char) {
    let index = String(char.toLowerCase().codePointAt(0)) - "a".codePointAt(0)
    let des = learnableEcommerceObj.productDes[index]
    console.log(des)
}

function listProductCategory(char) {

    const option = learnableEcommerceObj.subOption[char]
    //category heading.
    console.log(`${option.toUpperCase()}( Use the number list to add product to cart ):`)
    learnableEcommerceObj[option].types.forEach((obj, index) => {
        let pr = obj.price
        const nigerianCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        const formattedNumber = nigerianCurrencyFormat.format(pr);
        console.log(`${index + 1}. ${obj.item} (PRICE: ${formattedNumber})`)
    })
}

function generatePrice() {
    return Math.floor(Math.random() * 500).toFixed(2)
}

function addToCart() { }