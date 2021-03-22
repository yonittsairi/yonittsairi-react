import { Component } from 'react'
import { connect } from 'react-redux'

import { loadEventis } from '../store/action/eventiActions.js'
import { List } from './List';

export class _EventiApp extends Component {

    componentDidMount() {
        this.props.loadEventis({})
        console.log('Got from store:', this.props);
    }

    render() {
        return <div className="flex column ">
            <List cycles={this.props.eventies} /></div>
    }
}

const mapStateToProps = state => {
    return {
        eventies: state.eventiModule.eventies,
    }
}

const mapDispatchToProps = {
    loadEventis

}



export const EventiApp = connect(mapStateToProps, mapDispatchToProps)(_EventiApp);
