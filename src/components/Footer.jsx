import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Made &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://zhilyasov.vercel.app/"
          >
            &nbsp; Zhilyasov
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
