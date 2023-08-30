import CollectionSingle from "./common/Collection";
import PopularList from '../data/Collection/Popular.json';
import Link from 'next/link';

var GetPopularList = PopularList.slice(0, 3);


const PopularCollection = () => {

    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-header">
                    <h3 className="header-title">Launch Details</h3>
                    <div className="header-content">


                    </div>
                </div>
                <div className="section-wrapper" style={{
                    display: "flex",
                    justifyContent: "center", marginLeft: "90px"
                }}>
                    <div className="collection-wrapper" style={{ width: "33.33%" }}>
                        <div className="launcdetialstext">

                            <p>Token Name :  FlyGuyz</p>
                            <p>Ticker : $FLYY</p>
                            <p>Token Name :  888,000,000</p>
                        </div>


                        {
                            GetPopularList.map((item) => (
                                <CollectionSingle item={item} key={item.id} />
                            ))
                        }




                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularCollection