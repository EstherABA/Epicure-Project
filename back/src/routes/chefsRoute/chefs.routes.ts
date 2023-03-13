import express from "express";
import {getAllChefs} from '../../controllers/chefs.controllers'

const router = express.Router();

router.get("/chefs", getAllChefs)

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;
