import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UsefulSiteResults({name, url, description}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={url} target="_blank"><Button variant="success">Visit Site</Button></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default UsefulSiteResults;