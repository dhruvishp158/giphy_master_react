import React from 'react';
import PropTypes from 'prop-types'
import * as CustomTypes from '../../lib/Custom-types';
import SearchResult from '../Search-Result/Search-result'

export default function SearchResults({results}){
return(
    <div>

      {results.map((result)=><SearchResult result={result} />)} 
    </div>
)
}

SearchResults.PropTypes={
    results:PropTypes.arrayOf(CustomTypes.SearchResult),
};