import React from 'react';
import PropTypes from 'prop-types'

export default function SearchForm({onSearchSubmitted}){
    let searchFeild=null;
    const searchSubmitted=(e)=>{
        e.preventDefault();
        onSearchSubmitted(searchFeild.value);
    }
    return(
        <form onSubmit={searchSubmitted}>
            <input ref={(e)=>searchFeild=e} type="text" />
            <input type="submit" value="Search" />
        </form>
    )
}

SearchForm.PropTypes={
    onSearchSubmitted:PropTypes.func.isRequired,
}