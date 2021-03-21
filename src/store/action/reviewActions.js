import { reviewService } from "../../services/reviewService.js"

export function loadReviews(filterBy) {
    return (dispatch) => {
        reviewService.query(filterBy)
            .then(reviews => { dispatch({ type: 'SET_REVIEWS', reviews }) })
    }
}

export function removeReview(reviewId) {
    console.log('actions', reviewId);
    return (dispatch) => {
        reviewService.removeReview(reviewId).then(() => { dispatch({ type: 'REMOVE_REVIEW', reviewId }) })
    }
}

export function editReview(review) {
    console.log("adding review action ", review);
    return (dispatch) => {
        console.log("adding review action ", review);
        reviewService.editReview(review)
            .then(() => { dispatch({ type: 'EDIT_REVIEW', review }) })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
}
export function addReview(review) {
    console.log(review, 'actions');
    return (dispatch) => {
        reviewService.addReview(review).then((savedReview) => { dispatch({ type: 'ADD_REVIEW', review: savedReview }) })
    }
}

