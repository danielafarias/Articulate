import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Alert,
  Button,
  TextField,
} from "@mui/material";
import FloatingButton from "./FloatingButton";
import { post } from "../api/Api";

export default function TextButton() {
  const [content, setContent] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [error, setError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await post(content);
      setOpen(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div>
      <FloatingButton onClick={handleClickOpen}>
        Open form dialog
      </FloatingButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Poste seu texto</DialogTitle>
        <DialogContent>
          <form onSubmit={submitHandler}>
            <Grid container direction="column" alignItems="center">
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
              <Grid item>
                <Button
                  onClick={handleClose}
                  sx={{ backgroundColor: "#082947ff" }}
                >
                  Cancelar
                </Button>
                <Button type="submit" sx={{ backgroundColor: "#082947ff" }}>
                  Postar
                </Button>
              </Grid>
              <Grid item>
                {error == false ? null : (
                  <Alert severity="error">
                    Erro ao postar — <strong>Tente novamente!</strong>
                  </Alert>
                )}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
