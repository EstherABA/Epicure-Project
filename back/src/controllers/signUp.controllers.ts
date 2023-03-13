import express, { Request, Response } from "express";
import {getDishes} from '../services/dishes.services';


export const addUsers = async (req: Request, res: Response) => {
    console.log("users controller connected");
    
    try {
        const _dishes = await addUser();
        return res
        .status(200)
        .json(_dishes)
    } catch (err) {
        console.log(err);
        throw err;
    }
}