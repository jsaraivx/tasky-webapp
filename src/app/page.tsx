import AsideMenu from "@/components/Aside-menu";
import Main from "@/components/Main"
export default function Home() {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-slate-950 to-purple-900 flex-col">
     <AsideMenu/>
     <Main/>
    </main>
  );
}
