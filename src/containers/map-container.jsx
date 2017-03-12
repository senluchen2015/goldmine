import { Map } from 'components';
import { connect } from 'react-redux';
import { setLocation, setMapValues } from 'actions/map-actions';
const mapStateToProps = (state, props) => {
    const { center, zoom, companies } = state.map;
    return {
        center,
        zoom,
        companies,
    };
};

const dispatchToProps = {
    setLocation,
    setMapValues,
};

export default connect(mapStateToProps, dispatchToProps)(Map);
