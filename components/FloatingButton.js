import * as React from "react";
import { Box, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";

export default function FloatingButton(props) {
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Fab
        aria-label="Escrever texto"
        sx={{ position: "absolute", right: 16, backgroundColor: "#082947ff" }}
        onClick={props.onClick}
      >
        <EditIcon />
      </Fab>
      <Fab
        aria-label="Sair"
        sx={{
          position: "absolute",
          right: 16,
          backgroundColor: "#082947ff",
          top: 60,
        }}
        onClick={logoutHandler}
      >
        <LogoutIcon />
      </Fab>
    </Box>
  );
}
