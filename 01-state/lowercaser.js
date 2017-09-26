const lowercaser = (input) => {
  if(typeof input != 'string'){
    throw ('input is not a valid string')
  }
  return input.toLowerCase()
}

// const lowercaser = (input) =>{
//   return
// }

module.exports = lowercaser
