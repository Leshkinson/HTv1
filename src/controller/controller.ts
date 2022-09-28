import {Request, Response, NextFunction} from "express";
import {VideoServices} from "../service/service";


export class VideoController {
    static testingDelete(req: Request, res: Response) {
        try {
            return res.sendStatus(204)
        } catch (e) {
            console.log(e)
        }
    }

    static getAllVideos(req: Request, res: Response) {
        try {
            const videos = VideoServices.get()
            res.status(200).json(videos)
        } catch (e) {
            console.log(e)
        }
    }

    static createVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const newVideo = VideoServices.create(req.body.title, req.body.title)
            res.status(201).json(newVideo)
        } catch (e) {
            next(e)
        }
    }

    static getVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const video = VideoServices.find(+req.params.id);
            return  res.status(200).json(video)
        } catch (e) {
            next(e)
        }
    }

    static updateVideo(req: Request, res: Response, next: NextFunction) {
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

    static deleteVideo(req: Request, res: Response, next: NextFunction) {
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

