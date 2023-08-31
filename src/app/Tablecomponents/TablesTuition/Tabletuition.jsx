import BachelorsTuition from "./Bachelors/BachelorsTuition";


const TableTuitions = ((params)=>{
    const {colorBtn} = params
    console.log(colorBtn);
    if(colorBtn === "Bachelors"){
        return(
            <div>
              <BachelorsTuition/>
            </div>
        )
    }else if(colorBtn === "Masters"){
        return(
            <div>
               tuition Masters
            </div>
        )
    }
    else if(colorBtn === "Doctors"){
        return(
            <div>
                 tuition Doctors
            </div>
        )
    } else if(colorBtn === "International"){
        return(
            <div>
                tuition International
            </div>
        )
    }else{
        return(
            <div>Error </div>
        )
    }
    
    
})
export default TableTuitions