import { Component } from 'react'
import { connect } from 'react-redux'

import { loadEventis } from '../store/action/eventiActions.js'

export class _EventiApp extends Component {

    componentDidMount() {
        this.props.loadEventis({})
        console.log('Got from store:', this.props);
    }

    // onRemove = (eventiId) => {
    //     this.props.removeEventi(eventiId)

    // }

    // onSetFilter = (filterBy) => {
    //     this.props.setFilter(filterBy)
    //     this.props.loadEventis(filterBy)

    // }

    // doLogout = async () => {
    //     await this.props.logout()
    //     this.setState({ loggedInUser: null }, () => this.props.history.push('/'))
    // }

    render() {
        return <h1>ll</h1>
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
