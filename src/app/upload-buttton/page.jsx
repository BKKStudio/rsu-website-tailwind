"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";
import { ourFileRouter } from "../api/uploadthing/core";
import { useState } from "react";
import Link from "next/link";

export default function UploadButtonPage() {
  const [Images, setImages] = useState([]);
  const imgList = (
    <>
      <ul>
        {Images.map((Img) => (
          <li key={Img.fileUrl} className="mt-2">
            <Link href={Img.fileUrl} target="_blank">
              {Img.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            // Do something with the response
            setImages(res)
            const json = JSON.stringify(res)
            console.log("Files: ", json);
          }
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}
