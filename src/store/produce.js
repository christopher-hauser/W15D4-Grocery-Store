import produce from '../mockData/produce.json'

const POPULATE = 'produce/populate';
const LIKE = 'produce/like'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce
    }
}

export const likeProduce = (id) => {
    return {
        type: LIKE,
        id
    }
}

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case POPULATE:
            newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce
            });
            return newState;
        case LIKE:
            newState = {...state}
            newState[action.id].liked = !newState[action.id].liked;
            return newState;
        default:
            return state;
    }
}
