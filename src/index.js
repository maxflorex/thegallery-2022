import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// INITIALIZE GRAPHQL CLIENT
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
} from "@apollo/client";

// GRAPHQL QUERY
const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>
);
