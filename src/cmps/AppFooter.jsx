
// import { connect } from 'react-redux'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
export function AppFooter() {

    return (

        <footer className="full main-footer">
            <nav>
                {/* <img className="app-logo" src="../assets/imgs"></img> */}
                <div className="footer-logo"></div>
                <small></small>
                <ul className="footer-list clean-list">
                    Footersssssssssssssssssss
                        {/* <li><FacebookIcon></FacebookIcon></li>
                        <li><InstagramIcon></InstagramIcon></li>
                        <li><TwitterIcon></TwitterIcon></li> */}
                </ul>
            </nav>
        </footer>

    )
}


// export const AppFooter = connect(mapStateToProps)(_AppFooter);