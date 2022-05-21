import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  // const marginTop = { marginTop: 5 };

  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs" sx={{marginTop: 20}}>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField fullWidth label="Name" placeholder="Enter your name"  required/>
            <TextField fullWidth label="Email" type="email" placeholder="Enter your email"  required/>
            <TextField fullWidth label="Username" placeholder="Enter your username"  required/>           
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              required
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <Button sx={{'&:hover':{backgroundColor: "secondary.main" }}}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Signup;
