import users from "./services/getUsersText"
import { REQUIRED_FIELDS } from "./utils/constants"

const transformUserListTextToListObject = (users => {
  let allUsers = [], separateUsers = []

  const lines = users.split("\n")

  lines.forEach(value => {
    if (value !== "") {
      separateUsers.push(Object.fromEntries(value.split(" ").map(elem => elem.split(":"))))
    } else {
      separateUsers = Object.assign({}, ...separateUsers)
      allUsers.push(separateUsers)
      separateUsers=[]
    } 
  })
  return allUsers
})

const checkUsers = ((users, validProperties) => {

  let totalValidUsers = users.filter(user => validProperties.every(prop => Object.keys(user).some(elem => elem === prop)))

  console.log(`Total valid users: ${totalValidUsers.length} \n Last valid user: ${totalValidUsers[totalValidUsers.length-1]['usr']}`)

})

const allUsersText = await users()

const listObjectsUser = transformUserListTextToListObject(allUsersText)

checkUsers(listObjectsUser, REQUIRED_FIELDS)
