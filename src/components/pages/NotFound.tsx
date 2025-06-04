import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="notfound">
            <h2>404</h2>
            <p>Sidan kunde inte hittas.</p>
            <Link to="/">Tillbaka till startsidan</Link>
        </section>
    )
}

export default NotFound