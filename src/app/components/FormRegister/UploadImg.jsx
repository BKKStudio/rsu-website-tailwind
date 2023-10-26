"use client";
//Upload Img On clound
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@uploadthing/react";
import  {utapi}  from "../../api/server/uploadthing.js";
import { ourFileRouter } from "../../api/uploadthing/core";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";

export default function UploadImg() {
  //Upload Img On clound
  const [Images, setImages] = useState([]);

  const imgList = (
    <>
     <ul>
        {Images.map((Img) => (
          <li key={Img.fileKey} className="mt-2 flex justify-between border p-1">
            <span
              target="_blank"
              className="flex items-center text-xs text-blue-400"
            >
              {Img.fileName}
            </span>
            <button><BsXLg size={20} color={"red"}/></button>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <>
      <div className="flex justify-center">
        <div className="grid  w-full max-md:grid-cols-1 mx-3">
          <div className="">
            <label>
              รูปภาพ
              <span className="text-gray-400 text-xs">(ขนาด 2 นิ้ว)</span>
            </label>
            <div className={`  ${Images.length === 0 ? "flex justify-center" : "hidden"}`}>
              <UploadDropzone
              className="max-w-5xl w-full"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res) {
                    // Do something with the response
                    setImages(res);
                    const json = JSON.stringify(res);
                    console.log("Files: ", json);
                  }
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              ></UploadDropzone>
            </div>
          </div>
          <div className="mx-2">
            <div className={`mt-2  p-2 ${Images.length === 0 ? " hidden " : "border"}`}>{imgList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
