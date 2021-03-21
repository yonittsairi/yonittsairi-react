import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export function AppHeader() {

    return (
        <section className="main-header">
            <header className="main-layout">
                <div className="flex align-center space-between">
                    <nav>
                        <ul className="header-list flex justify-center clean-list">
                            <li className="header-link"><Link to="/">Home</Link></li>
                            <li className="header-link"><Link to="/about">About</Link></li>
                            <li className="header-link"><Link to="/eventi">Events</Link></li>
                        </ul>
                    </nav>
                </div>
            </header >
            {/* <h3>Welcome <Link to="/profile">{loggedInUser.username}</Link></h3> */}
        </section >
    )
}

// const mapStateToProps = () => {
//     return {
//         loggedInUser: 'User',
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader);