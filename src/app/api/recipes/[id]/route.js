import { eq } from "drizzle-orm"
import { db } from "../../../../db/db"
import { recipes } from "../../../../db/schema"

export async function GET(req,p){
    const id = Number(p.params.id)
   try {
    const [data] = await db.select().from(recipes).where(eq(recipes.id,id))
    if(!data){
        return Response.json({
            message: "no data found for this user"
        },{status:400})
    }
    return Response.json({
        message: "fetch success",
        data
    })
   } catch (error) {
    return Response.json({
        message: error.message,
        id
   })
}
}

export async function DELETE(req,p){
    const id = Number(p.params.id)
    try {
        const data= await db.select().from(recipes).where(eq(recipes.id,id))
        if(data.length == 0){
            return Response.json({
                message: "no data found for this user"
            },{status:400})
        }else{
         await db.delete(recipes).where(eq(recipes.id,id))
        return Response.json({
            message: "deleted successfully"
        },{status:200})
    }
        
    } catch (error) {
        return Response.json({
            message: error.message
        },{status:500})
        
    }
}