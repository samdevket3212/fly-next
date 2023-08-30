import News from "./common/News";
import NewsList from '../data/News/News.json';
import Link from 'next/link';

var LatestNewsList = NewsList.slice(0,3);

const LatestNews = () => {
    return(
        <div>
            <section className="blog-section pb-120">
        <div className="container">
            <div className="section-header">
                <h1 className="header-title"> -Litepaper</h1>
                <div className="header-content">
                 
                    </div>
            </div>

            <div className="section-wrapper" id="s">
                <div className="blog-wrapper">
                    <div className="row justify-content-center g-4" id="d">

                    <p className="FlyN">
                 As we believe that $FLYY is so heavily empowered by our community, we want to decentralize leadership into different committees and task groups that can focus on social media presence, charitable efforts, blockchain development, crypto education and more. In order to be as fair as possible, DAO voting power will be given to two types of holders that have a minimum stake in the $FLYY ecosystem. Holding at least 300 $FLYY and/or 1+ FLYGUYZ NFT will empower someone with a vote in the DAO. This minimum stake guarantees a seat at the table, but each person only has one vote in any matter. This effectively stops whales from being able to buy the vote, and decentralizes ownership to a fair point. The purpose of the DAO will be to govern the protocol, manage treasury funds and decentralize leadership by placing $FLYY directly into those that are the most invested. In all, $FLYY is a community driven social effort, and experiment, from its inception to end goal. From fair distribution to community governance, $FLYY aims to be the premier community token on Ethereum, with intertwined utility across NFTs, DeFi, gaming and more.

                 </p>
                 {/* <ul className="FlyN">
<li>
⊛ 10 $Flyy will be earned daily from staking your FlyGuyz Genesis 
</li>
<li>
⊛ 20 $Flyy will be earned daily from staking your FlyGuyz Genesis Rare 
</li>
<li>⊛ 35 $Flyy will be earned daily from staking your FlyGuyz Legendary</li>


                 </ul> */}

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default LatestNews