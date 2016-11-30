import React from 'react';
import Beer from './Beer';
import Loader from './Loader';

const Results = React.createClass({
  render() {
    if(this.props.loading) {
      return <Loader message="Pouring a Cold one!" />
    }
    return (
      <div className="beers">
        {this.props.beers.map((details, i) => <Beer key={i} details={details}/>)}
        {/*<pre>{JSON.stringify(this.props.beers, null, ' ')}</pre>*/}
      </div>
    )
  }
});

export default Results;
