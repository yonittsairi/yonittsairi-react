import { userService } from '../../service/userService.js'

const initialState = {
    loggedinUser: userService.getLoggedinUser() || null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedinUser: action.user }
        default:
            return state
    }
} 