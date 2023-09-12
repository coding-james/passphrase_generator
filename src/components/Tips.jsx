import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsefulSiteResults from "./UsefulSiteResults";
import SitesList from "./resources/useful-sites.json";


const Tips = () => {

    return (
        <>
            <br />
            <h2>Tips and Useful Sites</h2>
            <hr class="border border-success border-2 opacity-75"></hr>
            <h3>Tips</h3>
            <ul>
                <li>Use a different password for every website and app</li>
                <li>Use a password manager to securely store logins, passwords, etc</li>
                <li>Use Multi-Factor Authentication (MFA) <Link to="https://support.microsoft.com/en-gb/topic/what-is-multifactor-authentication-e5e39437-121c-be60-d123-eda06bddf661" target="_blank" rel="noreferrer"><Badge pill bg="secondary">Info</Badge></Link></li>
            </ul>
            <br />

            <h3>Useful Sites</h3>
            <Container>
                <Row>
                    <Col>
                        <div class="row row-cols-3 g-4">
                            {
                                SitesList.map(site => (
                                    <UsefulSiteResults
                                        name={site.name}
                                        description={site.description}
                                        url={site.url}
                                    />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tips;