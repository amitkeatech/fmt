// import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { techieRequirement } from '../../actions/home/techieRequirementAction';

import TechieSearch from './techieSearch';

class TechieRequirement extends Component {

    constructor(props) {
        super(props);
        this.state = { quantity: 0, email: "" };
    }

    formSubmit = formValues => {
        this.props.techieRequirement(formValues);
    }

    minus = () => {
        if (this.state.quantity > 0) {
            this.setState({quantity: this.state.quantity-1});
            this.props.change('quantity', this.state.quantity-1);
        }
    }

    plus = () => {
        if (this.state.quantity < 50) {
            this.setState({quantity: (this.state.quantity+1)});
            this.props.change('quantity', this.state.quantity+1);
        }
    }

    checkNumber = (e) => {
        if (_.includes([8, 9, 27, 13, 46], e.keyCode) ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }

    onInputChange = (event, newValue) => {
        let quantity = newValue;
        let val = 0;
        
        if (quantity === "" || !(/^\d+$/.test(quantity))) {
            val = 0;
        } else {
            val = parseInt(quantity);
        }
        
        if (val < 0) {
            val = 0;
        } else if (val > 50) {
            val = 50;
        }
        this.setState({quantity: val});
        this.props.change('quantity', val);
    }

    checkEmail = (ev) => {
        let val = ev.target.value;
        let valid = true;
        let regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9.])+.([A-Za-z]{2,4})$/;
        let error = document.querySelector(".emailForResume label.error");
        
        if (!regex.test(val) || (val.length > 60)) {
            valid = false;
        } else if (val.indexOf("..") >= 0) {
            valid = false;
        } else if (val.indexOf(".@") >= 0 || val.indexOf("@.") >= 0) {
            valid = false;
        }

        if (valid) {
            error.style.display = "none";
        } else {
            error.style.display = "block";
        }
    }

    render() {
        return (
            <div className="from_section_resume">
                <div className="container">
                    <form id="requirement_for_techie" 
                        onSubmit={this.props.handleSubmit(this.formSubmit)} 
                        name="requirement_for_techie" 
                    >
                        <div className="send_resume-top" >
                            <div className="InnerForresume" style={{background:"#fff"}}>
                                <h4>I am looking for techies and would like to see some profiles</h4>
                                <div className="select_technology plsSelectTech">
                                    <div className="fmt_send_resume">
                                        <label>Select Technical Skill</label>
                                        <div className="nav-search">
                                            <TechieSearch namespace='searchReducer2' />
                                        </div>
                                    </div>  
                                </div>
                                <div className="select_technology yearofExperience">
                                    <div className="fmt_send_resume experience_lexel">
                                        <label>Experience level (Years)</label>
                                        <div className="experience-center-btn">
                                            <button className="quantity-left-minus" onClick={this.minus}><img src="/images/new_subtract.jpg" alt="new_subtract" /></button>
                                            {/*onInput="this.value=this.value.replace(/[^0-9]/g,'');"*/}
                                            <Field 
                                                type="text" 
                                                component="input"
                                                id="quantity" 
                                                name="quantity" 
                                                className="form-control input-number" 
                                                autoComplete="off"
                                                value={this.state.quantity}
                                                onChange={this.onInputChange}
                                                onKeyDown={this.checkNumber}
                                                min="0" 
                                                maxLength="2" 
                                            />
                                            <button className="quantity-right-plus" onClick={this.plus}><img src="/images/new_add.jpg" alt="new_add" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="select_technology emailForResume">
                                    <div className="fmt_send_resume">
                                        <label>Your Business Email ID</label>
                                        <Field 
                                            id="businessemail" 
                                            type="email" 
                                            component="input"
                                            onBlur={this.checkEmail}
                                            name="businessemail" 
                                            placeholder="Please enter Email ID" 
                                            spellCheck="false"
                                        />
                                        <label style={{display: "none"}} htmlFor="businessemail" generated="true" className="error">Please enter a valid email address.</label>
                                        <div className="lock-pvt banner-form-field"> <i className="fa fa-lock" aria-hidden="true"></i> Private </div>
                                    </div>
                                </div>
                                <div className="send-me_resume">
                                    <div className="up-arrow"></div>
                                    <button type="submit" className="btn btn-primary ">Yes, share resumes!</button>
                                    <span className="back_image"></span>
                                </div>
                            </div>
                        </div>
                        <div className="cl"></div>
                    </form>
                </div>
                <div className="cl"></div>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};
    let regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9.])+.([A-Za-z]{2,4})$/;
    if (formValues.technologies && !formValues.technologies.label) {
        errors.technologies = "Please select a technology";
    }
    if (!formValues.quantity || formValues.quantity > 0 || formValues.quantity > 50 || isNaN(formValues.quantity)) {
        errors.quantity = "plese select a value between 0 to 50";
    }
    if (formValues.businessemail && (!formValues.businessemail || !regex.test(formValues.businessemail))) {
        errors.technologies = "Please select a technology";
    }
    return errors;
}

const mapStateToProps = state => {
    return {
        techieReq: Object.values(state.techieReqReducer)
    }
}

const techie = connect(
    mapStateToProps,
    { techieRequirement }
)(TechieRequirement);

export default reduxForm({
    form: 'requirement_for_techie',
    validate,
    initialValues: {
        quantity: 0
    },
    fields: ["technologies", 'quantity', 'businessemail']
})(techie);