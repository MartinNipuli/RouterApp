import { Accordion, CardBody } from "react-bootstrap";
import { Card } from "react-bootstrap";
 
 
const Blogs = () => {
    return (
    <>
    <Card>
     <Card.Header>Blogs</Card.Header>
        <CardBody>
            <Card.Text>Here are my blogs</Card.Text>
        </CardBody>
    </Card>
    <br/>
    <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Blog 1</Accordion.Header>
            <Accordion.Body>
                Here is the first blog
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Blog 2</Accordion.Header>
            <Accordion.Body>
                Here is the second blog
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Blog 3</Accordion.Header>
            <Accordion.Body>
                Here is the third blog
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>
    );
  };
 
  export default Blogs;