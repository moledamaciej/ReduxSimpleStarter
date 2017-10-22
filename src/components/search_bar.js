import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.text}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ text: term })
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;