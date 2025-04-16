import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// Log environment variables for debugging (remove in production)
console.log("UploadThing Environment:", {
  hasToken: !!process.env.UPLOADTHING_TOKEN,
  hasSecret: !!process.env.UPLOADTHING_SECRET,
});

export const ourFileRouter = {
  drawingsUploader: f({ pdf: { maxFileSize: "4MB" }, image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      // Check for both token and secret
      if (!process.env.UPLOADTHING_TOKEN && !process.env.UPLOADTHING_SECRET) {
        throw new Error("Missing UploadThing credentials. Please check your environment variables.");
      }
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for file:", file.name);
      return { uploadedBy: "user" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 