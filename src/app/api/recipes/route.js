export async function POST(){
    const {name,description,subname} = req.body
    //check for empty values
    if(!name || !description){
        Response.json({
            status: 400,
            message: "Please fill in all fields"
        })
    }
    
    //insert into database
    const data = await recipes.create({
        name,
        description,
        subname
    })
    Response.json({
        message: "Recipe created successfully",
        data

    })
}

export async function POST(){
    const data = await findAll();
    Response.json({
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

