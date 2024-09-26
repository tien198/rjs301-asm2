import React, { useContext } from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';
import MovieList from '../../components/layout/MovieList';
import { MovieListListContext, MovieListProvider } from '../../store/movies-list-context';
import { generateImgUrl_Origin, getOriginalList } from '../../ulti/http';
import { BannerInfo } from '../../models/BannerInfo';
import { useFetchMovieListWithContext } from '../../hooks/useFetchMovieList';
import { ActionMoviesCategory, ComedyMoviesCategory, DocumentariesCategory, HorrorMoviesCategory, RomanceMoviesCategory, TopRatedCategory, TrendingCategory } from '../../components/layout/BrowseCategory';

// store inital info (description) to expand when user click on '...'
const globleBannerInfo = new BannerInfo()

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
	const { list: originalList } = useFetchMovieListWithContext(getOriginalList, MovieListListContext)

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
	const { list: originalList } = useContext(MovieListListContext)

	return (
		<>
			<MovieList list={originalList} landScape={false} />
			<TrendingCategory />
			<TopRatedCategory />
			<ActionMoviesCategory />
			<ComedyMoviesCategory />
			<HorrorMoviesCategory />
			<RomanceMoviesCategory />
			<DocumentariesCategory />
		</>
	)
}

// <internal custom hooks> ---------------------------------------
// bannerInfo is get random from (based on) 'originalList'  
function useGetBannerInfo(originalList) {
	let bannerInfo
	function randomIndex(length) {
		return Math.floor(Math.random() * length - 1)
	}
	// collape to '...' if description is too long
	function sliceDescription(description) {

		if (description.length > 130)
			return description.slice(0, 130) + ' ...'
		else
			return description
	}
	if (originalList.length > 0) {
		const { backdrop_path = '',
			name = '',
			overview = ''
		} = originalList[randomIndex(originalList.length)]

		const imgUrl = generateImgUrl_Origin(backdrop_path)
		globleBannerInfo.init(imgUrl, name, overview)
		const description = sliceDescription(overview)

		bannerInfo = { ...globleBannerInfo, description: description }
	}

	return {
		bannerInfo
	}
}

