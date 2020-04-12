import {
    SET_CARDS,
    LOADING_CARDS
} from '../actionTypes'

const setCards = payload => {
    return { type: SET_CARDS, action: payload }
}

export const getCards = () => {
    return async dispatch => {
        dispatch({ type: LOADING_CARDS })
        try {
            const res = await fetch("https://crhallberg.com/cah/output.php")
            if (!res.ok) {
                throw res
            }
            const cardData = await res.json()
            console.log(cardData)
            dispatch(setCards(cardData))
        } catch (err) {
            alert("Failed to load cards")
        }
    }
}