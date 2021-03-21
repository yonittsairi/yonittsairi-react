
// import { connect } from 'react-redux'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
export function AppFooter() {

    return (
        <section>
            <footer className="main-footer flex justify-center ">
                <nav>
                    {/* <img className="app-logo" src="../assets/imgs"></img> */}
                    <div className="footer-logo"></div>
                    <small></small>
                    <ul className="footer-list clean-list">
                        Footer
                        {/* <li><FacebookIcon></FacebookIcon></li>
                        <li><InstagramIcon></InstagramIcon></li>
                        <li><TwitterIcon></TwitterIcon></li> */}
                    </ul>
                </nav>
            </footer>
        </section>
    )
}


// export const AppFooter = connect(mapStateToProps)(_AppFooter);