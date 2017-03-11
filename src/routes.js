import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { ExamplePage } from 'pages';

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ExamplePage} />
    </Route>
);

export default Routes;