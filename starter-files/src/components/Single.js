import React from 'react';
import Header from './Header';
import Loader from './Loader';

const Single = React.createClass({
  getInitialState() {
    return {
      beer: {},
      loading: true
    };
  },
  componentWillMount() {
    this.loadBeer();
  },
  loadBeer(beerId = this.props.params.beerId) {
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    .then(beerData => {
      // update state..
      this.setState({
        beer: beerData.data,
        loading: false
      });
    });
  },
  render() {
    if(this.state.loading) {
      return <Loader message="Pouring a Cold one!" />
    }
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!"/>
        <div className="single-beer">
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.description}</p>
        </div>
      </div>
    )
  }
});

export default Single;
