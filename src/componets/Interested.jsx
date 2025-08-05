import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Interested() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status,  setStatus]  = useState(null);  

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
    <section className="interested-wrapper">
      <Container>
        <Card className="interested-card mx-auto">
          <Card.Header className="interested-header text-center">
            <h2 className="mb-0">Join the Collective</h2>
            <p className="lead mb-0">
              Grow, network, and build community with like-minded men.
            </p>
          </Card.Header>

          <Card.Body>
            <Form ref={formRef} onSubmit={handleSubmit}>
           
              <Row className="g-3 mb-3">
                <Col md={6}>
                  <Form.Floating>
                    <Form.Control name="fullName" type="text" placeholder="Full name" required />
                    <label>Full name</label>
                  </Form.Floating>
                </Col>

                <Col md={6}>
                  <Form.Floating>
                    <Form.Control name="email" type="email" placeholder="name@wisc.edu" required />
                    <label>UW e-mail</label>
                  </Form.Floating>
                </Col>
              </Row>

             
              <Row className="g-3 mb-3">
                <Col md={6}>
                  <Form.Floating>
                    <Form.Select name="year" required defaultValue="">
                      <option value="">Select your year</option>
                      <option>Freshman</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Fifth-year</option>
                    </Form.Select>
                    <label>Year</label>
                  </Form.Floating>
                </Col>

                <Col md={6}>
                  <Form.Floating>
                    <Form.Select name="role" required defaultValue="">
                      <option value="">Choose a role</option>
                      <option>Treasurer</option>
                      <option>Secretary</option>
                      <option>Events Coordinator</option>
                      <option>Outreach Chair</option>
                      <option>Intern</option>
                    </Form.Select>
                    <label>Role of interest</label>
                  </Form.Floating>
                </Col>
              </Row>

             
              <Form.Floating className="mb-4">
                <Form.Control
                  as="textarea"
                  name="motivation"
                  style={{ height: "120px" }}
                  placeholder="Tell us why…"
                  required
                />
                <label>Why are you a good fit?</label>
              </Form.Floating>

           
              <div className="d-grid">
                <Button
                  size="lg"
                  className="interested-btn"
                  color=""
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Submit your interest"}
                </Button>
              </div>

             
              {status === "success" && (
                <p className="text-success mt-3">Thanks! We’ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-danger mt-3">
                  Oops—something went wrong. Please try again later.
                </p>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
