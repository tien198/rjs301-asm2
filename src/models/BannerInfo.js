export class BannerInfo {
    constructor(imgSrc, title, description) {
        this.imgSrc = imgSrc || ''
        this.title = title || ''
        this.description = description || ''
    }

    init(imgSrc, title, description) {
        this.imgSrc = imgSrc
        this.title = title
        this.description = description
    }
}