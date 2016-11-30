import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';

const Main = React.createClass({
  getInitialState() {
    return {
      numBeers: 10,
      beers: [],
      loading: true
    };
  },
  componentWillMount() {
    console.log('mounting');
    const params = this.props.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  },
  componentWillReceiveProps(nextProps) {
    this.loadBeers(nextProps.params.searchTerm);
  },
  incrementBeers() {
    const beerAmount = this.state.numBeers + 1;
    this.setState({ /*pass an object so we don't overwrite entire state */
      numBeers: beerAmount
    });
  },
  loadBeers(searchTerm = 'lager') {
    this.setState({ loading: true });

    // first check if we can pull from local storage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if(localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({ beers: localBeers, loading: false });
      return;
    }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
       /* specifying data dump type for the raw data that returns, ask to convert to type (json)*/
      .then(data => data.json())
      /* when the json is converted, put it in state */
      .then(beers => {
        // console.log(beers);
        // check there are beer labels first
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        // set those beers into state
        this.setState({
          beers: filteredBeers,
          loading: false
        });
        // save them to local storage
        localStorage.setItem(`search-${searchTerm}`, JSON.stringify(filteredBeers));
      });
  },
  render(){
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!"/>
        <Search />
        <button onClick={this.incrementBeers}>{this.state.numBeers} Beers</button>
        <Results {...this.state} /> {/* this spread is equal to numBeers=this.state.numBeers beers={this.state.beers} */}
      </div>
    )
  }
});

export default Main;
