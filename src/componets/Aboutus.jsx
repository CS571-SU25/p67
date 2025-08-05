import RevealOnScroll from "./RevealOnScroll";


export default function AboutUs() {
  return (
    <RevealOnScroll className="about-section">
      <div className="about-inner">
        <h1 className="about-title">About&nbsp;Us</h1>

        <p className="about-text">
          The <strong>Black Men Collective</strong> was founded in&nbsp;May&nbsp;2024 to create a
          dedicated space for Black men on campus to build community. Rather than choosing between
          a fraternity (a big commitment) or traditional student orgs (often a hassle), we aim to
          be the supportive middle ground.
        </p>

        <p className="about-text">
          From resource-driven events like <em>Headshots&nbsp;&amp;&nbsp;Haircuts</em> to mentorship
          and networking, our mission is to provide a comfortable environment where Black men can
          cultivate, grow, and thrive at&nbsp;UW-Madison.
        </p>
      </div>
    </RevealOnScroll>
  );
}
