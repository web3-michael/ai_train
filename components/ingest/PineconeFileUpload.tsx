import React, { useCallback, useState } from "react"
import { Document } from "langchain/document"
import { File } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export type Message = {
  type: "apiMessage" | "userMessage"
  message: string
  isStreaming?: boolean
  sourceDocs?: Document[]
}

export function PineconeFileUpload({ namespace }) {
  const [files, setFiles] = useState(null)

  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])

  const handleUpload = useCallback(async () => {
    const formData = new FormData()
    Array.from(files).forEach((file: File) => {
      formData.append("file", file)
    })

    setIsUploading(true)
    await fetch("/api/pinecone-ingest-file", {
      method: "post",
      body: formData,
      headers: {
        namespace: !!namespace ? namespace : "default-namespace",
      },
    })
    setIsUploading(false)
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      // "application/json": [".json"],
      // "text/plain": [".txt", ".md"],
    },
    multiple: false,
    maxFiles: 1,
  })

  return (
    <div className="flex h-48 flex-col items-center">
      <div
        className={cn(
          "min-w-[300px] cursor-pointer  p-6 text-mauve-12  ",
          " input-shadow rounded-lg  !outline-none",
          "relative border border-black/5 bg-white px-7  text-base shadow-black/5  placeholder:text-neutral-400 ",
          " dark:bg-neutral-950/50 dark:focus:bg-neutral-950/60 dark:text-neutral-200 dark:shadow-black/10 dark:placeholder:text-neutral-500"
        )}
        {...getRootProps()}
      >
        <div className=" flex items-center justify-center">
          {files ? (
            <p>{files[0].name}</p>
          ) : (
            <div className="flex flex-col items-center justify-center ">
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p className="px-6">Drag and drop pdf file here</p>
              )}
            </div>
          )}
        </div>
        <div className="flex  cursor-pointer items-center justify-center ">
          <File className="mt-3 h-8 w-8 stroke-mauve-8" />
          <input {...getInputProps()} className="h-full" />
        </div>
      </div>

      <LoadingButton
        loading={isUploading}
        handleSubmit={handleUpload}
        disabled={!files || isUploading}
      />
    </div>
  )
}

function LoadingButton({ loading, handleSubmit, disabled }) {
  return (
    <Button
      disabled={disabled}
      className=" mt-auto bg-neutral-300/70 px-16 py-3.5 hover:bg-neutral-400/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-750/50"
      variant="ghost"
      onClick={handleSubmit}
    >
      {!loading ? (
        <Icons.upload className="mr-2 h-4 w-4" />
      ) : (
        <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
      )}
      Scrape
    </Button>
  )
}
