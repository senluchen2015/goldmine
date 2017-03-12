import React from 'react';
import { MapContainer, SearchBarContainer, ListContainer } from 'containers';
import './main-page.scss';

const MainPage = () => {
    return (
        <div className="main-page">
            <section>
                <MapContainer />
            </section>
            <section>
                <SearchBarContainer />
                <ListContainer />
            </section>
        </div>
    );
};

export default MainPage;