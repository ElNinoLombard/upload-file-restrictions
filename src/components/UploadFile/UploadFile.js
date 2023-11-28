import React, { useState } from "react";
import "./UploadFile.css";

const UploadFile = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const MAX_SIZE_FILE_BYTES = 50000000;
  const MAX_NUMBER_OF_FILES = 5;

  const onFileSelected = (event) => {
    const files = event.target.files;
    if (files) {
      if (uploadedFiles.length + files.length > MAX_NUMBER_OF_FILES) {
        alert("You cannot upload more than 5 files.");
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (
          file &&
          file.size <= MAX_SIZE_FILE_BYTES &&
          (file.type === "application/pdf" ||
            file.type === "image/png" ||
            file.type === "image/jpeg")
        ) {
          setUploadedFiles((prevFiles) => [...prevFiles, file]);
        } else {
          alert("Unsupported file type. Only PDF, PNG, and JPEG are accepted.");
        }
      }
    } else {
      alert("File too large.");
    }
  };

  const deleteFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className="">
      <div className="upload-wrapper">
        <input
          type="file"
          onChange={onFileSelected}
          multiple
          accept=".pdf, .png, .jpeg, .jpg"
        />
        <div className="file-list">
          {uploadedFiles.map((file, index) => (
            <div className="single-file" key={index}>
              <p className="file__name">{file.name}</p>
              <button
                className="delete-button"
                onClick={() => deleteFile(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
