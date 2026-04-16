import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileDetails,
  isdCodeDetails,
  listOfBikes,
} from "@/Redux/Auth/Selectors";
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
import { TAppDispatch } from "@/Configurations/AppStore";
import { logout } from "../Utils";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GenerateEmailOtpServiceAction, {
  GEN_EMAIL_OTP_REQ,
} from "@/Redux/Auth/Services/GenerateEmailOtp";
import verifyEmailOtpServiceAction from "@/Redux/Auth/Services/VerifyEmailOtp";
import VerifyEmailOtp from "./VerifyEmailOtp";

const MyProfile = ({ isMobile }: { isMobile: boolean }) => {
  const [models, setModels] = useState([]);
  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      getBrandList: () => dispatch(getBikeBrandServiceAction()),
      getBrandModel: (state: any) => dispatch(getBikeModelServiceAction(state)),
      addProfileDetails: (state: ADD_PROFILE_DETAILS) =>
        dispatch(addProfileDetailServiceAction(state)),
      updateProfileDetails: (state: UPDATE_PROFILE_DETAILS) =>
        dispatch(updateProfileDetailServiceAction(state)),
      logout,
      generateEmailOtp: (state: GEN_EMAIL_OTP_REQ) =>
        dispatch(GenerateEmailOtpServiceAction(state)),
      verifyEmailOtp: (state) => dispatch(verifyEmailOtpServiceAction(state)),
    }),
    [dispatch],
  );
  const profileDetails = useSelector(getProfileDetails);
  const isdCode = useSelector(isdCodeDetails);
  const bikeList = useSelector(listOfBikes);
  const [showOtpDialog, setShowOtpDialog] = useState(false);

  const fetchBrandModels = async (bikeId: string) => {
    if (!bikeId) return;
    const result = await actions.getBrandModel(bikeId);
    setModels(result);
  };

  const handleSubmit = async (values) => {
    try {
      const [isd, phone] = values.phoneNumber.split("-");
      const reqBody = {
        phoneNumber: values.phoneNumber, // Storing phone number with ISD code as prefix (e.g., +91-1234567890)
        isdCode: isd,   
        firstName: values.firstName,
        lastName: values.lastName,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        postalCode: values.postalCode,
        country: values.country,
        notifyOffers: values.notifyOffers,
        bikeOwnedByCustomer:
          values.brand || values.model
            ? [
                {
                  ...(values.brand && { brand: values.brand }),
                  ...(values.model && { model: values.model }),
                },
              ]
            : [],
      };
      let result;

      if (profileDetails._id) {
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
    .required("Phone number is required"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),

  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets allowed"),

  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets allowed"),

  addressLine1: Yup.string()
    .required("Address Line 1 is required")
    .min(3, "Address length should be 3 to 80 characters")
    .max(80, "Address length should be 3 to 80 characters"),

  addressLine2: Yup.string()
    .required("Address Line 2 is required")
    .min(3, "Address length should be 3 to 80 characters")
    .max(80, "Address length should be 3 to 80 characters"),

  city: Yup.string()
    .required("City is required")
    .min(2, "City length should be 2 to 50 characters")
    .max(50, "City length should be 2 to 50 characters"),

  state: Yup.string()
    .required("State is required")
    .min(2, "State length should be 2 to 50 characters")
    .max(50, "State length should be 2 to 50 characters"),

  postalCode: Yup.string()
    .required("Postal code is required")
    .matches(/^[0-9]{6}$/, "Enter a valid 6-digit postal code"),

  country: Yup.string()
    .required("Country is required"),

  notifyOffers: Yup.boolean(),
});

  const generateOtp = async (email: string) => {
    try {
      const result = await actions.generateEmailOtp({ email });
      console.log(result.success);
      if (result.success) {
        setShowOtpDialog(true);
      }
    } catch (error) {}
  };

  

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
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
              initialValues={{
                phoneNumber: profileDetails?.phoneNumber || "",
                email: profileDetails?.emailId || "",
                firstName: profileDetails?.firstName || "",
                lastName: profileDetails?.lastName || "",
                addressLine1: profileDetails?.addressLine1 || "",
                addressLine2: profileDetails?.addressLine2 || "",
                city: profileDetails?.city || "",
                state: profileDetails?.state || "",
                postalCode: profileDetails?.postalCode || "",
                country: profileDetails?.country || "",
                notifyOffers: profileDetails?.notifyOffers || false,
                brand: profileDetails?.bikeOwnedByCustomer?.[0]?.brand || "",
                model: profileDetails?.bikeOwnedByCustomer?.[0]?.model || "",
              }}
              enableReinitialize
              validationSchema={ProfileSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                setFieldTouched,
                dirty,
                isValid,
              }) => {
                const { brand = "" } = values;

                useEffect(() => {
                  fetchBrandModels(brand);
                }, []);

                return (
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
                  endAdornment:
                    profileDetails.emailId === '' ? (
                      <InputAdornment position="end">
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => {
                            generateOtp(values.email);
                          }}
                          sx={{
                            color: "#2192de",
                          }}
                        >
                          Verify
                        </Button>
                      </InputAdornment>
                    ) : null,
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
                        name="addressLine1"
                        value={values.addressLine1}
                        onChange={handleChange}
                        placeholder="Address Line1"
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "addressLine1",
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "addressLine1",
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
                      <TextField
                        fullWidth
                        name="addressLine2"
                        value={values.addressLine2}
                        onChange={handleChange}
                        placeholder="Address Line2"
                        onBlur={handleBlur}
                        error={getFieldErrorState(
                          { errors, touched },
                          "addressLine2",
                        )}
                        helperText={getHelperOrErrorText(
                          { errors, touched },
                          "addressLine2",
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
                      <Stack direction="row" spacing={2}>
                        <TextField
                          fullWidth
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          placeholder="City"
                          onBlur={handleBlur}
                          error={getFieldErrorState(
                            { errors, touched },
                            "city",
                          )}
                          helperText={getHelperOrErrorText(
                            { errors, touched },
                            "city",
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
                        <TextField
                          fullWidth
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          placeholder="State"
                          onBlur={handleBlur}
                          error={getFieldErrorState(
                            { errors, touched },
                            "state",
                          )}
                          helperText={getHelperOrErrorText(
                            { errors, touched },
                            "state",
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
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <TextField
                          fullWidth
                          name="postalCode"
                          value={values.postalCode}
                          onChange={handleChange}
                          placeholder="Postal Code"
                          onBlur={handleBlur}
                          error={getFieldErrorState(
                            { errors, touched },
                            "postalCode",
                          )}
                          helperText={getHelperOrErrorText(
                            { errors, touched },
                            "postalCode",
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
                        <FormControl fullWidth>
                          <Select
                            name="country"
                            value={values.country}
                            onChange={(e) => {
                              const countryName = e.target.value as string;
                              // const selected = isdCode.find(
                              //   (c) => c.name === countryName
                              // );
                              setFieldValue("country", countryName, true);
                              setFieldTouched("country", true);
                            }}
                            displayEmpty
                            IconComponent={() => null}
                            sx={{ p: 0, borderRadius: "10px" }}
                            renderValue={(value) => (
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  color: value ? "#000" : "#8A8A8A",
                                }}
                              >
                                {value || "Select country"}
                              </Typography>
                            )}
                          >
                            {isdCode.map((c) => (
                              <MenuItem
                                key={c.name}
                                value={c.name}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  justifyContent: "space-between",
                                }}
                              >
                                {c.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
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

                              const foundModel = bikeList.find(
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
                            {bikeList &&
                              bikeList.map((bike) => (
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
                          <Checkbox
                            name="notifyOffers"
                            value={values.notifyOffers}
                            checked={values.notifyOffers === true}
                            onChange={(e) =>
                              setFieldValue("notifyOffers", e.target.checked)
                            }
                            sx={{ transform: "scale(0.6)" }}
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<RadioButtonCheckedIcon />}
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
                      { showOtpDialog &&
                      (<VerifyEmailOtp
                        open={showOtpDialog}
                        onClose={() => setShowOtpDialog(false)}
                        emailId={values?.email }
                        handleRequestOtp={() => generateOtp(values?.email)}    
                      />
                      )
                    }
                  </Form>
                );
              }}
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
