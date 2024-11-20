import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">Portfolio</h1>
          <p className="text-center mb-5">
            A curated selection of my favorite works, showcasing moments of
            beauty, emotion, and the extraordinary.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://chha0031.github.io/portfolio/images/photo1.png"
                  className="card-img-top"
                  alt="Urban Life"
                />
                <div className="card-body">
                  <h5 className="card-title">Urban Life</h5>
                  <p className="card-text">
                    Capturing the raw emotions and fleeting stories of city
                    streets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://chha0031.github.io/portfolio/images/photo1.png"
                  className="card-img-top"
                  alt="Golden Hour"
                />
                <div className="card-body">
                  <h5 className="card-title">Golden Hour</h5>
                  <p className="card-text">
                    Embracing the magic of natural light in serene landscapes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://chha0031.github.io/portfolio/images/photo1.png"
                  className="card-img-top"
                  alt="Portraits"
                />
                <div className="card-body">
                  <h5 className="card-title">Portraits</h5>
                  <p className="card-text">
                    Telling human stories through unposed, authentic moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
