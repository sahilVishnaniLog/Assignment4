import { useState } from "react";
import React from "react";
import countryPhoneCodes from "../../assets/CountryPhoneCode";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Alert,
  Autocomplete,
  Typography,
  Checkbox,
  Link,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CountryRegionList = {};
export default function SignUpPage() {
  const [isValid, setValid] = useState(false);
  return (
    <Box
      elevation={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        pl: 3,
        pr: "auto",
        width: "100%",
        height: "100%",
      }}
    >
      {" "}
      <img src="https://images.unsplash.com/photo-1761405378282-e819a65cb493?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "auto",
          justifyContent: "left",
          gap: "40px",
        }}
      >
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", margin: 2 }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 100 }}
            color="contrast"
          >
            Already have an account ?{" "}
            <Button
              endIcon={<ArrowRightAltIcon />}
              sx={{ textDecoration: "underline", color: "inherit" }}
            >
              {" "}
              Sign In{" "}
            </Button>{" "}
          </Typography>

          <Typography variant="h5" sx={{ mb: 3 }}>
            {" "}
            Sign Up{" "}
          </Typography>
          <FormControl>
            <InputLabel htmlFor="user-email-signup"> Email* </InputLabel>
            <OutlinedInput id="user-email-signup"> Email </OutlinedInput>
            <FormHelperText id="user-email-signup-helperText">
              {" "}
              Please enter a valid email address
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="user-password-signup"> Password* </InputLabel>
            <OutlinedInput label="password" id="user-password-signup">
              {" "}
              ********{" "}
            </OutlinedInput>
            <FormHelperText id="user-password-signup-helperText">
              {" "}
              Password should be at least 8 characters including a number and a
              specialCharacter.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="user-UserName-signup">
              {" "}
              Choose UserName *{" "}
            </InputLabel>
            <OutlinedInput label="password" id="user-useraName-signup">
              {" "}
              ********{" "}
            </OutlinedInput>
            <FormHelperText id="user-UserName-signup-helperText">
              {" "}
              Username should contain only AlphaNumberic characters and shouud
              not start with a number.{" "}
            </FormHelperText>
            {isValid && (
              <Alert severity="error" variant="text" sx={{ color: "red" }}>
                {" "}
                Username should container only alphaNumeric character and should
                also not start with a number s
              </Alert>
            )}
          </FormControl>

          <Autocomplete
            options={countryPhoneCodes}
            getOptionLabel={(option) => option.country || " "}
            sx={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Country/Region" />
            )}
          ></Autocomplete>
          <Alert>
            For compliance reason . we're required to colled country information
            to send you occasional updates and announcements.
          </Alert>
          <Typography sx={{ color: "#1f2328", mt: 2 }}>
            Email preferences
          </Typography>
          <FormControlLabel
            control={<Checkbox />}
            label="Receive occasional product updates and announcemennts"
          >
            {" "}
          </FormControlLabel>
          <Button
            sx={{ bgcolor: "#233629" }}
            variant="contained"
            type="click"
            endIcon={<ArrowRightAltIcon />}
          >
            {" "}
            Create Account{" "}
          </Button>
          <Typography>
            {" "}
            By creating an account, you agree to the{" "}
            <Link href="#"> Terms of Services </Link> For more information about
            GitHub's privacy practices, see the{" "}
            <Link href="#"> Privacy Policy </Link>. We'll occasionally send you
            account-related emails.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
