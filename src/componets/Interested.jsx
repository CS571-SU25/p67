import { Card, Form, Button,Row,Col, Container } from "react-bootstrap";
export default function Interested(){
return<>
<h1 style={{textAlign:"center"}}>Are you interested</h1>
<p style={{textAlign:"center"}}>Are you interested in joining a community of strong men aimed at creating a community of like minded people</p>

<Card style={{ margin: "0.5rem", padding: "0.5rem",  paddingTop: "3rem", paddingBottom: "3rem"}}>
    <Container>
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" defaultValue="email@example.com" />
        </Col>
      </Form.Group>

     <Row className="mb-3">
    <Col>
      <Form.Select aria-label="Select Year">
        <option>Year</option>
        <option value="1">Freshman</option>
        <option value="2">Sophomore</option>
        <option value="3">Junior</option>
        <option value="4">Senior</option>
        <option value="5">Fifth Year</option>
      </Form.Select>
    </Col>
    <Col>
      <Form.Select aria-label="Select Position">
        <option>Position</option>
        <option value="1">Treasurer</option>
        <option value="2">Secretary</option>
        <option value="3">Events Coordinator</option>
        <option value="4">Outreach Chair</option>
        <option value="5">Intern</option>
      </Form.Select>
    </Col>
  </Row>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Explain why you're a good fit</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

    <Button>Send</Button>
    </Form>
    </Container>
</Card>
</>
}