import {connect} from 'react-redux';
import {searchPerformed} from '../../actions/Search';
import searchForm from './search_form';
function mapDispatchToProps(dispatch){
    return {
        onSearchSubmitted:(searchTerm)=>dispatch(searchPerformed(searchTerm)),
    };
}

export default connect(()=>({}),mapDispatchToProps)(searchForm);