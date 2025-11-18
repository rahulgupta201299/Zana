import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { getFieldErrorState, getHelperOrErrorText } from "@/utils/formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name length should be 3 to 80 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Id is required")
    .test("email", "Invalid email format", (value) => {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
        return true;
      else return false;
    }),
  phone: Yup.string()
    .required("Phone Number is required")
    .test("phone", "Please enter valid 10 digit Phone Number", (value) => {
      if (/^[6-9]\d{9}$/.test(value)) return true;
      else return false;
    })
    .min(10, "Please enter valid 10 digit Phone Number")
    .max(10, "Please enter valid 10 digit Phone Number"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string(),
});

const ContactUsForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (values, formikProps) => {
    const {resetForm} = formikProps
    console.log(values)
    setShowSuccess(true)
    resetForm();
   
     
  };

  return (
    <Box
      sx={{
        mx: "auto",
        p: { lg: "80px", xs: "16px" },
        color: "#fff",
        borderRadius: 2,
      }}
    >
      {showSuccess ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: "24px",
          }}
        >
          <img
            style={{
              width: "170px",
              height: "170px",
            }}
            src="/uploads/success.svg"
            alt={"Sucess"}
            className="w-full h-full object-contain p-2"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography variant="h4">Thank You, Rider!</Typography>
            <Typography>
              Your Gear is getting ready for the World! We’ve sent a
              confirmation to your mail.
            </Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Typography variant="h5" sx={{ mb: "24px" }}>
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "24px",
            }}
          >
            <Typography variant="h6">Get in Touch</Typography>
            <Typography variant="body1">
              Our team is here to help. Fill out the form <br /> and we’ll get
              back to you shortly.
            </Typography>
          </Box>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              values,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid size={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="NAME"
                      value={values.name}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "name")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "name"
                      )}
                      slotProps={{
                        input: {
                          sx: { backgroundColor: "#FFFFFF", color: "#000" },
                        },

                        inputLabel: {
                          sx: {
                            color: "#000000",
                            transition: "none",
                            // '&.Mui-focused': {
                            // //  display:'none',
                            // },
                          },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="EMAIL"
                      value={values.email}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "email")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "email"
                      )}
                      slotProps={{
                        input: {
                          sx: { backgroundColor: "#FFFFFF", color: "#000" },
                        },
                        inputLabel: {
                          sx: { color: "#000000" },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      fullWidth
                      hiddenLabel
                      name="phone"
                      variant="outlined"
                      label="PHONE NUMBER"
                      value={values.phone}
                      onChange={e => {
                        if (e.target.value.match(/[^0-9]/)) return
                        handleChange(e)
                      }}
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "phone")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "phone"
                      )}
                      slotProps={{
                        input: {
                          sx: { backgroundColor: "#FFFFFF", color: "#000" },
                          inputProps: { maxlength: 10 },
                        },
                        inputLabel: {
                          sx: { color: "#000000" },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="SUBJECT"
                      value={values.subject}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "subject")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "subject"
                      )}
                      slotProps={{
                        input: {
                          sx: { backgroundColor: "#FFFFFF", color: "#000" },
                        },
                        inputLabel: {
                          sx: { color: "#000000" },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="MESSAGE"
                      multiline
                      value={values.message}
                      rows={6}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "message")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "message"
                      )}
                      slotProps={{
                        input: {
                          sx: { backgroundColor: "#FFFFFF", color: "#000" },
                        },
                        inputLabel: {
                          sx: { color: "#000000" },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={12}>
                    <Button
                      type="submit"
                      sx={{
                        position: "relative",
                        color: "white",
                        border: "2px solid white",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        background: "transparent",
                        zIndex: 1,

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          borderBottom: "0px solid white",
                          borderLeft: "0px solid transparent",
                          transition:
                            "border-bottom-width 0.35s ease, border-left-width 0.35s ease",
                          zIndex: -1,
                          pointerEvents: "none",
                        },
                        "&:hover::after": {
                          borderBottomWidth: "300px",
                          borderLeftWidth: "300px",
                        },
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Box>
  );
};

export default ContactUsForm;
