export default function Map() {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=PSIT&t=&z=16&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
