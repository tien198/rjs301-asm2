import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';

function Browse() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<div className='h-screen bg-zinc-900'></div>
			<div className='h-screen bg-zinc-900'></div>
		</div>
	);
}

export default Browse;

