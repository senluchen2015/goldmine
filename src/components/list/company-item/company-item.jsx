import React, { PropTypes } from 'react';
import './company-item.scss';

class CompanyItem extends React.Component {
    render() {
        const { company } = this.props;
        return (
            <div className="company-item">
                <div className="list-view">
                    <img src={company.logo} />
                    <label>{ company.name }</label>
                    <p>{company.summary}</p>
                </div>
            </div>
        );
    }
}

CompanyItem.propTypes = {
    company: {
        name: PropTypes.string,
    },
};

export default CompanyItem;