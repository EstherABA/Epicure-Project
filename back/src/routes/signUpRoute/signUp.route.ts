import express from "express";
// import {getAllDishes} from '../../controllers/dishes.controllers'

const router = express.Router();

router.get("/users", getAllDishes)

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;