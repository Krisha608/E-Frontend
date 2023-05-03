import React from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BiLeftArrow } from "react-icons/bi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

// const SingleBlog = () => {
//   return (
//     <>
//       <Meta title={"Dynamic Blog Name"} />
//       <BreadCrumb title="Dynamic Blog Name" />
//       <Container class1="blog-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="single-blog-card">
//               <Link to="/blogs" className="d-flex align-items-center gap-10">
//                 <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
//               </Link>
//               <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
//               <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
//               <p>
//                 You’re only as good as your last collection, which is an
//                 enormous pressure. I think there is something about luxury –
//                 it’s not something people need, but it’s what they want. It
//                 really pulls at their heart. I have a fantastic relationship
//                 with money.Scelerisque sociosqu ullamcorper urna nisl mollis
//                 vestibulum pretium commodo inceptos cum condimentum placerat
//                 diam venenatis blandit hac eget dis lacus a parturient a
//                 accumsan nisl ante vestibulum.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };
const SingleBlog = () => {
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  console.log(getBlogId);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
    getBlog();
  }, [dispatch, getBlogId]);

  const blogState = useSelector((state) => state?.blog?.singleBlog);
  console.log(blogState);

  return (
    blogState && (
      <>
        <Meta title={blogState.title} />
        <BreadCrumb title={blogState.title} />

        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs">
                  <BiLeftArrow /> Back to Blogs
                </Link>
                <h3 className="title">{blogState.title}</h3>

                <img
                  className="img-fluid w-100 my-4"
                  src={
                    blogState.images[0]?.url ? blogState.images[0]?.url : blog
                  }
                  alt="single blog"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </Container>
      </>
    )
  );
};
export default SingleBlog;
