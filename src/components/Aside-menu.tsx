import UserProfile from "@/components/UserProfile";

export default function AsideMenu(){
    return(
    <aside className=" flex-col p-2.5 bg-zinc-900/80  text-gray-100 h-screen w-64 ">
       <UserProfile/>
       <br/>
       
       <div className="bg-slate-600 text-sm"> 
       
       <div className="inline-block">
            
            <a href="">To do today</a>
       </div>

       </div>
    </aside>
    )
}
