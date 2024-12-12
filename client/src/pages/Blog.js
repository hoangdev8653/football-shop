import { useEffect } from "react";
import { blogStore } from "../store/blogStore";
function Blog() {
  const { data, getAllBlog } = blogStore();
  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="py-[30px]">
      <div className="max-w-[1050px] mx-auto">
        <div className="relative px-[15px] pb-[30px] w-full">
          <div className="px-0 mx-[-15px] w-auto">
            {data &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="relative px-[30px] pb-[30px] w-full"
                >
                  <div
                    style={{
                      boxShadow:
                        "0 3px 6px -4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                    }}
                    className={" bg-white ml-auto"}
                  >
                    <a href="/">
                      <div className="bg-white table w-full">
                        <div className="w-[40%] table-cell align-middle relativemx-auto overflow-hidden">
                          <div className="pt-[56%] relative  overflow-hidden bg-cover">
                            <img
                              className="right-0 left-0 top-0 bottom-0 w-full  absolute object-cover max-w-[100%] h-[217.29px]"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                        </div>
                        <div className="px-6 table-cell align-middle text-left pt-2 pb-4 relative w-full text-sm">
                          <h5 className="text-orange-500 font-bold">
                            {item.title}
                          </h5>
                          <div className="my-1 h-[2px] block bg-gray-100 w-full max-w-[30px]"></div>
                          <p className="my-1 hover:opacity-60">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
