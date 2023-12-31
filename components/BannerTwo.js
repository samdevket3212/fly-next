import Link from 'next/link';

const BannerTwo = () => {
    return (
        <section className="banner-section" style={{ backgroundImage: "url('assets/images/banner/bg-1.jpg')" }}>
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="mb-3"><span className="gradient-text-orange">Welcome To ✈️,
                                </span> Flyguyz.io
                                    <span className="gradient-text-orange"> Society</span>
                                </h1>
                                <p className="mb-5">FlyGuyz will be introducing a high quality, mainstream, style gaming to the blockchain. The users who hold $Flyy Token are an active part of the FlyGuyz ecosystem and earn rewards in the form of $Flyy Tokens!.</p>
                                <div className="banner-btns d-flex flex-wrap">
                                    <Link href="/explore">
                                        <a className="default-btn move-top"><span>Explore</span> </a>
                                    </Link>
                                    <Link href="/signin">
                                        <a className="default-btn move-right"><span>Create</span> </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image">
                                <img src="assets/images/banner/banner-img.png" alt="NFT Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerTwo