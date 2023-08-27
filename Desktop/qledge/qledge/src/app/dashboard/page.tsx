import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import {redirect} from "next/navigation";
import HistoryCard from "@/components/dashboard/HistoryCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TrendingTopics from "@/components/dashboard/TrendingTopics";
import Quizme from "@/components/dashboard/QuizMeCard";
type Props={}

export const metadata = {
    title: "Dashboard | Qledge",
    description: "Quiz yourself on anything!",
};

const Dashboard =async(props:Props)=>{

const session=await getAuthSession()
if(!session?.user){
   return redirect("/");
}
    return(
        <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* <DetailsDialog /> */}
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
         <Quizme />
         <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <TrendingTopics />
        <RecentActivity />
      </div>
    </main>
    )


}
  

export default Dashboard;