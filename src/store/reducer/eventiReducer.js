const eventies = []
let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    eventies,
    filterBy: { name: '', type: '', inStock: '', minPrice: 0, maxPrice: Infinity },
    loggedinUser: localLoggedinUser
}
export function eventiReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_EVENTIES':
            return { ...state, eventies: action.eventies }
        case 'EDIT_EVENTI':
            const editedeventies = state.eventies.map(eventi => {
                if (eventi._id === action.eventi._id) {
                    return action.eventi;
                }
                return eventi;

            })
            // , inStock: '', minPrice: 0, maxPrice: 1000 }
            return { ...state, eventies: editedeventies }
        case 'ADD_EVENTI':
            console.log('aciton eventi', action.eventi)
            state = { ...state, eventies: [...state.eventies, action.eventi] }
            return state
        case 'FILTER':
            const regex = new RegExp(action.filterBy.text, 'i')
            if (action.filterBy.type === "All" && action.filterBy.text === "") {
                state = { ...state, eventies, filterBy: action.filterBy }
                return state
            }
            else {
                state = {
                    ...state, eventies: eventies.filter(eventi => ((regex.test(eventi.name)
                        && eventi.inStock === action.filterBy.type
                        && eventi.type === action.filterBy.type

                    ))), filterBy: action.filterBy
                }
                return state
            }
        case 'REMOVE_EVENTI':
            state = { ...state, eventies: state.eventies.filter(eventi => eventi._id !== action.eventiId) }
            return state
        default:
            return state
    }

}

