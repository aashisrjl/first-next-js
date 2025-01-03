"use client"
import Image from "next/image";
import Card from "./components/Card";
import axios from "axios";
import { useEffect } from "react";


export default function Home() {
//   "postgresql://postgres.iiansnfbqzkvkrwcbozm:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
// nextjsproject
const fetchRecipes =  async()=>{
  const response = await axios.get("http://localhost:3000/api/recipes");
  console.log(response)
}
useEffect(()=>{
  fetchRecipes() 
},[])

  return (
    <>
   <div className="flex flex-wrap justify-center">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
   </div>
   </>
  );
}