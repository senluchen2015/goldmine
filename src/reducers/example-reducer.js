import { INCREASE } from 'actions';

const initialState = {
    number: 0,
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return Object.assign({}, state, {
                number: state.number + 1,
            });
        default:
            return state;
    }
};

export default exampleReducer;