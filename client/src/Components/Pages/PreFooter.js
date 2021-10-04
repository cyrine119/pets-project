import React from 'react'

export const PreFooter = () => {
    return (
        <div>
            
            <div id="footer">
        <div className="container">
            <div className="row" >
                <h4 style={{fontWeight:"bold", fontSize:"33px"}}>How to help us ?</h4>
                <div style={{marginLeft:"100px", paddingLeft:"120px"}} >
                <div className="col-xs-12 col-sm-12 col-md-4">
                     <div className="footer-block footer-block-participate">
                     <h4 style={{fontWeight:"bold"}}>Adopt</h4>
                     <p style={{color:"black"}}>Come and discover the animals in our shelters and allow one of them to be adopted and spend the rest of their life with a caring family! </p>
                     {/* eslint-disable-next-line */}
                     <a href="http://localhost:3000/adoption" className="btn btn-dark">
                      <i class="fa fa-chevron-right"></i> I adopt an animal 
                     </a>
                </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                     <div className="footer-block footer-block-participate1">
                     <h4 style={{fontWeight:"bold"}}>Join us</h4>
                     <p style={{color:"black"}}>Do you want to help us by giving us time and sharing your passion and your know-how? So join the EFOA volunteers!</p>
                     {/* eslint-disable-next-line */}
                     <a href="/contact" class="btn btn-secondary" style={{marginTop:"20px"}} >
                      <i class="fa fa-chevron-right"></i> I become a volunteer      
                    </a>
                </div>
                </div>  
                </div>
            </div>
        </div>
        
    </div>


        </div>
    )
}
