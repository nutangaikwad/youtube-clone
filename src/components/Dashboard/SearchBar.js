import React, { Component } from "react";
// import {Link} from 'react-router-dom'
class SearchBar extends Component {
  state = {
    searchQuery: ""
  };

 
  onInputChange = searchQuery => {
    console.log(searchQuery)
    this.setState({
      searchQuery 
    });
  };

  handleSearch = () => {
    const searchQuery = this.state.searchQuery;
    if (searchQuery.length > 0) {
      this.props.searchVideo(searchQuery);
    }
  };
  render() {
     
    const { searchQuery } = this.state;
    return (
      <>
      {/* <div>  */}
            {/* <MenuIcon /> */}
            {/* <Link to='/'> */}
             
            {/* </Link> */}
      {/* </div> */}
      <div className="search-container">
      <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
        <input
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button onClick={this.handleSearch} className="search-btn">
          Search
        </button>
      </div>
      </>

    );
  }
}

export default SearchBar;
