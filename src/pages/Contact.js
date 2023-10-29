import { Card, CardBody, CardHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
 
const Contact = () => {
    return (
        <>
        <Card>
            <CardHeader>Contacts</CardHeader>
            <CardBody>
                <Card.Text>Please leave your questions and feedback 
                    in the following e-mail addresses
                </Card.Text>
            </CardBody>
        </Card>
        <br/>
        <Card>
        <CardHeader>General questions</CardHeader>
            <CardBody>
                <Card.Text>Send your general questions here:    
                </Card.Text>
                <Button variant="success">general@me.com</Button>
            </CardBody>
        </Card>
        <br/>
        <Card>
        <CardHeader>Feedback</CardHeader>
            <CardBody>
                <Card.Text>Please send your feedback here:    
                </Card.Text>
                <Button variant="warning">feedback@me.com</Button>
            </CardBody>
        </Card>
        <br/>
        <Card>
        <CardHeader>Support</CardHeader>
            <CardBody>
                <Card.Text>Do you need help? Ask our support team:    
                </Card.Text>
                <Button variant="info">support@me.com</Button>
            </CardBody>
        </Card>
        </>
    );
  };
 
  export default Contact;