import ConnectDb from "@/dbconfig/dbConfig";
import BachelorsRegister from "@/Models/BachelorsSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  await ConnectDb();
  try {
    const reqBody = await req.json();
    const {
      Faculty,
      Major,
      idcard,
      birthday,
      firstname,
      lastname,
      email,
      tell,
      level,
      DateRegister,
      confirmed,
    } = reqBody;
    console.log(reqBody);

if(confirmed === false){
      //check if user already exists
      const user = await BachelorsRegister.findOne({idcard});
      if (user) {
        return NextResponse.json(
          {  message: "Student already exists" },
          { status: 400 }
        );
      } else if (!user) {
        return NextResponse.json({
          message: "Can Register",
          confirmed:!confirmed,
        });
      }
}else if(confirmed === true){
  const newStudent = new BachelorsRegister({
    Faculty,
    Major,  
    idcard,
    birthday,
    firstname,
    lastname,
    email,
    tell,
    level,
    DateRegister,
  })
  const savedStudent = await newStudent.save();
  console.log(savedStudent);
  return NextResponse.json({
    message: "Register successfully",
    savedStudent,
  })
  
}
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
