import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" x={{ bgcolor: "#1976d2" }}>
      <Toolbar>
        {/*logo of  the brand */}
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          MyTeam
        </Typography>
        <Box>
          {/*  user? logout : login */}
          {user ? (
            <>
              {" "}
              <Button> Hi, </Button>
              <Button> Logout</Button>
            </>
          ) : (
            <Button> Login </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
