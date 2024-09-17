import jsPDF from "jspdf";

// Hàm tạo hóa đơn
const generateInvoicePDF = (invoiceData) => {
  const doc = new jsPDF();

  // Logo và tên công ty
  doc.setFontSize(18);
  doc.text("CÔNG TY CONG VANG", 105, 20, { align: "center" });
  doc.setFontSize(12);
  doc.text("123 ĐUONG ABC, THANH PHO DEF", 105, 28, { align: "center" });

  // Tiêu đề "HÓA ĐƠN"
  doc.setFontSize(16);
  doc.setFont(undefined, "bold");
  doc.text("HOA ĐON", 105, 40, { align: "center" });

  // Thông tin hóa đơn
  doc.setFontSize(12);
  doc.setFont(undefined, "normal");
  doc.text(`Hóa đơn #: ${invoiceData.number}`, 20, 50);
  doc.text(`Ngày: ${invoiceData.date}`, 20, 57);

  // Thông tin khách hàng
  doc.text(`Xuất hóa đơn cho:`, 20, 67);
  doc.text(`${invoiceData.customerName}`, 20, 74);
  doc.text(`SDT: ${invoiceData.customerPhone}`, 20, 81);
  doc.text(`Số ${invoiceData.customerAddress}`, 20, 88);

  // Bảng sản phẩm
  let startY = 100;
  doc.setFontSize(11);
  doc.text("HẠNG MỤC", 20, startY);
  doc.text("SỐ LƯỢNG", 105, startY, { align: "center" });
  doc.text("ĐƠN GIÁ", 140, startY, { align: "right" });
  doc.text("THÀNH TIỀN", 180, startY, { align: "right" });
  doc.setLineWidth(0.5);
  doc.line(20, startY + 2, 190, startY + 2);

  // Dữ liệu sản phẩm
  invoiceData.products.forEach((item, index) => {
    startY += 7;
    doc.text(item.name, 20, startY);
    doc.text(item.qty.toString(), 105, startY, { align: "center" });
    doc.text(`${item.price.toFixed(2)}đ`, 140, startY, { align: "right" });
    doc.text(`${(item.qty * item.price).toFixed(2)}đ`, 180, startY, {
      align: "right",
    });
  });

  startY += 10;
  doc.text("Tổng cộng:", 140, startY, { align: "right" });
  doc.text(`${invoiceData.total.toFixed(2)}đ`, 180, startY, { align: "right" });

  // Thông tin thanh toán
  startY += 10;
  doc.text("Thông tin thanh toán", 20, startY);
  doc.text(`Ngân hàng: ${invoiceData.bankName}`, 20, startY + 7);
  doc.text(`Tài khoản: ${invoiceData.accountName}`, 20, startY + 14);
  doc.text(`Số tài khoản: ${invoiceData.accountNumber}`, 20, startY + 21);
  doc.text(`Thanh toán trước ngày: ${invoiceData.paymentDue}`, 20, startY + 28);

  // Footer
  doc.setFontSize(14);
  doc.text("XIN CẢM ƠN!", 105, startY + 40, { align: "center" });

  return doc;
};

export default generateInvoicePDF;
