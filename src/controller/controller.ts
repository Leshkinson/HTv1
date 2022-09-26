import {Request, Response, NextFunction} from "express";
import {VideoServices} from "../service/service";


export class VideoController {
    public getAllVideos(req: Request, res: Response) {
        try {
            const videos = VideoServices.get()
            res.status(200).json(videos)
        } catch (e) {
            console.log(e)
        }
    }

    public createVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const newVideo = VideoServices.create(req.body.title, req.body.title)
            res.status(201).send(newVideo)
        } catch (e) {
            next(e)
        }
    }

    public getVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const video = VideoServices.find(+req.params.id);
            return  res.status(200).json(video)
        } catch (e) {
            next(e)
        }
    }

    public updateVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const updateVideo = VideoServices.find(+req.params.id)
            if (updateVideo) {
                VideoServices.update(+req.params.id, req.body.title, req.body.title )
                return res.status(200).send(updateVideo)
            }
            res.sendStatus(404)
        } catch (e) {
            next(e)
        }
    }

    public deleteVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const deleteVideo = VideoServices.find(+req.params.id)
            if (deleteVideo) {
                VideoServices.delete(+req.params.id)
                return res.sendStatus(204)
            }
            return res.sendStatus(404)
        } catch (e) {
            next(e)
        }
    }
}

