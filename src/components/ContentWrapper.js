
import React from 'react';
import Footer from './Footer';
import Topbar from './TopBar';
import Contentrowtop from './ContentRowTop';
import Table from './Table';

const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <Topbar />

                <Contentrowtop />
            </div>
        <Table/>
            <Footer />

        </div>
    );
}

export default Contentwrapper;
