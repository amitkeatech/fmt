import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import { searchTechnologies } from '../../actions/home/searchAction';
import ReduxFormSelect from '../common/ReduxFormSelect';

// const options = [{ value: 'chocolate', label: 'Chocolate' },
// { value: 'strawberry', label: 'Strawberry' },
// { value: 'vanilla', label: 'Vanilla' }];

class TechieSearch extends Component {

    state = { techTerm: "", selectedOption: null };
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.techTerm === "" && nextProps.techieTechnologies && nextProps.techieTechnologies.length > 0) {
            return false;
        }
        return this.props.techieTechnologies !== nextProps.techieTechnologies;
    }
    
    onInputChange = (term) => {
        // const term = ev.target.value;
        this.setState({ techTerm: term });
        this.props.searchTechnologies(this.props.namespace, term);
        //this.changeDisplay(ev.target, "block");
    }
    
    // changeDisplay = (element, value) =>  {
    //     if (element.nextElementSibling && element.nextElementSibling.childNodes) {
    //         element.nextElementSibling.childNodes.forEach(function(elem) {
    //             elem.style.display = value;
    //         });
    //     }
    // }

    // handleSubmit = (ev) => {
    //     const { searchTechnologies } = this.props;
    //     const searchTerm = this.state.techTerm;
    
    //     ev.preventDefault();
    
    //     if (searchTerm !== "") searchTechnologies(searchTerm);
    // }

    // setTechnologyValue = (ev) => {
    //     // ev.preventDefault();
    //     const term = ev.target.text;
    //     let elem = window.document.querySelector(".searchInput1");

    //     this.setState({ techTerm: term });
    //     elem.value = term;
    //     this.changeDisplay(elem, "none");
    // }

    // checkList() {
    //     const { techieTechnologies } = this.props;
    //     if (techieTechnologies && techieTechnologies.length > 0) {
    //         return (
    //             <ul className="browse-menu-technology">
    //                 {this.renderList()}
    //             </ul>
    //         );
    //     }
    // }

    // renderList() {
    //     const { techieTechnologies } = this.props;
    //     if (techieTechnologies && techieTechnologies.length > 0) {
    //         return techieTechnologies.map(tech => {
    //             return (
    //                 <li key={tech.id} style={{display: "block"}} >
    //                     <Link to="/" onClick={this.setTechnologyValue}>
    //                         {tech.name}
    //                     </Link>
    //                 </li>
    //             );
    //         });
    //     }
    // }

    render() {
        //<form name="search-technologies" onSubmit={this.handleSubmit} action="#">
        const { techieTechnologies } = this.props;
        let options = [];

        if (techieTechnologies && techieTechnologies.length > 0) {
            techieTechnologies.map(tech => {
                options = [...options, {label:tech.name, value:tech.id}]
            });
        }
        
        return (
            <div>
                {/*<Field 
                    component="input"
                    type="text"
                    name="technologies" 
                    className="searchInput1" 
                    onChange={this.onInputChange}
                    autoComplete="off"
                    spellCheck="false" 
                    value=""
                    placeholder="Example: React.js, Angular, Node ..."
                />*/}
                <Field 
                    name="technologies" 
                    component={ReduxFormSelect} 
                    options={options}
                    onInputChange={this.onInputChange}
                    placeholder="Example: React.js, Angular, Node ..."
                />
                {/*this.checkList()*/}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        techieTechnologies: Object.values(state.searchReducer2)
    }
}

export default connect(
    mapStateToProps,
    { searchTechnologies }
)(TechieSearch);

// export default reduxForm({
//     form: 'search-technologies',
//     fields: ['browse-technologies']
// }
// )(search);