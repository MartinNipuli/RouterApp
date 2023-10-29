import { useState } from "react";
import { CardBody, CardHeader, CardText, CardTitle, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
 
 
 
function MyAlert({email,showAlert}){
    const [show, setShow]=useState(showAlert);
    return (
    <>
        <br/>
        <Alert show={show} variant="success" >
        <Alert.Heading>You successfully subscribed with your e-mail: {email}</Alert.Heading>
        <Button onClick={()=>setShow(false)} variant="outline-success">Close</Button>
        </Alert>
    </>
    );
}
 
 
const Home = () => {
    const [email, setEmail]=useState('');
    const [showAlert, setShowAlert]=useState(false);
 
    const handleClose=(e)=>{
        e.preventDefault();
        console.log(email);
        setShowAlert(true);
    }
 
    return (   
    <>
        <Card>
            <CardHeader as="h5">Welcome to my page</CardHeader>
            <CardBody>
                <CardTitle>Home Page</CardTitle>
                <CardText>This is the homepage of my website.</CardText>
            </CardBody>
        </Card>
        <br/>
        <Form onSubmit={handleClose}>
            <Form.Group className="mb-3" controlId="setEmail">
                <Form.Control type="email" placeholder="Enter e-mail address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <Form.Text className="text-muted"> Subscribe to our newsletter for updates.</Form.Text>
            </Form.Group>
            <Button variant="primary"type="submit" onClick={handleClose}>Subscribe</Button>
        </Form>
        {showAlert && < MyAlert email={email} showAlert={showAlert}/>}
    </>
    );
}
 
 
 
 
  export default Home;