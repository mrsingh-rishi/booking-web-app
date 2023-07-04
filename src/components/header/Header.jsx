import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCab, faCar, faPlane } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCab} />
                    <span>Airport Taxi</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </div>
            </div>
            <h1 className="headerTitle">
                A lifetime discount? It's Genius.
            </h1>
            <p className="headerDesc">
                Get reward for your travels-unlock instant savings of 10% or more with the free RSbooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header