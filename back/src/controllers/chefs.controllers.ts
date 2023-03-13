import express, { Request, Response } from "express";
import {getChefs} from '../services/chefs.service';


export const getAllChefs = async (req: Request, res: Response) => {
    console.log("chefs controller connected");
    
    try {
        const _chefs = await getChefs();
        return res
        .status(200)
        .json(_chefs)
    } catch (err) {
        console.log(err);
        throw err;
    }
}