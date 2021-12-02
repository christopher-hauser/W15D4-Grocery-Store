import produce from '../mockData/produce.json'

const POPULATE = 'produce/populate'

export const populateProduce = () => {
    console.log('populateProduce')
    return {
        type: POPULATE,
        produce
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
        console.log('populateReducer')
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce
            });
            return newState;
        default:
            return state;
    }
}
