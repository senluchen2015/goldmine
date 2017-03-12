import { SearchBar } from 'components';
import { connect } from 'react-redux';
import { goolgeMapSearch } from 'actions/map-actions';
const mapStateToProps = (state, props) => {
    return {
    };
};

const dispatchToProps = {
    goolgeMapSearch,
};

export default connect(mapStateToProps, dispatchToProps)(SearchBar);
