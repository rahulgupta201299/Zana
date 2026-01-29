import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import PersonIcon from "@mui/icons-material/Person";
import { enqueueSnackbar } from "notistack";
import getBikeBrandServiceAction from "@/Redux/Auth/Services/GetBikeBrand";
import getBikeModelServiceAction from "@/Redux/Auth/Services/GetBikeModel";
import updateProfileDetailServiceAction, {
  UPDATE_PROFILE_DETAILS,
} from "@/Redux/Auth/Services/UpdateProfileDetails";
import addProfileDetailServiceAction, {
  ADD_PROFILE_DETAILS,
} from "@/Redux/Auth/Services/AddProfileDetails";
import getProfileDetailsServiceAction from "@/Redux/Auth/Services/GetProfileDetail";
import { TAppDispatch } from "@/Configurations/AppStore";

const MyProfile = ({ isMobile }: { isMobile: boolean }) => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const formikRef = useRef(null);
  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      getBrandList: () => dispatch(getBikeBrandServiceAction()),
      getBrandModel: (state: any) => dispatch(getBikeModelServiceAction(state)),
      addProfileDetails: (state: ADD_PROFILE_DETAILS) =>
        dispatch(addProfileDetailServiceAction(state)),
      updateProfileDetails: (state: UPDATE_PROFILE_DETAILS) =>
        dispatch(updateProfileDetailServiceAction(state)),
      fetchProfileDetails: (state: any) =>
        dispatch(getProfileDetailsServiceAction(state)),
      //@ts-ignore
      logout: () => dispatch(resetAuth()),
    }),
    [dispatch],
  );
  const profileDetails = useSelector((state: any) => getProfileDetails(state));

//   useEffect(() => {
//     fetchBrandList();
//   }, []);

  useEffect(() => {
    if (!formikRef.current) return;
    const { brand, model } = formikRef.current.values;
    if (brand && models.length === 0) {
      fetchBrandModels(brand);
    }
  }, [formikRef.current?.values.brand]);

  const fetchBrandList = async () => {
    const result = await actions.getBrandList();
    setBrands(result);
  };

  const fetchBrandModels = async (bikeId: string) => {
    const result = await actions.getBrandModel(bikeId);
    setModels(result);
  };

  const handleSubmit = async (values) => {
    try {
      // const [isd, phone] = values.phoneNumber.split("-");
      const reqBody = {
        phoneNumber: values.phoneNumber,
        isdCode: "+91", // TODO hardcoded
        emailId: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        notifyOffers: values.notifyOffers,
        bikeOwnedByCustomer: [
          {
            brand: values.brand,
            model: values.model,
          },
        ],
      };
      let result;
      if (profileDetails?._id) {
        result = await actions.updateProfileDetails(reqBody);
      } else {
        result = await actions.addProfileDetails(reqBody);
      }
      enqueueSnackbar(
        profileDetails?._id
          ? "Profile Details updated successfully!"
          : "Profile Details added successfully!",
        {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 2000,
        },
      );

      return result;
    } catch (error) {
      enqueueSnackbar("Failed to update profile. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 3000,
      });
    }
  };

  const ProfileSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      // TODO once double + issue resolve from BE
      // .test("phone", "Please enter valid 10 digit Phone Number", (value) => {
      //   if (/^[6-9]\d{9}$/.test(value)) return true;
      //   else return false;
      // })
      // .min(10, "Please enter valid 10 digit Phone Number")
      // .max(10, "Please enter valid 10 digit Phone Number"),
      .notRequired(),
    email: Yup.string()
      .email("Invalid email format")
      .test("email", "Invalid email format", (value) => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
          return true;
        else return false;
      }),
    firstName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets allowed"),
    lastName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets allowed"),
    address: Yup.string().min(3, "Name length should be 3 to 80 characters"),
    notifyOffers: Yup.boolean(),
  });

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
        // bgcolor: "#00000080",
        p: isMobile ? "16px" : "48px 48px 48px 0",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          borderRadius: "10px",
          height: "100%",
          p: isMobile ? "20px" : "32px 40px 32px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              // zIndex: 10,
              background: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              mb: "24px",
              borderBottom: "1px solid",
              width: isMobile ? "calc(100% + 40px)" : "calc(100% + 80px)",
              mx: isMobile ? "-20px" : "-40px",
              pb: "8px",
            }}
          >
            <Box
              sx={{
                width: "48px",
                height: "48px",
                bgcolor: "#ededed",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: isMobile ? "20px" : "40px",
              }}
            >
              <PersonIcon />
            </Box>

            <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
              My Profile
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Formik
              innerRef={formikRef}
              initialValues={{
                phoneNumber: profileDetails?.phoneNumber || "",
                email: profileDetails?.emailId || "",
                firstName: profileDetails?.firstName || "",
                lastName: profileDetails?.lastName || "",
                address: profileDetails?.address || "",
                notifyOffers: profileDetails?.notifyOffers || false,
                brand: profileDetails?.bikeOwnedByCustomer?.[0]?.brand || "",
                model: profileDetails?.bikeOwnedByCustomer?.[0]?.model || "",
              }}
              enableReinitialize
              validationSchema={ProfileSchema}
              validate={(values) => {
                if (values.brand && models.length === 0) {
                  fetchBrandModels(values.brand);
                }
              }}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                dirty,
                isValid,
              }) => (
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <TextField
                      fullWidth
                      name="phoneNumber"
                      value={values.phoneNumber}
                      disabled={true}
                      onChange={(e) => {
                        if (e.target.value.match(/[^0-9]/)) return;
                        handleChange(e);
                      }}
                      placeholder="Phone Number"
                      onBlur={handleBlur}
                      error={getFieldErrorState(
                        { errors, touched },
                        "phoneNumber",
                      )}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "phoneNumber",
                      )}
                      slotProps={{
                        input: {
                          sx: {
                            backgroundColor: "#FFFFFF",
                            color: "#000",
                            borderRadius: "10px",
                          },
                          inputProps: { maxLength: 10 },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email"
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "email")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "email",
                      )}
                      slotProps={{
                        input: {
                          sx: {
                            backgroundColor: "#FFFFFF",
                            color: "#000",
                            borderRadius: "10px",
                          },
                        },
                      }}
                    />

                    <Box sx={{ display: "flex", gap: "16px" }}>
                      <TextField
                        fullWidth
                        name="firstName"
                        value={values.firstName}
                        onChange={(e) =>
                          setFieldValue(
                            "firstName",
                            e.target.value
                              .replace(/[^A-Za-z]/g, "")
                              .toUpperCase(),
                          )
                        }
                        placeholder="First Name"
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "firstName",
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "firstName",
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#FFFFFF",
                              color: "#000",
                              borderRadius: "10px",
                            },
                            inputProps: { maxLength: 10 },
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        name="lastName"
                        value={values.lastName}
                        onChange={(e) =>
                          setFieldValue(
                            "lastName",
                            e.target.value
                              .replace(/[^A-Za-z]/g, "")
                              .toUpperCase(),
                          )
                        }
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "lastName",
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "lastName",
                        )}
                        slotProps={{
                          input: {
                            sx: {
                              backgroundColor: "#FFFFFF",
                              color: "#000",
                              borderRadius: "10px",
                            },
                            inputProps: { maxLength: 10 },
                          },
                        }}
                      />
                    </Box>

                    <TextField
                      fullWidth
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Address"
                      onBlur={handleBlur}
                      error={getFieldErrorState({ errors, touched }, "address")}
                      helperText={getHelperOrErrorText(
                        { errors, touched },
                        "address",
                      )}
                      slotProps={{
                        input: {
                          sx: {
                            backgroundColor: "#FFFFFF",
                            color: "#000",
                            borderRadius: "10px",
                          },
                        },
                      }}
                    />
                    <Box sx={{ display: "flex", gap: "16px" }}>
                      <FormControl fullWidth>
                        <Select
                          name="brand"
                          value={values.brand}
                          renderValue={(selected: string) => {
                            if (!selected) {
                              return (
                                <Typography
                                  sx={{
                                    fontSize: "16px",
                                    color: "#8A8A8A",
                                  }}
                                >
                                  Bike Brand
                                </Typography>
                              );
                            }

                            const foundModel = brands.find(
                              (m) => m._id === selected,
                            );

                            return (
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  color: "#1D1D1D",
                                }}
                              >
                                {foundModel?.name}
                              </Typography>
                            );
                          }}
                          onChange={(e) => {
                            const brand = e.target.value;
                            setFieldValue("brand", brand);
                            setFieldValue("model", "");
                            setModels([]);
                            fetchBrandModels(brand);
                            handleChange(e);
                          }}
                          displayEmpty
                          IconComponent={() => null}
                          sx={{
                            p: 0,
                            borderRadius: "10px",
                            color: "#8A8A8A",
                          }}
                        >
                          {brands &&
                            brands.map((bike) => (
                              <MenuItem
                                key={bike?._id}
                                value={bike?._id}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  justifyContent: "space-between",
                                }}
                              >
                                <span>{bike.name}</span>
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>{" "}
                      <FormControl fullWidth>
                        <Select
                          name="model"
                          value={values.model}
                          displayEmpty
                          IconComponent={() => null}
                          sx={{ p: 0, borderRadius: "10px" }}
                          renderValue={(selected: string) => {
                            const foundModel = models.find(
                              (m) => m._id === selected,
                            );
                            if (!foundModel) {
                              return (
                                <Typography
                                  sx={{
                                    fontSize: "16px",
                                    color: "#8A8A8A",
                                  }}
                                >
                                  Bike Model
                                </Typography>
                              );
                            } else {
                              return (
                                <Typography
                                  sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    color: "#1D1D1D",
                                  }}
                                >
                                  {foundModel?.name}
                                </Typography>
                              );
                            }
                          }}
                          onChange={(e) =>
                            setFieldValue("model", e.target.value)
                          }
                        >
                          {models.map((m) => (
                            <MenuItem key={m._id} value={m._id}>
                              {m.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    <FormControlLabel
                      control={
                        <Radio
                          name="notifyOffers"
                          checked={values.notifyOffers === true}
                          onChange={() =>
                            setFieldValue("notifyOffers", !values.notifyOffers)
                          }
                          sx={{ transform: "scale(0.6)" }}
                        />
                      }
                      label="Notify me with offers and updates"
                    />

                    <Button
                      type="submit"
                      size="medium"
                      sx={{
                        backgroundColor: !(dirty && isValid)
                          ? "#00000033"
                          : "black",
                        opacity: 1,
                        color: !(dirty && isValid) ? "black" : "white",
                        mb: "32px",
                        py: "16px",
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                      disabled={!(dirty && isValid)}
                    >
                      UPDATE
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                I accept that I have read & understood your
                <br />
                <Typography
                  component="span"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Privacy Policy and T&Cs
                </Typography>
                .
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withDeviceDetails(MyProfile);
