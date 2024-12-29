import Image from "next/image";
import Card from "./components/Card";


export default function Home() {
//   "postgresql://postgres.iiansnfbqzkvkrwcbozm:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
// nextjsproject
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