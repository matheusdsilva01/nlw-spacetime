"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

import { api } from "@/lib/api";
import Cookie from "js-cookie";
import { Camera } from "lucide-react";

import MediaPicker from "./MediaPicker";

const NewMemoryForm = () => {
  const router = useRouter();
  const token = Cookie.get("token");
  console.log(token);
  const handleCreateMemory = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fileToUpload = formData.get("coverUrl");
    let coverUrl = "";

    if (fileToUpload) {
      const uploadFormData = new FormData();
      uploadFormData.set("file", fileToUpload);
      const uploadResponse = await api.post("/upload", uploadFormData);
      coverUrl = uploadResponse.data.fileURL;
    }

    await api.post(
      "/memories",
      {
        coverUrl,
        content: formData.get("content"),
        isPublic: formData.get("isPublic")
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    router.push("/");
  };

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar midia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:ring-purple-400"
          />
          Tornar memória pública
        </label>
      </div>

      <MediaPicker />
      <textarea
        name="content"
        spellCheck="false"
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-zinc-400"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-all hover:bg-green-600 hover:shadow-[1px_2px_6px_1px] hover:shadow-green-600/50"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
};

export default NewMemoryForm;