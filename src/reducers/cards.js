import {
    LOADING_CARDS,
    SET_CARDS
} from '../actionTypes'

export default (state = { all: [], loading: false }, action) => {
    switch (action.type) {
        case LOADING_CARDS:
            return { ...state, all: [...state.all], loading: true }

        case SET_CARDS:
            return { ...state, all: action.payload }


        default:
            return state
    }
}