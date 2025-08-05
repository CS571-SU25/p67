import { useRef, useState } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function Expansion() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
         import.meta.env.service_zrnhner,  
        import.meta.env.template_lbf35z8,
        formRef.current,
        import.meta.env.xJhCjZOT6p387m3iJ
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => setStatus("error"))
      .finally(() => setSending(false));
  };

  return (
    <Container style={{paddingTop:"10rem", paddingBottom:"10rem"}}>
      <Card className="event-card mx-auto">
        <Card.Header className="event-header text-center">
          <h2 className="mb-0">Bring BMC to Your Campus</h2>
          <p className="lead mb-0">
            Grow, network, and build community with like-minded men at your school.
          </p>
        </Card.Header>

        <Card.Body>
          <Form ref={formRef} onSubmit={handleSubmit}>
       
            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    name="contactName"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                  <label>Full name</label>
                </Form.Floating>
              </Col>

              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    name="contactEmail"
                    type="email"
                    placeholder="you@school.edu"
                    required
                  />
                  <label>School e-mail</label>
                </Form.Floating>
              </Col>
            </Row>

        
            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    name="university"
                    type="text"
                    placeholder="University of Wisconsin–Madison"
                    required
                  />
                  <label>University</label>
                </Form.Floating>
              </Col>

              <Col md={6}>
                <Form.Floating>
                  <Form.Select name="timeline" defaultValue="" required>
                    <option value="">Desired Start</option>
                    <option>Fall</option>
                    <option>Spring</option>
                    <option>Summer</option>
                  </Form.Select>
                  <label>Timeline</label>
                </Form.Floating>
              </Col>
            </Row>

         
            <Form.Floating className="mb-4">
              <Form.Control
                as="textarea"
                name="expansionDetails"
                style={{ height: "140px" }}
                placeholder="Tell us about interest level, existing orgs, etc."
                required
              />
              <label>Why does your campus need BMC?</label>
            </Form.Floating>

            <div className="d-grid">
              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="event-btn"
                disabled={sending}
              >
                {sending ? "Sending…" : "Submit Request"}
              </Button>
            </div>

            {status === "success" && (
              <p className="text-success mt-3">
                Thanks! We’ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-danger mt-3">
                Sorry—something went wrong. Please try again later.
              </p>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
