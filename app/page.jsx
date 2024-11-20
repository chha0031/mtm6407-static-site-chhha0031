import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Chhaya's Photography</h1>
          <p className="lead">
            Exploring life and landscapes, one frame at a time.
          </p>
        </div>
      </header>

      <main className="container mt-5">
        <section id="about" className="mb-5">
          <div className="row align-items-start">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                I'm Chhaya, a passionate photographer and a student of
                Interactive Media Design at Algonquin College. My journey into
                photography began with a simple smartphone, capturing the vivid
                tones of sunsets and delicate flowers. Today, with a DSLR in
                hand, I craft visual stories that celebrate the extraordinary in
                the ordinary.
              </p>
              <p>
                My expertise lies in landscapes and portraits, but I also enjoy
                exploring urban life and cultural moments. Photography, for me,
                is not just an art—it's a narrative, a way to connect with
                people and places.
              </p>
              <a href="/about" className="btn btn-dark">
                Learn More
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="https://chha0031.github.io/portfolio/images/qaz.jpg"
                alt="Chhaya's Photography"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </section>

        <section id="portfolio" className="text-center bg-light py-5">
          <h2>Portfolio</h2>
          <p className="mb-4">
            Discover my collection of breathtaking landscapes, intimate
            portraits, and cultural narratives.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="https://chha0031.github.io/portfolio/images/photo1.png"
                alt="Landscape Photography"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Landscapes</h5>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://chha0031.github.io/portfolio/images/photo1.png"
                alt="Portrait Photography"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Portraits</h5>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://chha0031.github.io/portfolio/images/photo1.png"
                alt="Cultural Photography"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Cultural Narratives</h5>
            </div>
          </div>
          <a href="/portfolio" className="btn btn-dark">
            View Full Portfolio
          </a>
        </section>

        <section id="testimonials" className="py-5">
          <h2 className="text-center">What People Say</h2>
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>
                  "Chhaya has an incredible eye for detail. Her photos tell
                  stories that touch the soul."
                </p>
                <footer className="blockquote-footer">
                  A Satisfied Client
                </footer>
              </blockquote>
            </div>
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>
                  "Her landscape photography captures the beauty of nature like
                  no other."
                </p>
                <footer className="blockquote-footer">
                  Outdoor Enthusiast
                </footer>
              </blockquote>
            </div>
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>
                  "Chhaya's portraits bring out the emotions and depth in every
                  subject."
                </p>
                <footer className="blockquote-footer">Art Director</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-dark text-light py-5 mb-3">
          <div className="container text-center">
            <h2>Contact Me</h2>
            <p>Interested in working together? Feel free to reach out!</p>
            <a href="/contact" className="btn btn-light">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
