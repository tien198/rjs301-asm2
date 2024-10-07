import React, { useState } from 'react';
import styles from './Search.module.css'
// import { MovieListGrid } from '../../components/layout/MovieComponents';

const Search = () => {
	const [list, setList] = useState([])
	function onSubmit(e) {
		e.preventDefault()
	}
	return (
		<div className='bg-main py-36'>
			<form onSubmit={onSubmit} className={`${styles['search-form']} font-semibold rounded bg-white mx-4 md:mx-auto overflow-hidden`}>
				<input type='text' className='px-7 py-5 w-full font-semibold bg-transparent relative z-50' placeholder='Find' />
				<span className={`${styles['magnifyingGlass']}`}></span>
				<div className='flex flex-row-reverse gap-5 my-7 mx-14'>
					<button type='submit'>Search</button>
					<button type='button'>Reset</button>
				</div>
			</form>
			{/* <MovieList list={ } category='Search Results' movieDetail={true} /> */}
		</div>
	);
};

export default Search;
