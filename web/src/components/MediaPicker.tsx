"use client";

import { ChangeEvent, useState } from "react";

const MediaPicker = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files || !files.length) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  };

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="hidden"
      />
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="preview image to create memorie"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  );
};

export default MediaPicker;
