import { eventiService } from "../../service/eventiService.js"

export function loadEventis(filterBy) {
    return (dispatch) => {
        eventiService.query(filterBy).then(eventies => { dispatch({ type: 'SET_EVENTIES', eventies }) })
    }
}

// export function getById(eventiId) {
//     return eventiService.getById(eventiId)
// }
// export function getById(eventiId) {
//     return eventiService.getById(eventiId)
// }
// export function setFilter(filterBy) {
//     return (dispatch) => dispatch({ type: 'FILTER', filterBy })
// }

export function removeEventi(eventiId) {
    console.log('actions', eventiId);
    return (dispatch) => {
        eventiService.remove(eventiId).then(() => { dispatch({ type: 'REMOVE_EVENTI', eventiId }) })
    }
}

export function editEventi(eventi) {
    console.log("adding review action ", eventi);
    return (dispatch) => {
        console.log("adding review action ", eventi);
        eventiService.saveEventi(eventi)
            .then(() => { dispatch({ type: 'EDIT_EVENTI', eventi }) })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
}
export function addEventi(eventi) {
    console.log(eventi, 'actions');
    return (dispatch) => {
        eventiService.saveEventi(eventi).then((savedEventi) => { dispatch({ type: 'ADD_EVENTI', eventi: savedEventi }) })
    }
}

