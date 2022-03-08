import React from 'react';
import {Routes, Route} from 'react-router-dom';

import BMI from './BMI';
import Bank from './Bank';
import PPN from './PPN';
import Bilangan from './Bilangan';
import Home from './Home';

const Main = () => (
    
    <Routes>
        <Route path="/" component={Home} exact/>
        <Route path="/bmi" component={BMI} />
        <Route path="/bank" component={Bank} />
        <Route path="/ppn" component={PPN} />
        <Route path="/bilangan" component={Bilangan} />
    </Routes>
)

export default Main;