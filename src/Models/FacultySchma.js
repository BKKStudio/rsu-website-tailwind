import mongoose  from "mongoose";


const FacultysSchema = new mongoose.Schema(
    {
        FacultyName:{
            type:String,
            required:[true,"Please provide a Faculty"],
        },
        Majors:{
        type:Array,
      }

    })
    const  FacultysRegisters = mongoose.models.Faculties || mongoose.model("Faculties",FacultysSchema)
    export default FacultysRegisters;