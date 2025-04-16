import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  drawingsUploader: f({ pdf: { maxFileSize: "4MB" }, image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      if (!process.env.UPLOADTHING_TOKEN) {
        throw new Error("Missing UPLOADTHING_TOKEN");
      }
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for file:", file.name);
      return { uploadedBy: "user" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 