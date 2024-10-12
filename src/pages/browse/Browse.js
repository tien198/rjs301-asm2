import React, { useContext } from 'react';
import Banner from '../../components/layout/Banner';
import { MovieCategory, MovieList, MovieListContainer } from '../../components/layout/MovieComponents';
import { MovieListContext, MovieListProvider } from '../../store/movies-list-context';
import { getActionMoviesList, getComedyMoviesList, getDocumentariesList, getHorrorMoviesList, getOriginalList, getRomanceMoviesList, getTopRatedList, getTrendingList } from '../../ulti/http';
import { useFetchMovieListWithContext } from '../../hooks/useFetchMovieList';
import { useGetBannerInfo } from '../../components/layout/hooks/useGetBannerInfo';


export default function Browse() {

	return (
		<>
			<BannerProvider />
			<CategoriesGallery />
		</>
	);
}

// <internal components> ---------------------------------------
function BannerProvider() {
	return (
		<MovieListProvider>
			<BannerAndOriginalList />
		</MovieListProvider>
	)
}
function BannerAndOriginalList() {
	const { list: originalList } = useFetchMovieListWithContext(getOriginalList, useContext(MovieListContext))
	// bannerInfo is get random from (based on) 'originalList'  
	const { bannerInfo } = useGetBannerInfo(originalList)
	return (
		<>
			<Banner {...bannerInfo} />
			<MovieListContainer>
				<MovieList landScape={false} />
			</MovieListContainer>
		</>
	)
}

function CategoriesGallery() {
	return (
		<>
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
