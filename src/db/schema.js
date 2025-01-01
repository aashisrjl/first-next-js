import { sql } from "drizzle-orm";
import  {pgTable, timestamp,serial, varchar, text} from "drizzle-orm/pg-core";


export const recipes =  pgTable("recipes",{
    id: serial("id").primaryKey(),
    name : varchar("name",{length:50}).notNull().unique(),
    description: text("description").notNull(),
    subname: varchar("subname",{length:50}),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
    updatedAt : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)

})        

// export const user = pgTable("user",{
//     id: serial("id").primaryKey(),
//     username: text("username").notNull(),
//     email: text("email").unique().notNull(),
//     password: text("password").notNull()
// })


