import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCab, faCalendarDays, faCar, faPerson, faPlane } from "@fortawesome/free-solid-svg-icons"
import { DateRange, DateRangePicker } from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    });

    const handleOption = (name, operation) => {
        setOptions(prev=>{return{
            ...prev, [name] : operation === 'd' ? options[name]-- : options[name]++
        }})
    }
  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
            {type !== "list" && <><h1 className="headerTitle">
                A lifetime discount? It's Genius.
            </h1>
            <p className="headerDesc">
                Get reward for your travels-unlock instant savings of 10% or more with the free RSbooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faBed} className="headerIcon" />
                    <input type="text" name="" id="" placeholder="Where are you going?" className="headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faCalendarDays} className="headerIcon" />
                    <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")}`} to {`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faPerson} className="headerIcon" />
                    <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">
                                Adult
                            </span>
                            <button className="optionCounterBtn" disabled={options.adult<=1} onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                <div className="optionCounter">    
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">
                                Children
                            </span>
                            <button className="optionCounterBtn" disabled={options.children<=0} onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                <div className="optionCounter">    
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">
                                Room
                            </span>
                            <button className="optionCounterBtn" disabled={options.room<=1} onClick={() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                <div className="optionCounter">    
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>    
                </div>
            </div> </>}
        </div>
    </div>
  )
}

export default Header