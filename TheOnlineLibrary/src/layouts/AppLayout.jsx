import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
      <Box className="layout-root">
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,
            py: 4,
          }}
        >
          <Outlet />
        </Container>
      </Box>
    );
  }
  