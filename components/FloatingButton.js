import * as React from "react";
import {
  Box,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


export default function FloatingButton() {
  return (
    <Box sx={{ height: 500, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Fab
        aria-label="Escrever texto"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <EditIcon />
      </Fab>
    </Box>
  );
}
