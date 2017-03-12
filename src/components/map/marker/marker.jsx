import React, { PropTypes } from 'react';
import './marker.scss';

const Marker = ({ zoom, children }) => {
    function getScale(zoom) {
        const baseZoom = 15;
        return zoom / baseZoom;
    }

    return (
        <div className="marker" style={{transform: `scale(${getScale(zoom)})` }}>
            {children}
        </div>
    );
};

Marker.propTypes = {
    zoom: PropTypes.number,
    children: PropTypes.element,
};

export default Marker;