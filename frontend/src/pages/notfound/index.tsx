import React from 'react'

import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import * as style from './style.css';

const Notfound: FunctionalComponent = () => {
    return (
        <div class={"notfound"}>
            <h1>Error 404</h1>
            <p>That page doesn&apos;t exist.</p>
            <Link href="/">
                <h4>Back to Home</h4>
            </Link>
        </div>
    );
};

export default Notfound;
