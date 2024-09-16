import React from "react";
import generateInvoicePDF from "./generateInvoicePDF";
import jsPDF from "jspdf";

const InvoiceApp = () => {
  const handleGeneratePDF = () => {
    const invoiceData = {
      customer: "John Doe",
      date: "2024-09-16",
      products: [
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 200 },
      ],
      total: 300,
    };

    // Tạo file PDF bằng jsPDF
    const doc = generateInvoicePDF(invoiceData);

    // Tạo Blob từ PDF để mở trong tab mới
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Mở trang mới với file PDF
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleGeneratePDF}>Generate Invoice PDF</button>
    </div>
  );
};

export default InvoiceApp;
