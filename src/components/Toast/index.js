import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ToastMessage() {
  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={2500} />
    </>
  );
}

export default ToastMessage;
