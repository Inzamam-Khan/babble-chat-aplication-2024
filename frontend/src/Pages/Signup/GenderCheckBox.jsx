export const GenderCheckBox=({handleGender,selectedGender})=>{
    return(
       <div className="flex">
        <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer `}>
                <span className="label-text">Male</span>
                <input type="radio" className="radio border-slate-900" onChange={()=>{handleGender("male")}} checked={selectedGender==="male"}/>
            </label>
        </div>

        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="radio" className="radio border-slate-900" onChange={()=>{handleGender("female")}} checked={selectedGender==="female"}/>
            </label>
        </div>


        <div className=""></div>
       </div>
    )
}