

// Read and Insert data

import Users from "../../../models/Users"
import dbConnect from "../../../utils/dbConnect"

export default async function handler(req,res){
    const {method} = req

    // Db connect
    dbConnect()

    // Get method for read data from mongodb
    if(method === "GET"){
        try{

            const users = await Users.find()
            res.status(200).json(users)

        }catch(err){
            res.status(500).json(err)
        }
    }

    // POST method for insert into mongodb
    if(method === "POST"){
        try{

            const user = await Users.create(req.body)
            res.status(201).json(user)

        }catch(err){
            res.status(500).json(err)
        }
    }
}

