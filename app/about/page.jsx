import Head from "next/head";

export default function About() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://chha0031.github.io/portfolio/images/qaz.jpg"
                alt="Chhaya's Portrait"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <h1 className="mb-4">Hi, I'm Chhaya!</h1>
              <p className="lead text-muted">
                I'm a passionate photographer dedicated to capturing the beauty
                of everyday life, from intimate moments to breathtaking
                landscapes. My journey began with a simple camera and a desire
                to tell stories visually, and it has grown into an unshakable
                love for photography.
              </p>
              <p>
                Over the years, I've refined my skills, working with clients on
                portraits, events, and creative projects while pursuing personal
                endeavors in street and nature photography. My mission is to
                bring out the extraordinary in the ordinary, creating images
                that resonate deeply and tell a story in a single frame.
              </p>
              <a href="/portfolio" className="btn btn-dark mt-3">
                View My Work
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2 className="mb-3">My Philosophy</h2>
              <p>
                Photography is more than just capturing images; it's about
                preserving memories, emotions, and the essence of the moment.
                Whether it's the soft glow of a sunrise or the joy in someone's
                smile, I strive to make each shot meaningful and timeless.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Experience & Skills</h2>
              <ul className="list-unstyled">
                <li>
                  📸 Expert in portrait, street, and landscape photography
                </li>
                <li>
                  🎨 Skilled in photo editing using Lightroom and Photoshop
                </li>
                <li>
                  🗣 Experienced in collaborating with diverse clients and teams
                </li>
                <li>
                  🌍 Adept at shooting in challenging outdoor environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
