import BackgroundPlanets from './BackgroundPlanets.jsx'
import logoImg from './assets/logo.png'
import mapIcon from './assets/map.png'
import bookIcon from './assets/book.png'
import saturnIcon from './assets/saturn.png'
import puzzleIcon from './assets/puzzle.png'
import brushIcon from './assets/brush.png'
import appStoreLogo from './assets/appstore.png'
import gPlayLogo from './assets/gplay.png'

export default function App() {
  return (
    <div className="landing">
      <BackgroundPlanets />

      <div className="hero">
        <img src={logoImg} alt="Skrivnosti Vesolja" className="logo-img" />
        <p className="tagline">Vse o vesolju na enem mestu.</p>
      </div>

      <div className="features">
        <div className="feature-item">
          <img src={mapIcon} alt="Raziskovanje" className="feature-icon" />
          <span className="feature-label">Raziskovanje</span>
        </div>
        <div className="feature-item">
          <img src={bookIcon} alt="Kvizi" className="feature-icon" />
          <span className="feature-label">Kvizi</span>
        </div>
        <div className="feature-item">
          <img src={saturnIcon} alt="Spomin" className="feature-icon" />
          <span className="feature-label">Spomin</span>
        </div>
        <div className="feature-item">
          <img src={puzzleIcon} alt="Sestavljanke" className="feature-icon" />
          <span className="feature-label">Sestavljanke</span>
        </div>
        <div className="feature-item">
          <img src={brushIcon} alt="Pobarvanke" className="feature-icon" />
          <span className="feature-label">Pobarvanke</span>
        </div>
      </div>

      <div className="cta-row">
        <a href="#">
          <img src={appStoreLogo} alt="App Store" className="store-img" />
        </a>
        <a href="#">
          <img src={gPlayLogo} alt="Google Play" className="store-img" />
        </a>
      </div>
    </div>
  )
}