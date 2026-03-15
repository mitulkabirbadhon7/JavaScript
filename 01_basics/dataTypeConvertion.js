let value1 = 42 
console.log(typeof value1)


let value2 = "42"
console.log(typeof value2)
// converting string to number
let convvalue2 = Number(value2)
console.log(typeof convvalue2)
// converting string to number with non-numeric characters
let value3 = "123abc"
let convvalue3 = Number(value3)
console.log(convvalue3) // NaN
console.log(typeof convvalue3) // number
// converting null to number
let value4 = null
let convvalue4 = Number(value4)
console.log(convvalue4) // 0
console.log(typeof convvalue4) // number

// converting undefined to number
let value5 = undefined
let convvalue5 = Number(value5)
console.log(convvalue5) // NaN
console.log(typeof convvalue5) // number

// converting boolean to number
let value6 = true
let convvalue6 = Number(value6)
console.log(convvalue6) // 1
console.log(typeof convvalue6) // number