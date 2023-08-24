import BachelorsTable from "./Bachelors";
import MastersTable from "./Masters";

const Tables = ((params)=>{
    const {colorBtn} = params
    console.log(colorBtn);
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
            <div>Doctors</div>
        )
    } else if(colorBtn === "International"){
        return(
            <div>International</div>
        )
    }else{
        return(
            <div>Error </div>
        )
    }
    
    
})
export default Tables