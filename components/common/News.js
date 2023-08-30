import Link from 'next/link';

const News = ({data}) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="nft-item blog-item">
                <div className="nft-inner">
                   
                    <div className="nft-content">
                        <div className="author-details">
                            <h4>
                            <Link href="/blogsingle">
                                <a >{`${data.title}`}</a>
                            </Link> 
                            </h4>
                            <div className="meta-info">
                                <p><span><i className="icofont-ui-calendar"
                                            data-blast="color"></i></span>{`${data.date}`}
                                </p>
                                <p><span><i className="icofont-user" data-blast="color"></i></span>{`${data.author}`}
                                </p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News