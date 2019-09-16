import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchTechnologies } from '../../actions/home/searchAction';

class Search extends Component {

    constructor(props) {
        super(props);
    
        this.state = { term: "" };
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.term === "" && nextProps.technologies &&  nextProps.technologies.length > 0) {
            return false;
        }
        return this.props.technologies !== nextProps.technologies;
    }
    
    onInputChange = (ev) => {
        const term = ev.target.value;
        this.setState({
          term: term
        });

        this.props.searchTechnologies(this.props.namespace, term);
        this.changeDisplay(ev.target, "block");
    }
    
    changeDisplay = (element, value) =>  {
        if (element.nextElementSibling && element.nextElementSibling.childNodes) {
            element.nextElementSibling.childNodes.forEach(function(elem) {
                elem.style.display = value;
            });
        }
    }

    handleSubmit = (ev) => {
        const { searchTechnologies } = this.props;
        const searchTerm = this.state.term;
    
        ev.preventDefault();
    
        if (searchTerm !== "") searchTechnologies(this.props.namespace, searchTerm);
    }

    setTechnologyValue = (ev) => {
        ev.preventDefault();
        let elem = window.document.querySelector(".searchInput");
        elem.value = ev.target.text;
        this.changeDisplay(elem, "none");
    }

    checkList() {
        const { technologies } = this.props;
        if (technologies && technologies.length > 0) {
            return (
                <ul className="browse-menu-technology">
                    {this.renderList()}
                </ul>
            );
        }
    }

    renderList() {
        const { technologies } = this.props;
        if (technologies && technologies.length > 0) {
            return technologies.map(tech => {
                return (
                    <li key={tech.id} style={{display: "block"}} ><Link to="/">{tech.name}</Link></li>
                );
            });
        }
    }

    render() {
        //<form name="search-technologies" onSubmit={this.handleSubmit} action="#">
        return (
            <div>
                <input 
                    defaultValue=""
                    type="text" 
                    name="browse-technologies" 
                    className="searchInput" 
                    placeholder="Find Techies" 
                    onChange={this.onInputChange}
                    autoComplete="off"
                    spellCheck="false"
                />
                {this.checkList()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        technologies: Object.values(state.searchReducer1)
    }
}

export default connect(
    mapStateToProps,
    { searchTechnologies }
)(Search);

// reduxForm({
//     form: 'search-technologies',
//     fields: ['browse-technologies']
// }
// )(Search);