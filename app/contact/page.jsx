export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center mb-5">
        Have a question, a project idea, or just want to say hi? I would love to
        hear from you! Fill out the form below or reach out via email.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>
          Or contact me directly at:{" "}
          <a href="mailto:yourname@example.com">Chha0031@algonquinlive.com</a>
        </p>
        <p>
          Follow me on social media:
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-2"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-2"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
