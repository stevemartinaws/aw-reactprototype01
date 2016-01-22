import React from 'react';
import {connect} from 'react-redux';
import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'
import {searchProfiles, genderSelected, serviceSelected, orientationSelected} from '../../../redux/actions'
import Select from 'react-select';

class SearchContainer extends React.Component {
  constructor (props) {
    super(props);
    this.handleGenderSelect = this.handleGenderSelect.bind(this);
    this.handleServiceSelect = this.handleServiceSelect.bind(this);
    this.handleOrientationSelect = this.handleOrientationSelect.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }
  render () {
    const {genders, genderSelectedValue, services, servicesSelectedValue, orientations, orientationsSelectedValue} = this.props;
    return (
      <div>
        <SearchField name={'Gender'} colSize={'2'}>
          <Select name="search-form-gender-select" value={genderSelectedValue} onChange={this.handleGenderSelect} options={genders} searchable={false} clearable={false}/>
        </SearchField>
        <SearchField name={'Services'} colSize={'3'}>
          <Select name="search-form-services-select" value={servicesSelectedValue}  onChange={this.handleServiceSelect} options={services} searchable={false} clearable={false} />
        </SearchField>
        <SearchField name={'Orientation'} colSize={'2'}>
          <Select name="search-form-orientation-select" value={orientationsSelectedValue}  onChange={this.handleOrientationSelect} options={orientations} searchable={false} clearable={false} />
        </SearchField>
        <SearchField name={'Location'} colSize={'3'} >
          <Select name="search-form-location-select" searchable={false} clearable={false} />
        </SearchField>
        <SearchButton handleClick={this.handleSearchButtonClick} colSize={'2'} />
      </div>
    )
  }


  handleSearchButtonClick () {
    console.log('handleSearchButtonClick')
    const {dispatch, searchQuery} = this.props;
    dispatch(searchProfiles(searchQuery));
  }
  handleGenderSelect(val){
    const {dispatch, genders} = this.props;
    const item = genders.filter(i => i.value==val)[0]
    dispatch(genderSelected(item));
  }
  handleServiceSelect(val){
    const {dispatch, services} = this.props;
    const item = services.filter(i => i.value==val)[0]
    dispatch(serviceSelected(item));
  }
  handleOrientationSelect(val){
    const {dispatch, orientations} = this.props;
    const item = orientations.filter(i => i.value==val)[0]
    dispatch(orientationSelected(item));
  }
}

function filterState(state) {
  return {
    genders: state.genders,
    genderSelectedValue: state.searchBar.genderSelectedValue,
    services: state.searchBar.listItems.services,
    servicesSelectedValue: state.searchBar.servicesSelectedValue,
    orientations: state.orientations,
    orientationsSelectedValue: state.searchBar.orientationsSelectedValue,
    searchQuery: state.searchBar.searchQuery
  }
}
export default connect(filterState)(SearchContainer);
