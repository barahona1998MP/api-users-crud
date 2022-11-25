const usersBD = []
let id = 1
/* 
{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}
 */

const findAllUsers = () => {
    return usersBD
}

const findUserById = ( id ) => {
    const findUsers = usersBD.find(user => user.id == id)
    return findUsers
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersBD.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
}

