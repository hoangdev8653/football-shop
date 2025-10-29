import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form thêm sản phẩm (tạm giữ nguyên phần này nếu sau này bạn muốn post lên API)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stockQuality: "",
    categoryId: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Gọi API khi load trang
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://h7sport.onrender.com/product/ao-bong-da-clb"
        );
        const data = await res.json();
        if (data.status === 200) {
          setProducts(data.content);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Xử lý input thay đổi
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Xử lý submit form để thêm sản phẩm qua API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("stockQuality", formData.stockQuality);
    data.append("categoryId", formData.categoryId);
    if (formData.image) {
      data.append("image", formData.image);
    }
    console.log(data);
    // toast.info("Đang thêm sản phẩm..."); // Optional: thông báo đang xử lý

    try {
      const res = await fetch("https://h7sport.onrender.com/product/create", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok && result.content) {
        setProducts((prev) => [result.content, ...prev]); // Thêm sản phẩm mới vào đầu danh sách
        toast.success("Thêm sản phẩm thành công!");
        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          stockQuality: "",
          categoryId: "",
          image: null,
        });
        setPreview(null);
      } else {
        const errorMessage = result.message || "Lỗi khi thêm sản phẩm";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("Lỗi khi gọi API, vui lòng thử lại!");
    }
  };

  // Xử lý xóa sản phẩm qua API
  const handleDelete = async (productId) => {
    // Thêm confirm dialog để chắc chắn
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      return;
    }

    try {
      const res = await fetch(
        `https://h7sport.onrender.com/product/delete?id=${productId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== productId));
        toast.success("Xóa sản phẩm thành công!");
      } else {
        toast.error("Xóa sản phẩm thất bại!");
      }
    } catch (error) {
      toast.error("Lỗi khi gọi API, vui lòng thử lại!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Form thêm sản phẩm */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Thêm sản phẩm mới
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Tên sản phẩm</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập tên sản phẩm"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Giá (VNĐ)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="200000"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mô tả</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Nhập mô tả sản phẩm..."
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Tồn kho</label>
              <input
                type="number"
                name="stockQuality"
                value={formData.stockQuality}
                onChange={handleChange}
                placeholder="100"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Mã danh mục (categoryId)
              </label>
              <input
                type="text"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                placeholder="Nhập ID danh mục"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Hình ảnh</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 h-40 w-auto rounded-xl border object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Thêm sản phẩm
          </button>
        </form>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Danh sách sản phẩm</h2>

        {loading ? (
          <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">Không có sản phẩm nào.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p._id}
                className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={Array.isArray(p.image) ? p.image[0] : p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-gray-600 text-sm mb-1 flex-grow">
                  {p.description}
                </p>
                <p className="text-indigo-600 font-bold">
                  {p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫
                </p>
                <p className="text-sm text-gray-500">
                  Tồn kho: {p.stockQuality}
                </p>
                <p className="text-sm text-gray-400 italic mb-3">
                  Danh mục: {p.categoryId?.name || "Không rõ"}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-200 flex justify-end gap-2">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Xóa sản phẩm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
