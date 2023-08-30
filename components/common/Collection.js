import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Autoplay]);

const Collection = ({ item }) => {

    return (



        <div className="nft-item collection-item" style={{ marginBottom: "17%" }} >


            <div className='module-border-wrap'>
                <div className="nft-inner">


                    <div className="nft-content">
                        <div className="collection-title">
                            <h5>
                                <Link href="/collectionsingle">
                                    <a>{`${item.title}`}</a>
                                </Link>
                            </h5>
                            <br></br>
                            <h5>

                            </h5>
                            {/* <p>Total Supply :  888 000 000</p>
                            <p>Ticker : $FLY</p><br></br> */}
                            <p>{`${item.tokenPrice}`}$ per token
                                <br></br> {`${item.noOfToken}`}</p><br></br>
                            <button type='submit' className='fly-button'> {`${item.buttonText}`}</button>

                            <p>

                            </p>
                        </div>

                        {/* <div
                            className="author-details d-flex flex-wrap justify-content-between align-items-center">
                            <div className="single-author d-flex align-items-center">


                                <h6>

                                </h6>
                            </div>

                        </div>
                        <div
                            className="author-details" style={{ textAlign: "center" }}>
                            <div className="single-author ">


                                <h6>
                                    <Link href="/author">
                                        <a>{`${item.users[0].name}`} </a>
                                    </Link>
                                </h6>
                            </div>

                        </div> */}
                   
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Collection;