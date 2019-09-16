import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/app';
import reducers from './reducers';

// import 'bootstrap/dist/css/bootstrap.css';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000'
// })

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))    
);

const history = createBrowserHistory();

ReactDOM.render(
  // <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
		<Route path="/" component={App}>
		</Route>
      </Router>
    </Provider>
  // </ApolloProvider>
  , document.querySelector('.fmt-container'));
