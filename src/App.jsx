import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'

import { AppFooter } from './cmps/AppFooter.jsx'
import './assets/scss/main.scss';



export class App extends Component {
    render() {
        return (<React.Fragment>
            <AppHeader />
            <Switch>

            </Switch>
            <AppFooter />
        </React.Fragment>
        )
    }


}

