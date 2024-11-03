import React, { useEffect, useState } from "react";
import { blogStore } from "../../store/blogStore";
import Paginate from "../../components/paginate/Paginate";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/modal";

function BlogAdmin() {
  const [currentItems, setCurrentItems] = useState([]);
  const [openModal, SetOpenModal] = useState(false);
  const { data, getAllBlog } = blogStore();

  useEffect(() => {
    const fetchData = async () => {
      await getAllBlog();
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    SetOpenModal(!openModal);
  };

  const handlePageChange = (items) => {
    setCurrentItems(items);
  };

  return (
    <div className="w-full h-full">
      <div className="mt-8 ml-8 text-2xl font-medium">Blog</div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Title
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                content
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                image
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="bg-white border-b ">
                  <td className="px-2 py-2 uppercase text-center ">
                    {item?.title}
                  </td>

                  <td className="px-2 py-2 text-center uppercase">
                    {item?.content}
                  </td>
                  <td className="px-4 py-2 text-center ">
                    <img
                      className="w-[238px]"
                      src={item?.image}
                      alt={item?._id}
                    />
                  </td>
                  <td className="px-2 py-2 flex gap-1 my-20 text-center ">
                    <span className="font-medium  hover:underline hover:opacity-60 cursor-pointer">
                      <FiPlus className="text-2xl" />
                    </span>
                    <span
                      onClick={handleOpenModal}
                      className="font-medium  hover:underline hover:opacity-60 cursor-pointer"
                    >
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span className="hover:opacity-70 cursor-pointer">
                      <MdDeleteForever className="text-2xl " />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center">
                  No movies available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {openModal && (
          <Modal onClose={handleOpenModal}>
            <div className="relative items-center mx-auto">
              <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="rounded w-[70%] px-4 py-4 relative top-[-100px] bg-white">
                  <div>ádasdasdasds</div>
                </div>
              </div>
            </div>
          </Modal>
        )}
        <Paginate
          data={data}
          itemsPerPage={4}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default BlogAdmin;
