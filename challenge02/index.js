import getEncryptedMessage from "./services/getEncryptedMessage"
import { MAX_ASCII, MIN_ASCII } from "./utils/constants"

const isLowercaseInAscii = number => {
  return number >= MIN_ASCII && number <= MAX_ASCII
}

const encryptedMessage = await getEncryptedMessage()

const decodeMessage = encryptedMessage => {
  let encryptElem = ""
  let decryptedMessage = ""
  
  encryptedMessage.split("").map(elem => {
      if (elem === " ") 
          decryptedMessage += " "
      else {
          encryptElem += elem
          const number = parseInt(encryptElem)
          if (isLowercaseInAscii(number)) {
              decryptedMessage += String.fromCharCode(number)
              encryptElem = ""
          }
      }
  })
  return decryptedMessage
}

console.log(decodeMessage(encryptedMessage))