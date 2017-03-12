import React, { PropTypes } from 'react';
import './search-bar.scss';

class SearchBar extends React.Component {
    search(e, s) {
        e.preventDefault();
        const searchTerm = this.refs.input.value;
        this.props.goolgeMapSearch(searchTerm);
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.search.bind(this)}>
                <input type="text" ref="input" placeholder="Location"/>
            </form>
        );
    }
}

SearchBar.propTypes = {
    goolgeMapSearch: PropTypes.element,
};

export default SearchBar;