import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import 'static/css/main.scss';

class App extends React.Component {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};

export default connect()(App);
