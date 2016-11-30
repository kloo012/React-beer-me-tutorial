import React from 'react';

const Search = React.createClass({
  handleSubmit(e) {
      //stop from refreshing the page
      e.preventDefault();
      // get the data from the input
      const searchTerm = this.refs.q.value;
      // change the URL to /search/searchTerm
      this.context.router.transitionTo(`/search/${searchTerm}`);
      this.refs.q.value = '';
  },
  contextTypes: { //like proptypes, but for context
      router: React.PropTypes.object
  },
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="q" placeholder="Search..." />
          <input type="submit" value="Search..." />
        </form>
      </div>
    );
  }
});

export default Search;
