import * as React from "react";
import {
  Box,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


export default function FloatingButton(props) {
  return (
    <Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Fab
        aria-label="Escrever texto"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={props.onClick}
      >
        <EditIcon />
      </Fab>
    </Box>
  );
}
