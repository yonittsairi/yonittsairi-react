import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'

import { AppFooter } from './cmps/AppFooter.jsx'
import './assets/scss/main.scss';
import { EventiApp } from './pages/EventiApp.jsx';



export class App extends Component {
    render() {
        return (<React.Fragment>
            <AppHeader />
            <EventiApp />
            {/* <Switch>

            </Switch> */}
            <AppFooter />
        </React.Fragment>
        )
    }


}

