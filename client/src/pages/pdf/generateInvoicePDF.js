import jsPDF from "jspdf";
import "jspdf-autotable";

const generateInvoicePDF = (invoiceData) => {
  const doc = new jsPDF();

  // Set title and customer info
  doc.setFontSize(20);
  doc.text("Invoice", 20, 20);
  doc.setFontSize(12);
  doc.text(`Customer: ${invoiceData.customer}`, 20, 40);
  doc.text(`Invoice Date: ${invoiceData.date}`, 20, 50);

  // Add table for product details
  const tableData = invoiceData.products.map((product) => [
    product.name,
    `$${product.price}`,
  ]);
  doc.autoTable({
    head: [["Product", "Price"]],
    body: tableData,
    startY: 60,
  });

  // Add total price
  doc.text(
    `Total: $${invoiceData.total}`,
    20,
    doc.previousAutoTable.finalY + 10
  );

  return doc;
};

export default generateInvoicePDF;
