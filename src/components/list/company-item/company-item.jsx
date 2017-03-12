import React, { PropTypes } from 'react';
import './company-item.scss';

const CompanyItem = ({ company }) => {
    return (
        <div className="company-item">
            <div className="list-view">
                <img src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/202927-34b4cd2b759395534bf66ef261436a98-thumb_jpg.jpg?buster=1431045135" />
                <label>{ company.name }</label>
                <p>{company.description}</p>
            </div>
        </div>
    );
};

CompanyItem.propTypes = {
    company: {
        name: PropTypes.string,
    },
};

export default CompanyItem;