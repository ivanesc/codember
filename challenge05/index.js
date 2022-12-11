import fs from "fs"

let tecnologiasOriginal = fs.readFileSync('./utils/mecenas.json')
tecnologiasOriginal = JSON.parse(tecnologiasOriginal.toString())


function UltimoSuperviviente (tecnologiasOriginal) {
  let elemento = 0, tama
  const tecnologias = [...tecnologiasOriginal]

  while (tecnologias.length > 1) {

    if (elemento == 0 || elemento == -1)
      tama = tecnologias.length

    tecnologias.splice(elemento+1, 1)
  
    elemento++

    if (tecnologias.length == 2) {
      elemento == 1 ? tecnologias.splice(0,1) : tecnologias.splice(1,1)
      break
    }
  
    if (elemento >= tecnologias.length-1) {
      elemento = tama % elemento == 0 ? 0 : -1
    }
  }
  
  console.log(`El superviviente es: ${tecnologias[0]}`) 
}

UltimoSuperviviente(tecnologiasOriginal)