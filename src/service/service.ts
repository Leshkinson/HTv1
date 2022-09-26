import {videos} from "../repository/videos";
import {ValidationError} from "../error/error";

interface Videos {
    id: number,
    title: string,
    author: string,
    canBeDownloaded: boolean,
    minAgeRestriction: null,
    createdAt: string,
    publicationDate: string,
    availableResolutions: string[]
}

export class VideoServices {

    static testing() {
        const data = videos
        data.length = 0
        return data
    }

    static get() {
        return videos
    }

    static create(title: string, author: string) {
        const newVideo: Videos = {
            id: +(new Date),
            title: title.trim(),
            author: author.trim(),
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: (new Date).toISOString(),
            publicationDate: (new Date).toISOString(),
            availableResolutions: [
                "P144"
            ]
        }
        if (newVideo.title.length > 40 || newVideo.title === '') throw ValidationError.BadRequest('Title long!','title');
        if (newVideo.author.length > 20 || newVideo.author === '') throw ValidationError.BadRequest('Author long!', 'author');
        videos.push(newVideo)
        return newVideo
    }

    static find(id: string | number) {
        const video = videos.find(video => video.id === id)
        if (!video) throw ValidationError.BadRequest('there is no video with this id', 'id' );
        return video
    }

    static update (id: string | number, title: string, author: string) {
        const updateVideo: Videos = this.find(id)
        if (updateVideo) {
            updateVideo.title = title.trim()
            if (updateVideo.title.length > 40 || updateVideo.author === '') throw ValidationError.BadRequest('Title long!','title');
            // @ts-ignore
            updateVideo.author = author.trim()
            if (updateVideo.author.length > 20 || updateVideo.author === '') throw ValidationError.BadRequest('Author long!', 'author');
            // @ts-ignore
            updateVideo.publicationDate = (new Date).toISOString()
            return updateVideo
        }
    }

    static delete (id: string | number) {
        const deleteVideo = this.find(id)
        if (deleteVideo) {
            const index = videos.indexOf(deleteVideo)
            videos.splice(index, 1)
        }
    }


}
