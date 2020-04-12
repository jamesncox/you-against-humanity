import {
    // LOADING_CARDS,
    SET_CARDS,
    // LOADING_TYPES,
    SET_TYPES
} from '../actionTypes'

const setCards = payload => {
    return { type: SET_CARDS, action: payload }
}

const setTypes = payload => {
    return { type: SET_TYPES, action: payload }
}

export const getCards = () => {
    return async dispatch => {
        // dispatch({ type: LOADING_CARDS })
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

export const getTypes = () => {
    return async dispatch => {
        // dispatch({ type: LOADING_CARDS })
        try {
            const res = await fetch("https://cah.greencoaststudios.com/api/v1/types")
            if (!res.ok) {
                throw res
            }
            const typeData = await res.json()
            console.log(typeData)
            dispatch(setTypes(typeData))
        } catch (err) {
            alert("Failed to load type data")
        }
    }
}