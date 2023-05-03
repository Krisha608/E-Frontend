import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const profileSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),

  mobile: Yup.string().required("Mobile is required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userState?.firstname,
      lastName: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(updateUserProfile(values));
      setEdit(true);

      //   setTimeout(() => {
      //    getUserById()
      //   }, 1000);
    },
  });

  return (
    <>
      <Meta title={"My Profile"} />
      <BreadCrumb title="My Profile" />
      <Container class1="store-wrapper home-wrapper pb-5">
        <div className="col-12">
          <div className="d-flex justify-content-evenly align-items-baseline">
            <h3 className="mb-3">Update Profile</h3>
            <FiEdit
              onClick={() => setEdit(false)}
              className="fs-4 text-primary"
            />
          </div>
        </div>
        <div className="col-12">
          <form onSubmit={formik.handleSubmit} className="w-100">
            <div className="mb-3">
              <label htmlFor="example1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="example1"
                aria-describedby="emailHelp"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange("firstName")}
                onBlur={formik.handleBlur("firstName")}
                disabled={edit}
              />
              <div className="error mt-1">
                {formik.touched.firstName && formik.errors.firstName}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="example2" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="example2"
                aria-describedby="emailHelp"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange("lastName")}
                onBlur={formik.handleBlur("lastName")}
                disabled={edit}
              />
              <div className="error mt-1">
                {formik.touched.lastName && formik.errors.lastName}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                disabled={edit}
              />
              <div className="error mt-1">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="example3" className="form-label">
                Mobile No:
              </label>
              <input
                type="text"
                className="form-control"
                id="example3"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
                disabled={edit}
              />
              <div className="error mt-1">
                {formik.touched.mobile && formik.errors.mobile}
              </div>
            </div>
            {edit === false && (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            )}
          </form>
        </div>
      </Container>
    </>
  );
};

export default Profile;