import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

const history = syncHistoryWithStore(hashHistory, store);
class Root extends React.Component {
    render() {
        return (
            <AppContainer>
                <Provider store={store}>
                    <Router key={Math.random()} history={history}>
                        {routes}
                    </Router>
                </Provider>
            </AppContainer>
        );
    }
}
export default Root;