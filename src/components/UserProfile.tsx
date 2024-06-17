export default function UserProfile(){
    return(
        <div className="inline-flex gap-4 items-center p-2 mb-5" >
            <img className="w-10 fill-slate-50 filter: invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" />
            
            <div id="label-divs" className="text-sm flex-row">
            <label id="firstNameUser" className="" ><strong>User Example</strong></label>
            <br />
            <label htmlFor="">Spaces</label>

            </div>
        </div>
    )
}