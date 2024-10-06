import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Index from './pages/index/Index';
import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />}>
					<Route path="/" index={true} element={<Browse />} />
					<Route path="/search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
