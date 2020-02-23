import PropTypes from 'prop-types';

export const SearchResult=PropTypes.shape({
    thumbnails:PropTypes.string.isRequired,
    full:PropTypes.string.isRequired,
})