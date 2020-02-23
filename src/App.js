import React from 'react';
import SearchForm from '../components/search-form/search-form.container'
import SearchResults from '../components/Search-results/search_results.container';

class App extends React.Component {
 render() {
  return(
   <div>
    <SearchForm />
     <SearchResults />
   </div>
  );
 }
}
export default App