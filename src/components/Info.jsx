import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

export default function Info() {
    return (
        <>
            <header>
                <img src="/src/assets/AnjelicaDevPhoto.avif" alt='Anjelica Developer Photo' />
                <h1>Anjelica May-Farmer</h1>
                <p className="subtitle">Front End Developer</p>
                <a className="website" href="https://anjelica-mf.vercel.app/" target="_blank" rel="noopener noreferrer"
                    aria-label="Opens Anjelica May-Farmer developer website to a new tab">anjelica-mf.vercel.app</a>
            </header>
            <nav>
                <a href="mailto:yourname@example.com" className="social-links">
                    <FontAwesomeIcon icon={faEnvelope} />Email</a>
                <a className="social-links" href="https://www.linkedin.com/in/anjelicamayfarmer/" target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Anjelica May-Farmer LinkedIn website to a new tab">
                    <FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
            </nav>
        </>

    )
}