import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
