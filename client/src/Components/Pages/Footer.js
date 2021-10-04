import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container" >

            <div className="f-container">
                <h4>STAY INFORMED</h4>
                <div className="f-row">
                    <div className="col-xs-12 col-sm-4 text-center border-right">
                        <div style={{display:"block", textAlign:"center",}}>
                            <p>Address <br/>
                                <span>Nabeul, Tunisia</span>
                            </p>
                        </div>

                        <div style={{display:"block", textAlign:"center"}}>
                            <p>Follow us <br/>
                               <span>on social networks</span>
                            </p>
                            <ul className="f-social" style={{marginLeft:"-35px"}}>
                            {/* // eslint-disable-next-line */}
                                <li><a href="https://www.facebook.com/" title="Join us on Facebook !" ><i class="fab fa-facebook-square"></i></a></li>
                            {/* // eslint-disable-next-line */}
                                <li><a href="https://www.instagram.com/cyrina_ka/?hl=fr" title="Follow us on Instagram" ><i class="fab fa-instagram"></i></a></li>
                            {/* // eslint-disable-next-line */}    
                                <li><a href="https://www.linkedin.com/in/cyrine-kachoud-840702186/" title="Follow us on LinkedIn" ><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                       
                    </div>

                    <div className="footer-disclaimer">
                        <div>
                            <ul className="f-menu">
                                {/* // eslint-disable-next-line */}
                                <li style={{paddingRight:"10px", borderRight:"solid"}}><a href="/">Home</a></li>
                                {/* // eslint-disable-next-line */}
                                <li style={{paddingRight:"10px", paddingLeft:"10px", borderRight:"solid"}}><a href="/about">About</a></li>
                                {/* // eslint-disable-next-line */}
                                <li style={{paddingRight:"10px", paddingLeft:"10px",  borderRight:"solid"}}><a href="/adoption">Adoption</a></li>
                                {/* // eslint-disable-next-line */}
                                <li style={{paddingLeft:"10px"}}><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                  
                    

                </div>

            </div>
            
        </div>
    )
}

export default Footer
