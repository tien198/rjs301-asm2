import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Banner from '../../components/layout/Banner';
import MovieList from '../../components/layout/MovieList';
import { OriginalListProvider } from '../../store/original-list-context';
import { generateImgUrl_Origin, getOriginalList } from '../../ulti/http';
import { BannerInfo } from '../../models/BannerInfo';

const bannerInfo = new BannerInfo()

export default function Browse() {
	const [originalList, setOriginalList] = useState([])
	const [bannerInfor, setBannerInfor] = useState({})
	useEffect(() => {
		(async function () {
			const list = (await getOriginalList())['results']
			setOriginalList(list)
		})()
	}, [])

	useEffect(() => {
		function randomIndex(length) {
			return Math.floor(Math.random() * length - 1)
		}
		console.log(originalList);

		if (originalList.length > 0) {
			const { backdrop_path, name, overview } =
				originalList[randomIndex(originalList.length)]
			// const info = new BannerInfo()
			const imgUrl = generateImgUrl_Origin(backdrop_path)
			bannerInfo.init(imgUrl, name, overview)
			let description = ''
			if (bannerInfo.length > 130)
				description = bannerInfo.description.slice(0, 130) + ' ...'
			else
				description = bannerInfo.description

			setBannerInfor({ ...bannerInfo, description: description })
		}
	}, [originalList])
	return (
		<>
			<Navbar />
			<ContextAggregate>
				<Banner {...bannerInfor} />
				<BodyPage />
				<div className='h-screen bg-zinc-900 opacity-80'></div>
				<div className='h-screen bg-zinc-900 opacity-80'></div>
			</ContextAggregate>
		</>
	);
}

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