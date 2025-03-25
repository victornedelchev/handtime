import "./Location.css";

export default function Location() {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2901.4840294043497!2d27.19283607746051!3d43.3459849711182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDIwJzQ1LjYiTiAyN8KwMTEnNDMuNSJF!5e0!3m2!1sbg!2sbg!4v1742908699130!5m2!1sbg!2sbg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
}
