import AsideMenu from "@/components/Aside-menu";
import Main from "@/components/Main";
import Title from "@/components/HeaderTitle";

export default function Home() {
  return (
<main className="h-screen w-screen max-h-screen">
    
    <main className="bg-gradient-to-tl from-gray-200 to-slate-900 flex flex-row">
    <AsideMenu/>
    <Main/>
    </main>
</main>
  );
}
