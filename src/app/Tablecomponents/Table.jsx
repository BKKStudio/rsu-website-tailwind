import BachelorsTable from "./Bachelors";
import DoctorsTable from "./Doctors";
import InternationalsTable from "./International";
import MastersTable from "./Masters";

const Tables = ((params)=>{
    const {colorBtn} = params
    if(colorBtn === "Bachelors"){
        return(
            <div>
                <BachelorsTable/>
            </div>
        )
    }else if(colorBtn === "Masters"){
        return(
            <div>
                <MastersTable/>
            </div>
        )
    }
    else if(colorBtn === "Doctors"){
        return(
            <div>
                <DoctorsTable/>
            </div>
        )
    } else if(colorBtn === "International"){
        return(
            <div>
                <InternationalsTable/>
            </div>
        )
    }else{
        return(
            <div>Error </div>
        )
    }
    
    
})
export default Tables