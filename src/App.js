import React from 'react';
import Logo from '@/assets/pressexpresslogo.svg';
import PhoneSize from '@/assets/suitsphonesize.jpeg';
import VegasSign from '@/assets/vegassign.png';
import '@/styles.css';

function App() {
    return (
        <>
    <h1>hello</h1>
    <Logo />
    <img src={PhoneSize} />
    <img src={VegasSign} />
    </>
        );
}

export default App;
