
import { userService } from './userService.js';
import { StorageService } from './StorageService.js';
export const authService = {
    signup,
    login,
}

async function login(username, password) {
    // logger.debug(`auth.service - login with username: ${username}`)
    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')

    // TODO: un-comment for real login
    // const match = await bcrypt.compare(password, user.password)
    // if (!match) return Promise.reject('Invalid username or password')
    delete user.password
    return user
}

async function signup({ username, password, fullname }) {
    let user = { username, password, fullname }
    if (!username || !password || !fullname) return Promise.reject('fullname, username and password are required!')
    return userService.add(user)
}

