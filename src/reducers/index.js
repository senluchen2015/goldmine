import { routerReducer } from 'react-router-redux';
import mapReducer from './map-reducer';

const reducer = {
    map: mapReducer,
    routing: routerReducer,
};

export default reducer;