import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/app';
import reducers from './reducers';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const createStoreWithMiddleware = applyMiddleware()(createStore);

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  </ApolloProvider>
  , document.querySelector('.fmt-container'));
