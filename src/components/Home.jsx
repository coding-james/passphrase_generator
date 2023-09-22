import { Link } from 'react-router-dom';
import bannerImage from "../images/codeImage.png";
import passphraseImage from "../images/terminalAltWhite.svg";
import infoImage from "../images/infoAltWhite.svg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {

    return (
        <>
            <br />
            <Container>
                <Image src={bannerImage} className="img-fluid" alt="hand typing a password into a tablet" />
                <Container className="bottom-left">
                    <h2>Welcome to the Passphrase Generator</h2>
                </Container>

            </Container>
            <Container>
                <p>This WebApp has been created to help you create passphrases and share privacy best-practice</p>
                <p>As shown in <a href="https://xkcd.com/936/" target="_blank" rel="noreferrer">xkcd's Password Strength comic</a>, passphrases can be easier to remember then passwords and they also tend to be longer which increases the time for a brute force attack. Research from <a href="https://bitwarden.com/blog/how-long-should-my-password-be/" target="_blank" rel="noreferrer">bitwarden</a> indicates a brute force algorithms will take hours to days to break a password between 8 - 10 characters, but centuries for one over 14 characters.</p>
            </Container>
            <br />
            <Container>
                <h3>Get Started:</h3>
                <br />
                <Container className="row text-center justify-content-around">
                    <Link to="/generator" className="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <Image src={passphraseImage} alt="terminal" className="img-fluid" />
                        <h3>Passphrase Generator</h3>
                    </Link>

                    <Link to="/tips" className="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <Image src={infoImage} alt="info" className="img-fluid" />
                        <h3>Tips and Useful Resources</h3>
                    </Link>
                </Container>
            </Container>
        </>
    )
}

export default Home;