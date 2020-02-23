import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/Custom-types';

 export default function SearchResult({result}){
     const {thumbnail}=result;
     return(
         <img src={thumbnail} />
     )
 }
 SearchResult.prototype={
     result:CustomTypes.SearchResult.isRequired,
 };