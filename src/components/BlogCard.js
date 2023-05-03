import React from "react";
import { Link } from "react-router-dom";

// const BlogCard = () => {
//   return (
//     <div className="blog-card">
//       <div className="card-image">
//         <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
//       </div>
//       <div className="blog-content">
//         <p className="date">1 Dec, 2022</p>
//         <h5 className="title">A beautiful sunday morning renaissance</h5>
//         <p className="desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
//           accusamus officia
//         </p>
//         <Link to="/blog/:id" className="button">
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };
const BlogCard = (props) => {
  const { id, title, description, image, date } = props;
  return (
    <div className="blog-card">
      <div className="card-image">
        <img className="img-fluid w-100" src={image} alt="Blog" />
      </div>
      <div className="blog-content">
        <span className="date">{date}</span>
        <h5 className="title fs-5">{title}</h5>
        <p
          className="desc text-muted"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>
        <Link className="button" to={"/blog/" + id}>
          Read more
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
