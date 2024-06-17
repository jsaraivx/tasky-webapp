import UserProfile from "@/components/UserProfile";

export default function AsideMenu(){
    return(
    <aside className=" flex-col p-2.5 bg-purple-950  text-gray-100 h-screen max-w-60">
       <UserProfile/>
       <h1 className="text-2xl">This is a Tasky.</h1>
       <br/>
       
       <div className="bg-slate-600"> 
       
       <div className="inline-block">
            
            <a href="">To do today</a>
       </div>

       </div>
    </aside>
    )
}
