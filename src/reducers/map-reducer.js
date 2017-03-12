import { SET_LOCATION, SET_MAP_VALUES, SET_COMPANIES } from 'actions';

const initialState = {
    center: null,
    zoom: 15,
    companies: [],
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return Object.assign({}, state, {
                center: action.payload,
            });
        case SET_COMPANIES:
        case SET_MAP_VALUES:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default mapReducer;