import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({
  isOpen,
  onRequestClose,
  imageUrl,
  author,
  description,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // Закривається при натисканні на Esc або за межі модалки
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1500",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          zIndex: "2000",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px", // Без відступів для зображення
          border: "1px solid black",
          maxWidth: "90vw",
          maxHeight: "90vh",
        },
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={imageUrl}
          alt="large preview"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            marginBottom: "20px",
            objectFit: "contain",
          }}
        />
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Author: {author}
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
            padding: "0 20px",
          }}
        >
          Description: {description}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
