import Link from 'next/link';

const Collector = ({data,count,countShow=true,columnSize = "col-xl-12 col-lg-12"}) => {
    return(
        <div className={columnSize}>
            
            <div className="seller-item">
                <div className="seller-inner">
                    <div className="seller-part">
                     
                        <div className="assets-owner">
                        <Link href="/author">
                                <a className="simg"><img
                                        src={`${data.image}`} alt="seller-img" /></a>
                                </Link>
                             
                            <div className="owner-content">
                                <h4 className="FlyN">
                                <Link href="/author">
                                    <a>{`${data.name}`}</a>
                                </Link> 
                                </h4>
                                <br></br>
                                <h6 className="FlyN">{`${data.collected}`}</h6>
                            </div>
                        
                    </div>
                    <br></br>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collector