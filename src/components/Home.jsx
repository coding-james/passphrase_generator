import { Link } from 'react-router-dom';
import bannerImage from "../images/codeImage.png";
import passphraseImage from "../images/terminalAltWhite.svg";
import infoImage from "../images/infoAltWhite.svg";

const Home = () => {

    return (
        <>
            <br />
            <div class="container">
                <img src={bannerImage} class="img-fluid" alt="hand typing a password into a tablet" />
                <div class="bottom-left">
                    <h2>Welcome to the Passphrase Generator</h2>
                </div>

            </div>
            <div class="container">
                <p>This WebApp has been created to help you create passphrases and share privacy best-practice</p>
                <p>As shown in <a href="https://xkcd.com/936/" target="_blank">xkcd's Password Strength comic</a>, passphrases can be easier to remember then passwords and they also tend to be longer which increases the time for a brute force attack. Research from <a href="https://bitwarden.com/blog/how-long-should-my-password-be/" target="_blank">bitwarden</a> indicates a brute force algorithms will take hours to days to break a password between 8 - 10 characters, but centuries for one over 14 characters.</p>
            </div>
            <br />
            <div class="container">
                <h3>Get Started:</h3>
                <br />
                <div class="row text-center justify-content-around">
                    <Link to="/generator" class="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <img src={passphraseImage} alt="terminal" class="img-fluid" />
                        <h3>Passphrase Generator</h3>
                    </Link>

                    <Link to="/tips" class="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <img src={infoImage} alt="info" class="img-fluid" />
                        <h3>Tips and Useful Resources</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;