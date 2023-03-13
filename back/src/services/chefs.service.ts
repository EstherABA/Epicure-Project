import { chefModel } from "../model/chefs.model";

export const getChefs = async() => {
    console.log(" chefs services connected");
    
    try {
      const chefs = await chefModel.find();
      return chefs
    }
    catch(err){
      console.log(err);
      throw err;
    }
  };