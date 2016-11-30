// Let's Go!
import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';
import Single from './components/Single';

import { BrowserRouter, Match } from 'react-router'; /*router v. 4, the latest*/

import './style.css';

const Root = function() {
		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" component={Main} />
          <Match pattern="/search/:searchTerm" component={Main} />
          <Match pattern="/beer/:beerId/:beerSlug" component={Single} />
				</div>
			</BrowserRouter>
		)
}

render(< Root />,  document.querySelector('#root'));
