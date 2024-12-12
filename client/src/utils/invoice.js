import React from "react";
import { jsPDF } from "jspdf";
import { FaFileInvoiceDollar } from "react-icons/fa";
import formatDate from "./formatDate";

const Invoice = ({ item }) => {
  const generatePDF = () => {
    if (!item) {
      return;
    }

    const doc = new jsPDF();
    const date = formatDate(item.orderDate);

    doc.setFontSize(18);
    doc.text("CÔNG TY H7SPORT", 60, 20);
    doc.setFontSize(12);
    doc.text("Thôn Vạn Lăng, Xã Cẩm Thanh, Hội An", 30, 10);

    doc.setFontSize(12);
    doc.text(`Ngày: ${date}`, 20, 30);
    doc.text(`Mã đơn hàng: ${item._id}`, 20, 40);
    doc.text(`Địa chỉ nhận hàng: ${item.address}`, 20, 50);
    doc.text(`Trạng thái: ${item.status}`, 20, 60);
    doc.text(`Tổng tiền: ${item.totalAmount} VND`, 20, 70);

    doc.text("Chi tiết sản phẩm:", 20, 90);

    item.cart.forEach((product, index) => {
      const productName = product.productId.name;
      const productQuantity = product.quantity;
      const productPrice = product.productId.price;

      doc.text(`Sản phẩm: ${productName}`, 20, 100 + index * 10);
      doc.text(`Số lượng: ${productQuantity}`, 20, 110 + index * 10);
      doc.text(`Giá: ${productPrice} VND`, 20, 120 + index * 10);
    });

    doc.save("invoice.pdf");
  };

  return (
    <div>
      <div>
        <FaFileInvoiceDollar
          onClick={generatePDF}
          className="text-center m-auto cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Invoice;
