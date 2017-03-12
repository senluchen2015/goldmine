import React, { PropTypes } from 'react';
import './list.scss';
import CompanyItem from './company-item/company-item';

class List extends React.Component {
    render() {
        const { companyList } = this.props;
        return (
            <div className="list">
                {companyList && companyList.map((c) => {
                    return (
                        <CompanyItem key={c.name} company={c} />
                    );
                })}
            </div>
        );
    }
}

List.propTypes = {
    companyList: PropTypes.arrayOf(PropTypes.any),
};

export default List;