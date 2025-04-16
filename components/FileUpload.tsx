"use client";

import { useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { UploadCloud } from "lucide-react";

interface FileUploadProps {
  onUploadComplete: (url: string) => void;
  onUploadError: (error: Error) => void;
}

export function FileUpload({ onUploadComplete, onUploadError }: FileUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<{ url: string; name: string } | null>(null);
  const { toast } = useToast();
  const { startUpload, isUploading } = useUploadThing("drawingsUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        setUploadedFile(res[0]);
        onUploadComplete(res[0].url);
        toast({
          title: "Upload successful",
          description: "Your file has been uploaded successfully.",
        });
      }
    },
    onUploadError: (error) => {
      onUploadError(error);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleRemoveFile = () => {
    setUploadedFile(null);
    onUploadComplete("");
  };

  return (
    <div className="w-full">
      {uploadedFile ? (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{uploadedFile.name}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemoveFile}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-burgundy-500 transition-colors"
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".pdf,.jpg,.jpeg,.png";
            input.onchange = async (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) {
                await startUpload([file]);
              }
            };
            input.click();
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <UploadCloud className="h-8 w-8 text-muted-foreground" />
            <div className="text-sm text-muted-foreground">
              {isUploading ? (
                <span>Uploading...</span>
              ) : (
                <>
                  <span className="font-medium text-foreground">Click to upload</span> or drag and drop
                  <br />
                  <span className="text-xs">PDF, JPG, PNG (max 4MB)</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 