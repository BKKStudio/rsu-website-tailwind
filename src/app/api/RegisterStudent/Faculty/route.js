import ConnectDb from "@/dbconfig/dbConfig";
import FacultysRegisters from "@/Models/FacultySchma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await ConnectDb();
    const FacultyList = await FacultysRegisters.find()
    return NextResponse.json(FacultyList);
}