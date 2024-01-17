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
    services: `\nLEARNABLE E-COMMERCE SERVICES:\nEnter 1 - To see our products.\nEnter 5 - to exit the application.\n`,
    cart: [],
    goodbye: `\nPlease do to visit our site again.see you soon!!!\n`,
    subOption: {},
    productDes: [`${des}It is ideal for all occassions and events.${price}`, `${des}Thanks to unique adaptable fitting. The breathable upper material and the lightweight foot bed makes sure that the shoe is offering a best quality ventilation experience to keep your feet dry and cool all day. We have engineered this safety shoes to be extremely comfortable without feeling a sense of fatigue or discomfort. Some say it feels like having a sock on your feet.${price}`],
    watches: {
        types: [{ item: 'Richard Mille', price: generatePrice(), id: 1133 }, { item: 'Patek Phillipe', price: generatePrice(), id: 1122 }, { item: 'Rolex', price: generatePrice(), id: 1144 }, { item: 'Schwarz Etienne', price: generatePrice(), id: 1155 }]
    },
    footwears: {
        types: [{ item: 'Sandals', price: generatePrice(), id: 2233 }, { item: 'Boots', price: generatePrice(), id: 2244 }, { item: 'Heels', price: generatePrice(), id: 2255 }, { item: 'Sneakers', price: generatePrice(), id: 2266 }]
    },
    "bluetooth speakers": {
        types: [{ item: 'JBL', price: generatePrice(), id: 3344 }, { item: 'Sony', price: generatePrice(), id: 3355 }, { item: 'Bose Mini', price: generatePrice(), id: 3366 }, { item: 'Oraimo', price: generatePrice(), id: 3377 }]
    },
    "home appliances": {
        types: [{ item: 'Microwave', price: generatePrice(), id: 4455 }, { item: 'Blender', price: generatePrice(), id: 4466 }, { item: 'Washing Machine', price: generatePrice(), id: 4477 }, { item: 'Refrigerator', price: generatePrice(), id: 4488 }]
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

            rl.write(`\n${help}Example enter "a" for ${learnableEcommerceObj.subOption["a"].toUpperCase()} category.\n`)
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
        case `1133`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(1133))
            return
        }
        case `1122`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(1122))
            return
        }
        case `1144`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(1144))
            return
        }
        case `1155`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(1155))
            return
        }
        case `2233`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(2233))
            return
        }
        case `2244`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(2244))
            return
        }
        case `2255`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(2255))
            return
        }
        case `2266`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(2266))
            return
        }
        case `3344`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(3344))
            return
        }
        case `3355`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(3355))
            return
        }
        case `3366`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(3366))
            return
        }
        case `3377`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(3377))
            return
        }
        case `4455`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(4455))
            return
        }
        case `4466`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(4466))
            return
        }
        case `4477`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(4477))
            return
        }
        case `4488`: {
            eraseUserInput()
            console.log(`YOUR CART: `, addToCart(4488))
            return
        }
        case "checkout": {
            eraseUserInput()
            console.log(`ORDER SUMMARY: `, checkout())
            return
        }
    }
})

rl.on('close', () => {
    if (exitCode === String(5)) {
        rl.write(goodbye.toUpperCase())
    }
    process.exit()
})



function listProductCategory(char) {

    const option = learnableEcommerceObj.subOption[char]

    //category heading.
    console.log(`${option.toUpperCase()}( Enter the product id to add product to cart ):`)
    learnableEcommerceObj[option].types.forEach((obj, index) => {
        console.log(`${index + 1}. ${obj.item} (PRICE: ${formatPrice(obj.price)}) - id: ${obj.id}`)
    })
}

function generatePrice() {
    return Math.floor(Math.random() * 500).toFixed(2)
}

function addToCart(id) {
    const obj = {
        "11": "watches",
        "22": "footwears",
        "33": "bluetooth speakers",
        "44": "home appliances"
    }
    const str = String(id)
    if (str.startsWith("11")) {
        learnableEcommerceObj[obj["11"]].types.forEach(obj => {
            if (obj.id === Number(id)) {
                learnableEcommerceObj.cart.push({ product: obj.item, price: formatPrice(obj.price) })
            }
        })
    }
    else if (str.startsWith("22")) {
        learnableEcommerceObj[obj["22"]].types.forEach(obj => {
            if (obj.id === Number(id)) {
                learnableEcommerceObj.cart.push({ product: obj.item, price: formatPrice(obj.price) })
            }
        })
    }
    else if (str.startsWith("33")) {
        learnableEcommerceObj[obj["33"]].types.forEach(obj => {
            if (obj.id === Number(id)) {
                learnableEcommerceObj.cart.push({ product: obj.item, price: formatPrice(obj.price) })
            }
        })
    }
    else if (str.startsWith("44")) {
        learnableEcommerceObj[obj["44"]].types.forEach(obj => {
            if (obj.id === Number(id)) {
                learnableEcommerceObj.cart.push({ product: obj.item, price: formatPrice(obj.price) })
            }
        })
    }

    return learnableEcommerceObj.cart

}


function checkout() {
    let total = 0
    let str = "cartItems"
    let finalCart = { [str]: [] }
    learnableEcommerceObj.cart.forEach(item => {
        total += Number(item.price.substring(1))
        finalCart[str].push(item.product)
    })

    const now = new Date()
    const day = `${now.getDay() < 10 ? "0" + now.getDay() : now.getDate()}`
    const month = `${now.getMonth() + 1}`
    const year = `${now.getFullYear()}`
    const amPm = now.getHours() >= 12 ? "PM" : "AM"

    finalCart["Total"] = formatPrice(total)
    finalCart["Product"] = `${finalCart[str].length} item(s) purchased.`
    finalCart["time"] = `${now.getHours() % 12}:${now.getMinutes()}  ${amPm}`
    finalCart["date"] = `${day}/${month}/${year}`


    return finalCart
}

function formatPrice(price) {
    let pr = price
    const nigerianCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const formattedNumber = nigerianCurrencyFormat.format(pr);
    return formattedNumber
}