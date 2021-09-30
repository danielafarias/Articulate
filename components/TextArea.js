import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FloatingButton from "../components/FloatingButton";

export default function TextArea() {
  const [content, setContent] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FloatingButton onClick={handleClickOpen}>
        Open form dialog
      </FloatingButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Poste seu texto</DialogTitle>
        <DialogContent>
          <TextField
            label="Escreva aqui..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            multiline={true}
            rows="8"
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ backgroundColor: "#082947ff" }}>Cancelar</Button>
          <Button onClick={handleClose} sx={{ backgroundColor: "#082947ff" }}>Postar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
