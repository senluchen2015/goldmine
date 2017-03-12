import { List } from 'components';
import { connect } from 'react-redux';
import { inBounds } from 'utils/map-util';

function getCompaniesInBound(companies, bounds) {
    return companies.filter((c) => {
        return inBounds({
            lat: c.lat,
            lng: c.lng,
        }, bounds);
    });
}

const mapStateToProps = (state, props) => {
    const { companies, bounds } = state.map;
    const companyList = bounds && getCompaniesInBound(companies, bounds);
    return {
        companyList: companyList,
    };
};

export default connect(mapStateToProps)(List);
