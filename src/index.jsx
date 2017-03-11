import React from 'react';
import { render } from 'react-dom';
import Root from './root';

render(<Root />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('HMR not updated because of error: ', err);
        }
    });
}
