import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Person, Lock, VisibilityOff, Visibility } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";
import { loginAction } from "../../../../redux/actions/loginActions";
import classes from "./Login.module.scss";
import Translate from "../../molecules/Translate/Translate";
import { useRouter } from "next/router";

const Login = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const dispatch = useDispatch();
  const { loginStatus, loading, accessToken } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t("home:username_is_required")),
      password: Yup.string()
        .min(8, t("home:password_must_be_at_least_8_characters"))
        .required(t("home:password_is_required")),
    }),

    onSubmit: (values) => {
      // console.log(values);
      submitHandler(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = () => {};

  const submitHandler = (user) => {
    dispatch(loginAction(user.username, user.password));
  };
  // const submitHandler = async (user) => {
  //   await dispatch(loginAction(user.username, user.password));
  // };

  useEffect(() => {
    if (accessToken) {
      router.push("/dashboard");
      // console.log(accessToken);
    }
  }, [accessToken]);
  // }, [accessToken, router]);

  return (
    <div className={classes.container}>
      <div className={classes.container_login}>
        <ul className={classes.translate}>
          <Translate></Translate>
        </ul>

        <form onSubmit={formik.handleSubmit} className={classes.container_form}>
          <h2 className={classes.container_form_h2}>{t("home:login_page")}</h2>

          <TextField
            name="username"
            type="text"
            placeholder={t("home:username")}
            className={classes.container_form_textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Person />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />

          {formik.touched.username && formik.errors.username ? (
            <div className={classes.container_form_error_msg}>
              {formik.errors.username}
            </div>
          ) : null}

          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("home:password")}
            className={classes.container_form_textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Lock />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={classes.container_form_error_msg}>
              {formik.errors.password}
            </div>
          ) : null}

          <button
            disabled={
              formik.values?.password.length === 0 &&
              formik.values.username.length === 0
            }
            className={
              !formik.values.password || !formik.values.username
                ? classes.container_form_disabledbtn
                : classes.container_form_button
            }
            type="submit"
            data-testid="loginbtn"
          >
            {t("home:login")}
          </button>

          {loading ? (
            <div className={classes.container_form_loadingSpin}>
              <LoadingSpinner></LoadingSpinner>
            </div>
          ) : null}
          {!loading && loginStatus === "Failed" && (
            <p className={classes.container_form_alert}>
              {t("home:invalid_credentials")}
            </p>
          )}

          <h3 className={classes.container_form_h3}>
            {t("home:not_member")}
            <span className={classes.container_form_h3_signup}>
              {t("home:Signup_now")}
            </span>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
