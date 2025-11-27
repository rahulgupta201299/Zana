import { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  useMediaQuery,
  Paper,
  Radio,
  IconButton,
  Button,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import { LogOutIcon } from "lucide-react";
import { Formik } from "formik";
import { Form } from "react-router";
import * as Yup from "yup";
import { getFieldErrorState, getHelperOrErrorText } from "@/Utils/Formik";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import { useSelector } from "react-redux";

interface PROFILE_PROPS_TYPE {
  onClose: () => void;
  isMobile: boolean;
}

const ProfileModal = ({ onClose, isMobile }: PROFILE_PROPS_TYPE) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [notifyOffers, setNotifyOffers] = useState(false);

  const profileDetails = useSelector((state: any) => getProfileDetails(state));

  const ProfileSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .test("phone", "Please enter valid 10 digit Phone Number", (value) => {
        if (/^[6-9]\d{9}$/.test(value)) return true;
        else return false;
      })
      .min(10, "Please enter valid 10 digit Phone Number")
      .max(10, "Please enter valid 10 digit Phone Number"),
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
    <Dialog
      open={true}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="lg"
      disableScrollLock
      slotProps={{
        paper: {
          sx: {
            borderRadius: isMobile ? 0 : "16px",
            overflow: "hidden",
            position: "relative",
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: 0,
          backgroundColor: "#2A2A2A",
          flex: 1,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#fff",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            width: "100%",
            height: isMobile ? "100%" : "675px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            backgroundColor: "#0000008",
          }}
        >
          {!isMobile ? (
            //Desktop View//
            <Box
              sx={{
                width: "50%",
                bgcolor: "#00000080",
                p: "48px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: "8px" }}
              >
                <img
                  src="/uploads/957a38a6-31ae-4f52-8f91-4db69e92b127.png"
                  alt="logo"
                  style={{ height: "89px" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  textAlign: "center",
                  mb: "64px",
                  fontSize: "30px",
                }}
              >
                Hey Rider! Welcome to Zana.
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                {[
                  // { icon: <FavoriteBorderIcon />, label: "Wishlist" },
                  { icon: <HelpOutlineIcon />, label: "FAQ's" },
                  { icon: <EmojiEventsIcon />, label: "Rewards" },
                  { icon: <LogOutIcon />, label: "Logout" },
                ].map((item) => (
                  <Paper
                    key={item.label}
                    sx={{
                      p: "16px 24px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}
                      <Typography sx={{ fontSize: "24px", fontWeight: 300 }}>
                        {item.label}
                      </Typography>
                    </Box>
                    <ChevronRightIcon />
                  </Paper>
                ))}
              </Box>
            </Box>
          ) : (
            // mobile View//
            <Box
              sx={{
                width: "100%",
                bgcolor: "#00000080",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: "16px",
                gap: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="/uploads/957a38a6-31ae-4f52-8f91-4db69e92b127.png"
                  alt="logo"
                  style={{
                    height: "65px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    textAlign: "center",
                    color: "#fff",
                    px: "32px",
                  }}
                >
                  Hey Rider! Welcome to Zana.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                  mt: "8px",
                }}
              >
                {[
                  <FavoriteBorderIcon fontSize="small" />,
                  <HelpOutlineIcon fontSize="small" />,
                  <EmojiEventsIcon fontSize="small" />,
                  <LogOutIcon size={18} />,
                ].map((icon, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: "#F6F6F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "0.2s",
                      "&:hover": { background: "#EDEDED" },
                      "&:active": { transform: "scale(0.92)" },
                    }}
                  >
                    {icon}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              bgcolor: "#00000080",
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
                    zIndex: 10,
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
                  }}
                >
                  <Formik
                    initialValues={{
                      phoneNumber: profileDetails?.phoneNumber || "",
                      email: "",
                      firstName: "",
                      lastName: "",
                      address: "",
                      notifyOffers: false,
                    }}
                    validationSchema={ProfileSchema}
                    onSubmit={(values) => {
                      console.log("SUBMIT → ", values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      setFieldValue,
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
                            onChange={(e) => {
                              if (e.target.value.match(/[^0-9]/)) return;
                              handleChange(e);
                            }}
                            placeholder="Phone Number"
                            onBlur={handleBlur}
                            error={getFieldErrorState(
                              { errors, touched },
                              "phoneNumber"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "phoneNumber"
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
                            error={getFieldErrorState(
                              { errors, touched },
                              "email"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "email"
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
                                    .toUpperCase()
                                )
                              }
                              placeholder="First Name"
                              onBlur={handleBlur}
                              error={getFieldErrorState(
                                { errors, touched },
                                "firstName"
                              )}
                              helperText={getHelperOrErrorText(
                                { errors, touched },
                                "firstName"
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
                                    .toUpperCase()
                                )
                              }
                              placeholder="Last Name"
                              onBlur={handleBlur}
                              error={getFieldErrorState(
                                { errors, touched },
                                "lastName"
                              )}
                              helperText={getHelperOrErrorText(
                                { errors, touched },
                                "lastName"
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
                            error={getFieldErrorState(
                              { errors, touched },
                              "address"
                            )}
                            helperText={getHelperOrErrorText(
                              { errors, touched },
                              "address"
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
                                name="country"
                                // label='Country/Region'
                                // value={values.country}
                                onChange={handleChange}
                                displayEmpty
                                IconComponent={() => null}
                                sx={{
                                  p: 0,
                                  borderRadius: "10px",
                                }}
                                renderValue={() => (
                                  <Box>
                                    <Typography
                                      sx={{
                                        fontSize: "14px",
                                        color: "#1D1D1D",
                                      }}
                                    >
                                      Country/Region
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "20px",
                                        fontWeight: 400,
                                        color: "#1D1D1D",
                                      }}
                                    >
                                      {/* {values.country === "india"
                                        ? "India"
                                        : values.country} */}
                                    </Typography>
                                  </Box>
                                )}
                              >
                                <MenuItem value="india">India</MenuItem>
                                <MenuItem value="usa">United States</MenuItem>
                                <MenuItem value="uk">United Kingdom</MenuItem>
                                <MenuItem value="canada">Canada</MenuItem>
                              </Select>
                              {/* </Box> */}
                            </FormControl>
                            <FormControl fullWidth>
                              <Select
                                name="country"
                                // label='Country/Region'
                                // value={values.country}
                                onChange={handleChange}
                                displayEmpty
                                IconComponent={() => null}
                                sx={{
                                  p: 0,
                                  borderRadius: "10px",
                                }}
                                renderValue={() => (
                                  <Box>
                                    <Typography
                                      sx={{
                                        fontSize: "14px",
                                        color: "#1D1D1D",
                                      }}
                                    >
                                      Country/Region
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "20px",
                                        fontWeight: 400,
                                        color: "#1D1D1D",
                                      }}
                                    >
                                      {/* {values.country === "india"
                                        ? "India"
                                        : values.country} */}
                                    </Typography>
                                  </Box>
                                )}
                              >
                                <MenuItem value="india">India</MenuItem>
                                <MenuItem value="usa">United States</MenuItem>
                                <MenuItem value="uk">United Kingdom</MenuItem>
                                <MenuItem value="canada">Canada</MenuItem>
                              </Select>
                              {/* </Box> */}
                            </FormControl>
                          </Box>

                          <FormControlLabel
                            control={
                              <Radio
                                name="notifyOffers"
                                checked={values.notifyOffers}
                                onChange={handleChange}
                                sx={{ transform: "scale(0.6)" }}
                              />
                            }
                            label="Notify me with offers and updates"
                          />

                          <Button
                            type="submit"
                            size="medium"
                            sx={{
                              backgroundColor: "Black",
                              color: "white",
                              mb: "32px",
                              py: "16px",
                              borderRadius: "10px",
                              textTransform: "none",
                            }}
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
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default withDeviceDetails(ProfileModal);
