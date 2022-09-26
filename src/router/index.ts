import {Router} from "express";
import {VideoController} from "../controller/controller";
export const router = Router();



router.delete('testing/all-data', VideoController.testingDelete)

router.get('/videos', VideoController.getAllVideos)
    .post('/videos', VideoController.createVideo);

router.get('/videos/:id', VideoController.getVideo)
    .put('/videos/:id', VideoController.updateVideo)
    .delete('/videos/:id', VideoController.deleteVideo);
