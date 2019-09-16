import React, { Component } from 'react';

class FMTGuarantee extends Component {
    render() {
        return (
            <section className="guarantee" id="fmtg-em">
                <div className="container">
                    <div className="text-center">
                        <h3 style={{margin:"0px", padding:"0px"}} className="title_heading">FMT Guarantee</h3>
                    </div>
                    <h3 style={{textAlign:"center", marginTop:"2px", marginBottom:"40px"}}>FMT has built sufficient trust while working with customers across the Globe:</h3>
                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad_0 bor_1">
                        <h5>Pay upon satisfaction</h5>
                        <p>FMT will absorb the costs if you are not satisfied with the work. You pay only when you sign off.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad_0 bor_2">
                        <h5>Price Guarantee</h5>
                        <p>Billing rates are fixed for the duration of a project or an assignment.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad_0 bor_3">
                        <h5>Resource availability</h5>
                        <p>FMT will ensure availability of selected Techies for the duration of the project, if for any unforeseen reasons the Techie is not able to continue on the project, FMT will deliver an acceptable transition plan to you without any additional cost.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad_0 bor_4">
                        <h5>IP Protection and Data Security</h5>
                        <p>We commit to and adhere to highest standards of IP protection and Data Security.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default FMTGuarantee;