import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';
import MovieList from '../../components/layout/MovieList';

function Browse() {
	return (
		<div>
			<Navbar />
			<Banner />
			<BodyPage />
			<div className='h-screen bg-zinc-900 opacity-80'></div>
			<div className='h-screen bg-zinc-900 opacity-80'></div>
		</div>
	);
}

export default Browse;

function BodyPage() {
	return (
		<>
			<MovieList />
		</>
	)
}