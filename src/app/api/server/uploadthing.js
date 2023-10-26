import { UTApi } from "uploadthing/server";

export const utapi = new UTApi({
  fetch: globalThis.fetch, // Assuming globalThis.fetch is available for your needs
  apiKey: process.env.UPLOADTHING_SECRET // Replace with your actual secret key
});