import React from 'react';
import {Navbar, Nav, NavDropdown, Button, FormControl, Form} from 'react-bootstrap';
import {AppBar, Toolbar, Link} from "@material-ui/core";


const NavBar = () => {
    const renderDropDowns = () => {
        return (<ul className="nav navbar-nav">
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Environment<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Environment/Adapting%20to%20Climate%20Change/">Adapting to Climate Change</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Climate%20Change%20Info/">Climate Change Info</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Geography/">Geography</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Natural%20Disasters/">Natural Disasters</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Posters/">Posters</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Teaching%20Resources/">Teaching Resources</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Waste%20Facts/">Waste Facts</a></li>
                <li className="divider"></li>
                <li><a href="/content/Environment/Wildlife/">Wildlife</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Health and Safety<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Health%20and%20Safety/Awareness/">Awareness</a></li>
                <li className="divider"></li>
                <li><a href="/content/Health%20and%20Safety/Boat%20Safety/">Boat Safety</a></li>
                <li className="divider"></li>
                <li><a href="/content/Health%20and%20Safety/Health%20PDFs/">Health PDFs</a></li>
                <li className="divider"></li>
                <li><a href="/content/Health%20and%20Safety/Natural%20Disaster%20Management/">Natural Disaster Management</a></li>
                <li className="divider"></li>
                <li><a href="/content/Health%20and%20Safety/Safety/">Safety</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Language Arts<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Language%20Arts/English%20Grammar/">English Grammar</a></li>
                <li className="divider"></li>
                <li><a href="/content/Language%20Arts/Story%20Books/">Story Books</a></li>
                <li className="divider"></li>
                <li><a href="/content/Language%20Arts/Teaching%20Resources/">Teaching Resources</a></li>
                <li className="divider"></li>
                <li><a href="/content/Language%20Arts/Voice%20of%20America%20%28VOA%29/">Voice of America (VOA)</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Local Topics<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Local%20Topics/Chuuk/">Chuuk</a></li>
                <li className="divider"></li>
                <li><a href="/content/Local%20Topics/Micronesia/">Micronesia</a></li>
                <li className="divider"></li>
                <li><a href="/content/Local%20Topics/Samoa/">Samoa</a></li>
                <li className="divider"></li>
                <li><a href="/content/Local%20Topics/Tonga/">Tonga</a></li>
                <li className="divider"></li>
                <li><a href="/content/Local%20Topics/Vanuatu/">Vanuatu</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Math<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Math/Addition%20and%20Subtraction/">Addition and Subtraction</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Advanced/">Advanced</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Decimals/">Decimals</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Fractions/">Fractions</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Multiplication%20and%20Division/">Multiplication and Division</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Negative%20Numbers%20and%20Absolute%20Values/">Negative Numbers and Absolute Values</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Teaching%20Resources/">Teaching Resources</a></li>
                <li className="divider"></li>
                <li><a href="/content/Math/Telling%20Time/">Telling Time</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Science<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/content/Science/Agriculture%20for%20Islands/">Agriculture for Islands</a></li>
                <li className="divider"></li>
                <li><a href="/content/Science/Earth%20and%20Space/">Earth and Space</a></li>
                <li className="divider"></li>
                <li><a href="/content/Science/Human%20Body/">Human Body</a></li>
                <li className="divider"></li>
                <li><a href="/content/Science/Life%20Science/">Life Science</a></li>
                <li className="divider"></li>
                <li><a href="/content/Science/Physical%20Science/">Physical Science</a></li>
                <li className="divider"></li>
                <li><a href="/content/Science/Secretariat%20of%20the%20Pacific%20Community%20%28SPC%29/">Secretariat of the Pacific Community (SPC)</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Encyclopedias<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                <li><a href="/med/">Medical Encyclopedia</a></li>
                <li className="divider"></li>
                <li><a href="/Wikipedia/">Wikipedia</a></li>
            </ul>
        </li>
    </ul>);
    }

    return (

        
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/" style={{padding:'5px 5px', marginleft:'0px'}}>
                            <img alt="Brand" href="/" src="/img/SPELLWebsite-header_revised.png" style={{maxheight:'40px'}} />
                        </a>
                    </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            {renderDropDowns()}
                        </div>
                    </div>
            </nav>
            );
        }
        
export default NavBar;