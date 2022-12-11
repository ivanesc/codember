const numMin = 11098, numMax= 98123

const checkIncreasing = ((num, i, arr) => {
  return i==arr.length-1 ? +num >= +arr[i-1] : +num <= +arr[i+1]
})

const checkPassword = ((numMin, numMax) => {
  let listCorrectPasswd = []
  for (let n=numMin; n<numMax+1; n++) {
    const digitos = n.toString().split("")
    listCorrectPasswd = digitos.filter(num => num == 5).length >= 2 && digitos.every(checkIncreasing) && digitos.length == 5 ? [...listCorrectPasswd,n]:listCorrectPasswd
  }
  return `${listCorrectPasswd.length}-${listCorrectPasswd[55]}`
})

console.log(checkPassword(numMin, numMax))