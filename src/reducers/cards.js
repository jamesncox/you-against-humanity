import {
    LOADING_CARDS,
    SET_CARDS,
    SET_TYPES
} from '../actionTypes'

export default (state = { cards: [], types: [], loading: false }, action) => {
    switch (action.type) {
        case LOADING_CARDS:
            return { ...state, cards: [...state.all], loading: true }

        case SET_CARDS:
            return { ...state, cards: action.payload }

        case SET_TYPES:
            return { ...state, types: action.payload }

        default:
            return state
    }
}