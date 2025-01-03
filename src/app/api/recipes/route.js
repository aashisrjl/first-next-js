import { recipes } from "../../../db/schema"
import {db} from "../../../db/db"


export async function POST(req){
    
        const {name, description, subname} = await req.json()
    //check for empty values
    if(!name || !description){
        Response.json({
            status: 400,
            message: "Please fill in all fields"
        })
    }
    console.log(name,description,subname)
    
    //insert into database
    try {
    await db.insert(recipes).values({
        name,
        description,
        subname
    })
    
    return Response.json({
        message: "Recipe created successfully"

    })
        
    } catch (error) {
        return Response.json({
            message: error.message,
            error: "error"
        })
    }
}

export async function GET(){
   const data = await  db.select().from(recipes)
    return Response.json({
        status: 200,
        message: "recipe fetches successfylly",
        data
    })
}


export async function DELETE(){
    const {id} = req.params
    const userId = req.userId
    await recipes.findByIdAndDelete(is,{
        where:{
            userId
        }
    })
    Response.json({
        status: 200,
        message:"recipe deleted successfully"
    })
}

export async function PATCH(){

}

