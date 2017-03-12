import { SET_LOCATION, SET_MAP_VALUES, SET_COMPANIES } from 'actions';
const API_KEY = 'AIzaSyAppBGOzZV8wnAG4kaSroOVkKU3HbrqWas';

function defaultHeader(options) {
    return Object.assign({
        'Content-Type': 'text/plain',
    }, options);
}

function createRequest(url, options, headers = defaultHeader()) {
    const request = new Request(url,
    Object.assign({
        method: 'GET',
        headers: headers,
    }, options));
    return request;
}

export const getCompanies = () => {
    return (dispatch, getState) => {
        return fetch(createRequest('//jobsmine.herokuapp.com/api/v1/companies/')).then((resp) => {
            return resp.json();
        }).then((data) => {
            dispatch({
                type: SET_COMPANIES,
                payload: {
                    companies: data,
                },
            });
        });
    };
};

export const setLocation = ({lat, lng}) => {
    return {
        type: SET_LOCATION,
        payload: {
            lat,
            lng,
        },
    };
};

export const setMapValues = (values) => {
    return {
        type: SET_MAP_VALUES,
        payload: values,
    };
};

export const goolgeMapSearch = (term) => {
    const request = createRequest(`https://maps.googleapis.com/maps/api/geocode/json?address=${term}&key=${API_KEY}`, {
    }, null);
    return (dispatch, getState) => {
        return fetch(request).then((resp) => {
            return resp.json();
        }).then((data) => {
            const location = (data.results[0].geometry.location);
            dispatch(setLocation(location));
        });
    };
};