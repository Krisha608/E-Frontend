import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch,useSelector  } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../features/user/userSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const Login = () => {
//   return (
//     <>
//       <Meta title={"Login"} />
//       <BreadCrumb title="Login" />

//       <Container class1="login-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Login</h3>
//               <form action="" className="d-flex flex-column gap-15">
//                 <CustomInput type="email" name="email" placeholder="Email" />
//                 <CustomInput
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <div>
//                   <Link to="/forgot-password">Forgot Password?</Link>

//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button className="button border-0" type="submit">
//                       Login
//                     </button>
//                     <Link to="/signup" className="button signup">
//                       SignUp
//                     </Link>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };
const loginSchema = Yup.object({
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),

  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(loginUser(values));
          navigate("/")
    } 
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form
                action=""
                className="d-flex flex-column gap-1"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div className="mb-2">
                  <Link to="/forgot-password" className="forgot mt-3 ms-2">
                    Forgot your password?
                  </Link>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button
                      className="button login border-0 mt-4"
                      type="submit"
                      
                    >
                      <ToastContainer />
                      Login
                    </button>
                    <Link to="/signup" className="button signup mt-4">
                      Sign Up
                      <ToastContainer />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
// export default Login;
