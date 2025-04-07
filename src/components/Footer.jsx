import * as React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          background: "#2e7d32",
          color: "white",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "3rem",
          textAlign: "center",
        }}
      >
        Footer
      </Box>
    </>
  );
}
