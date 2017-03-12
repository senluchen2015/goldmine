import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { MainPage } from 'pages';
import { getCompanies } from 'actions/map-actions';

const Routes = ({ dispatch, getState }) => {

    function load(nextState, state) {
        dispatch(getCompanies());
    }

    return (
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} onEnter={load}/>
        </Route>
    );
};

Routes.propTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func,
};

export default Routes;