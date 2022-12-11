import fs from "node:fs"
const colors = fs.readFileSync('./utils/lights.txt')

//const colorsArr = eval(colors.toString());
const colorsArr = JSON.parse(colors.toString())

const colorsExceptFirst = colorsArr.slice(1)

const calcMax = ((zebra, zebraMax) => {
  return zebraMax = zebra.length >= zebraMax.length ? [...zebra]:zebraMax
})

const getZebraMax = (colorsExceptFirst => {
  let zebra = []
  zebra.push(colorsArr.at(0))
  let zebraMax = [...zebra]

  let primeraZebra = false
  let i = 0

  colorsExceptFirst.map(color => {
    //La primera vez que haya una zebra de sólo 2 elementos distintos habrá una nueva zebra máxima
    if (primeraZebra !== true && color !== zebra[i]) {
        zebra.push(color)
        zebraMax = calcMax(zebra,zebraMax)
        primeraZebra = true
    } 
    else {
      //Se vuelve a calcular la zebra máxima en cuanto tenemos ya al menos una y hay una alternancia de colores
      if (color === zebra[i] && color !== zebra[i+1] && primeraZebra) {
        zebra.push(color)
        i++
        zebraMax = calcMax(zebra,zebraMax)
      } 
      else {
        //Aquí tendríamos una nueva zebra pero sin necesidad de volver a calcular el máximo ya que  sólo habrá 2 elementos y nunca se superará la longitud de zebra máxima alcanzada antes
        if (color !== zebra[i+1] && primeraZebra) {
          zebra.push(color)
          zebra = zebra.splice(-2)
          zebraMax = calcMax(zebra,zebraMax)
          i = 0
        }
        //Este sería el caso en que se repite el color actual y el último. Se corta la zebra calculada hasta entonces y se volvería a tener un color
        else {
          primeraZebra = false
          zebra = []
          zebra.push(color)
          i = 0
        }
      }
    } 
  })
  return `${zebraMax.length}@${zebraMax.at(-1)}`
})

console.log(getZebraMax(colorsExceptFirst))



