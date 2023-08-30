import SellCardList from "../data/Other/SellCard.json";

var GetSellCardList = SellCardList

const SellCard = () => {
    return(
        <div className="p">
            <section className="process-section padding-bottom">
        <div className="container">
            <div className="section-header">
                <h3 className="header-title" id="t">
                    NFTs
                </h3>
            </div>
            <div className="section-wrapper">
                <div className="nft-sell-wrapper">
                    <div className="col justify-content-center g-4">
                        {
                            GetSellCardList.map((item) => (
                                <div className="col-md-6" key={item.id}>
                                <div className="col-lg-6">
                            <div className="banner-image" id="b" >
                                <img className="b" src={`${item.image}`} alt="NFT Image" />
                            </div>
                        </div>
                                </div>
                            ))
                        }
                       
                    </div>
                    


                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default SellCard;