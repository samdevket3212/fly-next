const ContactForm = () => {
    return (
        <article className="contact-form-wrapper">
            <div className="contact-form" >
                <h4 className="round">ROUND 1 </h4>
                <p className="mb-5">Token Name: $FlyGuyz </p>

                <form className="comment-form" id="contact-form">
                    <div className="row g-3">
                        <div className="col-md-8">
                            <div className="form-floating">
                            <p className="mb-5">Ticker : $FLYY </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-floating">
                            <p className="mb-5">Total Supply : 888 000 000</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-floating">
                            <p className="mb-5">(Private Sale)</p>
                            <p className="mb-5">0.010$ per token</p>
                            <p className="mb-5">22 Million token</p>
                            </div>
                        </div>
                       
                   
                    </div>





                 
                </form>
            </div>
        </article>
    )
}

export default ContactForm;