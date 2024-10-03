import React, { useContext } from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';
import MovieList from '../../components/layout/MovieList';
import { MovieListContext, MovieListProvider } from '../../store/movies-list-context';
import { getActionMoviesList, getComedyMoviesList, getDocumentariesList, getHorrorMoviesList, getOriginalList, getRomanceMoviesList, getTopRatedList, getTrendingList } from '../../ulti/http';
import { useFetchMovieListWithContext } from '../../hooks/useFetchMovieList';
import { MovieCategory } from '../../components/layout/MovieCategory';
import { useGetBannerInfo } from '../../components/layout/hooks/useGetBannerInfo';


export default function Browse() {

	return (
		<MovieListProvider>
			<Page />
			<div className='h-36 bg-main'></div>
		</MovieListProvider>
	);
}

// <internal components> ---------------------------------------

function Page() {
	const { list: originalList } = useFetchMovieListWithContext(getOriginalList, useContext(MovieListContext))

	// <internal custom hooks>
	// bannerInfo is get random from (based on) 'originalList'  
	const { bannerInfo } = useGetBannerInfo(originalList)

	return (
		<>
			<Navbar />
			<Banner {...bannerInfo} />
			<CategoriesGallery />
		</>
	)
}

function CategoriesGallery() {
	const { list: originalList } = useContext(MovieListContext)

	return (
		<>
			<MovieList list={originalList} landScape={false} />
			<MovieCategory title='Xu hướng' fetchFn={getTrendingList} />
			<MovieCategory title='Xếp hạng cao' fetchFn={getTopRatedList} />
			<MovieCategory title='Hành Động' fetchFn={getActionMoviesList} />
			<MovieCategory title='Hài' fetchFn={getComedyMoviesList} />
			<MovieCategory title='Kinh dị' fetchFn={getHorrorMoviesList} />
			<MovieCategory title='Lãng mạn' fetchFn={getRomanceMoviesList} />
			<MovieCategory title='Tài liệu' fetchFn={getDocumentariesList} />
		</>
	)
}
