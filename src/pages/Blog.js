import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
// const Blog = () => {
//   return (
//     <>
//       <Meta title={"Blogs"} />
//       <BreadCrumb title="Blogs" />
//       <Container class1="blog-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-3">
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Find By Categories</h3>
//               <div>
//                 <ul className="ps-0">
//                   <li>Watch</li>
//                   <li>Tv</li>
//                   <li>Camera</li>
//                   <li>Laptop</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="row">
//               <div className="col-6 mb-3">
//                 <BlogCard />
//               </div>
//               <div className="col-6 mb-3">
//                 <BlogCard />
//               </div>
//               <div className="col-6 mb-3">
//                 <BlogCard />
//               </div>
//               <div className="col-6 mb-3">
//                 <BlogCard />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };
const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  console.log(blogState);

  const dispatch = useDispatch();

  useEffect(() => {
    const getBlogs = () => {
      dispatch(getAllBlogs());
    };
    getBlogs();
  }, [dispatch]);

  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              {blogState &&
                blogState?.map((blog, index) => (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={blog?._id}
                      title={blog?.title}
                      description={blog?.description}
                      image={
                        blog?.images[0]?.url
                          ? blog?.images[0]?.url
                          : "images/blog-1.jpg"
                      }
                      date={moment(blog?.createdAt).format("MMM Do YYYY")}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Blog;
