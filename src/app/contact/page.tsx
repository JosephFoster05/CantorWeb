import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section>
        <div>
          <h2>Get in Touch with Us</h2>
          <p>We'd love to hear from you! Here's how you can reach us:</p>
        </div>

        <div>
          <div>
            <h3>Our Location</h3>
            <address>
              <p>92a Arundel Ln, Sheffield City Centre, Sheffield S1 2NU</p>
            </address>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.404220996947!2d-1.4704984849295916!3d53.38027999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48792b1f7b828a67%3A0x22c56e5b2fc8278!2s92a%20Arundel%20Ln%2C%20Sheffield%20City%20Centre%2C%20Sheffield%20S1%202NU!5e0!3m2!1sen!2suk!4v1635394218721!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                title="Map Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h3>Our Commitment to You</h3>
            <p>
              We endevour to respond as quick as possible, please leave us a message on +4407xxxxxx
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
