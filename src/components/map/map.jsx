import React, { PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker/marker';

const API_KEY = 'AIzaSyAppBGOzZV8wnAG4kaSroOVkKU3HbrqWas';

class Map extends React.Component {
    constructor(props) {
        super(props);
        navigator.geolocation.getCurrentPosition((position) => {
            props.setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }

    onChange({ center, zoom, bounds, marginBounds }) {
        this.props.setMapValues({
            center, zoom, bounds,
        });
    }

    render() {
        const { center, zoom, companies } = this.props;
        const defaultZoom = 15;
        if (center) {
            return (
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: API_KEY,
                    }}
                    center={center}
                    onChange={this.onChange.bind(this)}
                    defaultZoom={defaultZoom}
                >
                    {companies && companies.map((m, idx) => {
                        return (
                            <Marker
                                key={idx}
                                lat={m.lat}
                                lng={m.lng}
                                zoom={zoom}
                            >
                                <p>{m.name}</p>
                                <img src={m.logo} />
                            </Marker>
                        );
                    })}
                </GoogleMapReact>
            );
        }
        return <div></div>;
    }
}

Map.propTypes = {
    setLocation: PropTypes.func,
    setMapValues: PropTypes.func,
    center: PropTypes.objectOf(PropTypes.number),
    zoom: PropTypes.number,
    companies: PropTypes.arrayOf(PropTypes.any),
};

export default Map;