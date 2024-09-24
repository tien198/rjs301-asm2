import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';
import MovieList from '../../components/layout/MovieList';
import { OriginalListProvider } from '../../store/original-list-context';
import { generateImgUrl_Origin, getOriginalList } from '../../ulti/http';
import { BannerInfo } from '../../models/BannerInfo';
import useFetchMovieList from '../../hooks/useFetchMovieList';

// store inital info (description) to expand when user click on '...'
const globleBannerInfo = new BannerInfo()

export default function Browse() {
	const { list: originalList } = useFetchMovieList([], getOriginalList)

	// <internal custom hooks>
	// bannerInfo is get random from (based on) 'originalList'  
	const { bannerInfo } = useGetBannerInfo(originalList)

	return (
		<>
			<Navbar />
			<ContextAggregate>
				<Banner {...bannerInfo} />
				<BodyPage />
				<div className='h-screen bg-zinc-900 opacity-80'></div>
				<div className='h-screen bg-zinc-900 opacity-80'></div>
			</ContextAggregate>
		</>
	);
}

// <internal custom hooks> ---------------------------------------
// bannerInfo is get random from (based on) 'originalList'  
function useGetBannerInfo(originalList) {
	const [bannerInfo, setBannerInfo] = useState({})
	useEffect(() => {
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
			const { backdrop_path, name, overview } =
				originalList[randomIndex(originalList.length)]

			const imgUrl = generateImgUrl_Origin(backdrop_path)
			globleBannerInfo.init(imgUrl, name, overview)
			const description = sliceDescription(overview)

			setBannerInfo({ ...globleBannerInfo, description: description })
		}
	}, [originalList])

	return {
		bannerInfo, setBannerInfo
	}
}

// <internal components> ---------------------------------------

function ContextAggregate({ children }) {
	return (
		<OriginalListProvider>
			{children}
		</OriginalListProvider>
	)
}

function BodyPage() {
	return (
		<>
			<MovieList />
		</>
	)
}