import { Example } from 'components';
import { connect } from 'react-redux';
import { increase } from 'actions/example-actions';
const mapStateToProps = (state, props) => {
    return {
        number: state.example.number,
    };
};

const dispatchToProps = {
    increase,
};

export default connect(mapStateToProps, dispatchToProps)(Example);
