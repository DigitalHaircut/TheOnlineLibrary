import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function () {
return (
    <Box>
        <h1> AuthLayout.jsx </h1>
        <Container>
            <Outlet />
        </Container>
    </Box>
  );
}