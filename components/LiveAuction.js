import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Products from '../data/Product/Products.json'
import ProductSingle from "./common/ProductSingle";

var productList = Products.slice(0,5);

SwiperCore.use([Navigation]);


const LiveAuction = () => {
    const swiperRef = React.useRef(null);

    return(
        <div>
            <section className="auction-section padding-bottom">
            <div className="container">
            <div className="module" style={{marginBottom: "3%"}}>
            <h3 className="header-title" id="ht">TOKENOMICS </h3>
            <br></br>
            <br></br>
            <br></br>
                            <div >
                                <img  className="ic" src="../assets/images/banner/chart.png" />
                            </div>
                       
                            </div><br></br>
                            <br></br>
                <div className="section-header">

                    <h3 className="header-title">Our Team </h3>
                    <div className="header-content">
                        <ul className="arrows d-flex flex-wrap align-items-center">
                            <li className="li arrow-left auction-prev" onClick={() => swiperRef.current.swiper.slidePrev()}> <i className="icofont-rounded-left"></i> </li>
                            <li className="li arrow-right auction-next"  onClick={() => swiperRef.current.swiper.slideNext()}> <i className="icofont-rounded-right"></i></li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div className="section-wrapper" style={{display:"flex", justifyContent:"center"}}>
                    <div className="auction-holder">
                    <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/6.png" alt="NFT Image" />
                            </div>
                            <a href=" https://instagram.com/earth.to.austin?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>
                            <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/2.png" alt="NFT Image" />
                            </div>
                            <a href=" https://instagram.com/backy1610?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>

                            <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/5.png" alt="NFT Image" />
                            </div>
                            <a href=" https://instagram.com/damnitschunky?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>


                        <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/1.png" alt="NFT Image" />
                              
                            </div>
                            <a href=" https://instagram.com/damnitschunky?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>
                            <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/4.png" alt="NFT Image" />
                            </div>
                            <a href=" https://instagram.com/damnitschunky?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>
                            <div className='module-border-wrap' style={{marginBottom: "3%"}}>
                            <div className="banner-imag">
                                <img src="../assets/images/team/3.png" alt="NFT Image" />
                            </div>
                            <a href=" https://instagram.com/damnitschunky?igshid=YmMyMTA2M2Y=" class="insta">View Instagram Profile  </a>
                            </div>
                          
                       
                           
                        
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default LiveAuction