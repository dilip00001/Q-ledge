import QuizCreation from "@/components/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props={
    searchParams:{
        topic:string;
    }
};

export const metadata={
    title:'Quiz | Qledge',
}

const Quizpage =async({searchParams}:Props)=>{

    const session =await getAuthSession();
    if(!session?.user){
        return redirect("/");
    }
    return(
         <div>
           <QuizCreation topicParams={searchParams.topic ?? ""} />
         </div>

    );
}

export default Quizpage;