import { routerReducer } from 'react-router-redux';
import exampleReducer from './example-reducer';

const reducer = {
    example: exampleReducer,
    routing: routerReducer,
};

export default reducer;