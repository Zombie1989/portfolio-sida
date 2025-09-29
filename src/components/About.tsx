import profileImg from '../assets/images/profilbild.jpg';

function About() {
  return (
    <section id="about" className="about container py-5">
      <h2 className="mb-4">Om mig</h2>
      <div>
        <div className="d-flex flex-row">
          <p className="mb-0">
            Mitt namn är Daniel och har en bakgrund inom inrednings snickeri, filmarbete (byggledning, scenografi & rekvisita), samt lagerarbete med truckbehörighet (A1-A4, B1-B4, D1).
          </p>
          <img src={profileImg} alt="profilbild" className="img-fluid rounded" style={{ maxWidth: '250px', height: 'auto'}} onContextMenu={(e) => e.preventDefault()}></img>
        </div>
        <p>
          Idag fokuserar jag på webbutveckling, systemutveckling ett område där jag får kombinera min tekniska förståelse med kreativ problemlösning. Jag gillar särskilt frontendutveckling och att se mina idéer ta form direkt i webbläsaren.
        </p>
      </div>
    </section>
  )
}

export default About