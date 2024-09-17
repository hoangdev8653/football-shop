import React from "react";
import generateInvoicePDF from "./generateInvoicePDF";

const InvoiceApp = () => {
  const handleGeneratePDF = () => {
    const invoiceData = {
      number: "12345",
      date: "16/06/2025",
      customerName: "Trịnh Thanh Huyền",
      customerPhone: "+84 912 345 678",
      customerAddress: "123 Đường ABC, Thành phố DEF",
      products: [
        { name: "Đột huấn luyện cơ bụng 30 ngày", qty: 1, price: 3000000 },
        { name: "Tạ bình với DKY - Trọng lượng 9 kg", qty: 2, price: 3000000 },
        {
          name: "Tạ bình với DKY - Trọng lượng 4.5 kg",
          qty: 1,
          price: 3000000,
        },
      ],
      total: 12000000,
      bankName: "Ngân hàng Bình An",
      accountName: "Công ty Cổng Vàng",
      accountNumber: "123456789",
      paymentDue: "05/07/2025",
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
