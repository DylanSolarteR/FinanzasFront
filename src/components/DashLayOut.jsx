import NavSide from "./navside";

export default function DashLayOut({children}){
    return(
        <div className="flex justify-between w-screen h-screen">
            <NavSide/>
            <div className="mx-auto my-8">
            {children}
            </div>
        </div>
    )
}