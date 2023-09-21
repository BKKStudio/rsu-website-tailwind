import BachelorsTuition from "./Bachelors/BachelorsTuition";
import DoctorsAllresponsive from "./Doctors/DoctorsAllresponsive";
import InternationalAllresponsive from "./International/InternationalAllresponsive";
import MastersTuition from "./Masters/MastersTuition";


const TableTuitions = ((params)=>{
    const {colorBtn} = params
    if(colorBtn === "Bachelors"){
        return(
            <div>
              <BachelorsTuition/>
            </div>
        )
    }else if(colorBtn === "Masters"){
        return(
            <div>
               <MastersTuition/>
            </div>
        )
    }
    else if(colorBtn === "Doctors"){
        return(
            <div>
                 <DoctorsAllresponsive/>
            </div>
        )
    } else if(colorBtn === "International"){
        return(
            <div>
                <InternationalAllresponsive/>
            </div>
        )
    }else{
        return(
            <div>Error </div>
        )
    }
    
    
})
export default TableTuitions