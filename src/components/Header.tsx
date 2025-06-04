import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="about">Om mig</Link></li>
                        <li><Link to="projects">Projekt</Link></li>
                        <li><Link to="contact">Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="wave-divider">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" />
                </svg>
            </div>
        </div>
    )
}

export default Header