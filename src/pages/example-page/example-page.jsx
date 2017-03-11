import React from 'react';
import { ExampleContainer } from 'containers';
import './example-page.scss';

const ExamplePage = () => {
    return (
        <div className="example-page">
            <h1>React Redux Example Build</h1>
            <ExampleContainer />
        </div>
    );
};

export default ExamplePage;