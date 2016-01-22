import React from 'react';

const SearchButton = ({handleClick, colSize}) => {
  return (
    <div className={'btn-search-item btn-search-btn col-md-'+colSize} onClick={handleClick}>
      <div className='btn-group'>
        <h4><i className='fa fa-search'></i> Search</h4>
      </div>
    </div>
  )
}

export default SearchButton;
