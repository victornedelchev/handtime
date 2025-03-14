export default function Footer() {
  return (
    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear">{new Date().getFullYear()}</span> All
          Rights Reserved By
          <a href="https://html.design/"> HandTime</a>
        </p>
      </div>
    </section>
  );
}
