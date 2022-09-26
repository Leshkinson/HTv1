import {Router} from "express";
import {VideoController} from "../controller/controller";
export const router = Router();

const videoController = new VideoController();

router.get('/videos', videoController.getAllVideos)
    .post('/videos', videoController.createVideo);

router.get('/videos/:id', videoController.getVideo.bind(videoController))
    .put('/videos/:id', videoController.updateVideo.bind(videoController))
    .delete('/videos/:id', videoController.deleteVideo.bind(videoController));
