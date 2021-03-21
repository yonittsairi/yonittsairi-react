import { StorageService } from './StorageService.js';
import { UtilService } from './UtilService.js';
const fs = require('fs')
var gUsers = require('../data/user.json')

export const userService = {
    query,
    getById,
    getByUsername,
    remove,
    // update,
    add,
    getLoggedinUser
}

function getLoggedinUser() {
    return StorageService.load('loggedInUser')
}

async function query(filterBy = {}) {
    var users = StorageService.load('users')
    if (!users) {
        StorageService.save('users', gUsers)
        return Promise.resolve(gUsers)
    }
    else return Promise.resolve(gUsers)
}

async function getById(userId) {
    console.log('user id ', userId);
    try {
        var gUsers = StorageService.load('users')
        const user = gUsers.find(userId => user._id === userId)
        console.log(user);
        if (user) return Promise.resolve(user)
        else return Promise.reject('No user')

    }
    catch (err) {
        console.log('get by Id user service', err);
        // logger.error(`while finding user ${userId}`, err)
        throw err
    }
}
async function getByUsername(username) {
    var gUsers = StorageService.load('users')
    const user = gUsers.find(user => user.username === username)
    if (user) return Promise.resolve(user)
    else return Promise.reject('No user')
}

async function remove(userId) {
    var gUsers = StorageService.load('users')
    const idx = gUsers.findIndex(user => user._id === userId)
    if (idx >= 0) {
        gUsers.splice(idx, 1)
        StorageService.save('users', gUsers)
        return Promise.resolve()
    }
    else return Promise.reject('No users')

}

// async function update(user) {
//     try {
//         // peek only updatable fields!
//         const userToSave = {
//             _id: ObjectId(user._id),
//             username: user.username,
//             fullname: user.fullname,
//             score: user.score
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.updateOne({ '_id': userToSave._id }, { $set: userToSave })
//         return userToSave;
//     } catch (err) {
//         logger.error(`cannot update user ${user._id}`, err)
//         throw err
//     }
// }

async function add(user) {

    var gUsers = StorageService.load('users')
    try {
        console.log(gUsers);
        // peek only updatable fields!
        const userToAdd = {
            _id: UtilService.makeId(),
            username: user.username,
            password: user.password,
            fullname: user.fullname,
        }
        StorageService.save('users', gUsers)
        StorageService.save('loggedInUser', userToAdd)
        return userToAdd
    } catch (err) {
        // logger.error('cannot insert user', err)
        throw err
    }
}

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.balance = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }


