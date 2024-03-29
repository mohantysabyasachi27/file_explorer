import React from "react";
const Home = () => {
    return (
    <div className="container">
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
                <div className="item active">
                    <img style={{width:'100%'}} src="/img/east_africa_banner.png" alt="SPELL background" className="img-responsive" />
                </div>
        </div>
        <div className="row">
            <div className="col-xs-6 col-lg-4">
                <br /> 
                <a href="/content/Environment/">
                    <img src="/img/SPELL_Environment_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
            </div>
            <div className="col-xs-6 col-lg-4">
                <br />
                <a href="/content/Health%20and%20Safety/"> 
                    <img src="/img/SPELL_HealthSafety_Icon_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
            </div>
            <div className="col-xs-6 col-lg-4">
                <br />
                <a href="/content/Language%20Arts/">
                    <img src="/img/SPELL_Langauge_Arts_Icon_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
            </div>
            <div className="col-xs-6 col-lg-4">
                <br />
                <a href="/content/Local%20Topics/">
                    <img src="/img/SPELL_localtopics_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
                <br />
            </div>
            <div className="col-xs-6 col-lg-4">
                <br />
                <a href="/content/Math/">
                    <img src="/img/SPELL_Math_Icon_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
                <br />
            </div>
            <div className="col-xs-6 col-lg-4">
                <br />
                <a href="/content/Science/">
                    <img src="/img/SPELL_Science_FINAL.png" className="center-block" style={{maxHeight:'140px'}}/>
                </a>
                <br />
            </div>
        </div>
    </div>
    );

}
export default Home;