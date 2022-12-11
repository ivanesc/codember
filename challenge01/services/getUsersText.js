import fetch from 'node-fetch'
import { endpoints, url } from "../utils/constants"

export default async () => {
    try {
      const response = await fetch(url + endpoints.userListText)
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
  
      const result = await response.text()
      return result
    } catch (err) {
      console.log(err)
    }
}