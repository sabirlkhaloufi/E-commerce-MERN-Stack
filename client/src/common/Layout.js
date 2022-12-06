import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ( { children } ) => {
    return (
        <>
            <main className="main-wrapper">
                <Header />
                { children }
                <Footer />
            </main>
        </>
    )
}
export default Layout;