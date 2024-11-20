import Head from "next/head";

export default function Interests() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">My Interests</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Exploring Landscapes</h5>
                  <p className="card-text">
                    Hiking and traveling to capture untouched landscapes and the
                    interplay of light and shadow in nature.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Community Engagement</h5>
                  <p className="card-text">
                    Participating in local photography clubs and online
                    communities to share knowledge and receive feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Photography Experiments</h5>
                  <p className="card-text">
                    Testing new photography techniques, from macro shots to
                    astrophotography, to expand my skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Cultural Storytelling</h5>
                  <p className="card-text">
                    Capturing vibrant cultural events and documenting the
                    traditions of diverse communities.
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
