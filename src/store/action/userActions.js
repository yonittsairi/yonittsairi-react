import { StorageService } from "../../service/StorageService"
import { userService } from "../../service/userService"

export function loadUsers(filterBy) {
    return (dispatch) => {
        userService.query(filterBy).then(users => { dispatch({ type: 'SET_USERS', users }) })
    }
}

export function setUser(user) {
    StorageService.save('loggedInUser', user)
    return dispatch => {
        const action = { type: 'SET_USER', user }
        dispatch(action)
    }
}
export function removeUser(userId) {
    console.log('actions', userId);
    return (dispatch) => {
        userService.removeUser(userId).then(() => { dispatch({ type: 'REMOVE_USER', userId }) })
    }
}

export function editUser(user) {
    return (dispatch) => {
        userService.editUser(user).then(() => { dispatch({ type: 'EDIT_USER', user }) })
    }
}
export function addUser(user) {
    console.log(user, 'actions');
    return (dispatch) => {
        userService.addUser(user).then((savedUser) => { dispatch({ type: 'ADD_USER', user: savedUser }) })
    }
}
// export function editUser(user) {
//     console.log('editing', user);
//     return (dispatch) => dispatch({ type: 'EDIT_TOY', user: user })
// }

// export function checkUser(user) {
//     user = { ...user }
//     if (user.type === "Active") user.type = "Done"
//     else user.type = "Active"
//     return (dispatch) => dispatch({ type: 'EDIT_TOY', user: user })
// }

