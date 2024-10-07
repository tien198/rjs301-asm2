import { useRef } from 'react';
import { BannerInfo } from '../../../models/BannerInfo';
import { generateImgUrl_Origin } from '../../../ulti/http';


// store inital info (description) to expand when user click on '...'
const globleBannerInfo = new BannerInfo()

// bannerInfo is get random from (based on) 'originalList'  
export function useGetBannerInfo(originalList) {
    const infor = useRef()

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
    if (originalList.length > 0 && !infor.current) {
        const { backdrop_path = '',
            name = '',
            overview = ''
        } = originalList[randomIndex(originalList.length)]

        const imgUrl = generateImgUrl_Origin(backdrop_path)
        globleBannerInfo.init(imgUrl, name, overview)
        const description = sliceDescription(overview)

        infor.current = { ...globleBannerInfo, description: description }
    }
    const bannerInfo = infor.current
    return {
        bannerInfo
    }
}
