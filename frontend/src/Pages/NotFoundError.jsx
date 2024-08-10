import { BiSolidError } from "react-icons/bi";

export const NotFoundError=()=>{
    return(
         <div className="flex justify-center items-center w-screen h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <div className="px-4 text-center sm:text-lg md:text-6xl text-blue-500 font-semibold flex flex-col items-center gap-3">
                <p>Sorry!! 404</p>
                <p>No page Found Error!!</p>
                <BiSolidError className="text-3xl md:text-6xl text-center text-red-500"/>

                
            </div>
        </div>
    )

}