import { Accordion } from "react-bootstrap";


export default function Questions() {
  return (
    <section className="faq-section">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <Accordion defaultActiveKey="0" className="apple-faq" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Do I have to pay dues?</Accordion.Header>
          <Accordion.Body>
            No – we’re a free-to-join student organization.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            I’m not Black or a man. Can I still participate?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely! Everyone is welcome, regardless of gender or racial background.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            I don’t go to UW-Madison. Can I still get involved?
          </Accordion.Header>
          <Accordion.Body>
            Yes! We’re opening interest forms to expand our initiative to other campuses—stay tuned
            for details.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
