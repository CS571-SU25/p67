import { Carousel,Image,Card,Form,Row,Container,Col,Button } from "react-bootstrap"
import EventImage from "./EventImage"
import Calender from "./Calender";
import { useState,useRef } from "react";
export default function Events(props){
 const formRef  = useRef(null);
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

  return<>
        <div style={{textAlign: "center"}}>
        <h1>Events</h1>
        <p>Take a look at events that have been hosted throughout the school Year</p>
        
        <div style={{paddingTop:"10rem", paddingBottom:"10rem"}}>
       <EventImage/>
        </div>

        <h1>Have an event you want to see?</h1>
        <p>Fill out the form!</p>
        </div>
 <section className="event-wrapper">
      <Container>
        <Card className="event-card mx-auto">
          <Card.Header className="event-header text-center">
            <h2 className="mb-0">Propose an Event</h2>
            <p className="lead mb-0">Have a great idea? Tell us about it!</p>
          </Card.Header>

          <Card.Body>
            <Form ref={formRef} onSubmit={handleSubmit}>
              
              <Form.Floating className="mb-3">
                <Form.Control
                  name="eventTitle"
                  type="text"
                  placeholder="Headshots & Haircuts"
                  required
                />
                <label>Event Title</label>
              </Form.Floating>

           
              <Row className="g-3 mb-3">
                <Col md={6}>
                  <Form.Floating>
                    <Form.Select name="eventType" defaultValue="" required>
                      <option value="">Event Type</option>
                      <option>Social</option>
                      <option>Athletic</option>
                      <option>Educational</option>
                      <option>Activism</option>
                    </Form.Select>
                    <label>Type</label>
                  </Form.Floating>
                </Col>

                <Col md={6}>
                  <Form.Floating>
                    <Form.Select name="semester" defaultValue="" required>
                      <option value="">Semester</option>
                      <option>Fall</option>
                      <option>Spring</option>
                    </Form.Select>
                    <label>Semester</label>
                  </Form.Floating>
                </Col>
              </Row>

             
              <Form.Floating className="mb-4">
                <Form.Control
                  as="textarea"
                  name="eventDetails"
                  style={{ height: "140px" }}
                  placeholder="Describe the event…"
                  required
                />
                <label>Event Details</label>
              </Form.Floating>

             
              <div className="d-grid">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="event-btn"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send Proposal"}
                </Button>
              </div>

          
              {status === "success" && (
                <p className="text-success mt-3">
                  Thanks! We’ll review your idea shortly.
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
    </section>
    <div style={{paddingBottom:"10rem"}}>
     <h1 style={{textAlign:"center"}}>See what else that we have planned</h1>
      <Calender/>
      </div>
        </>  
}