import React, { useState } from 'react';
import styles from './Search.module.css'
import { MovieCategory, MovieSearchResults } from '../../components/layout/MovieComponents';
import { getSearchedList } from '../../ulti/http';

const Search = () => {
	const [query, setQuery] = useState('')
	const [list, setList] = useState([])
	function onChangeQuery(e) {
		setQuery(e.target.value)
	}
	function clearInput() {
		setQuery('')
	}
	function onSubmit(e) {
		e.preventDefault();
		(async function () {
			const response = await getSearchedList(query)
			const results = response.results
			setList(results)
		})()
		clearInput()
	}
	return (
		<div className='h-screen bg-main py-36'>
			<form onSubmit={onSubmit} className={`${styles['search-form']} font-semibold rounded bg-white mx-4 md:mx-auto overflow-hidden`}>
				<input value={query} onChange={onChangeQuery} className='px-7 py-5 w-full font-semibold bg-transparent relative z-50' placeholder='Find' />
				<span className={`${styles['magnifyingGlass']}`}></span>
				<div className='flex flex-row-reverse gap-5 my-7 mx-14'>
					<button type='submit'>Search</button>
					<button type='button'>Reset</button>
				</div>
			</form>
			<MovieSearchResults title='Search Result' list={list} />
		</div>
	);
};

export default Search;
