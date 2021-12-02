import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storageRef } from "../public/firebase/initFirebase";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload(file, fileList) {
    const fileRef = ref(storageRef, file.name);
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(fileRef).then((url) => console.log({ url }));
      console.log({ snapshot });
    });
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const upload = () => {
  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </>
  );
};

export default upload;
