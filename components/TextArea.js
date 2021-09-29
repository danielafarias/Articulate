import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FloatingButton from '../components/FloatingButton';


export default function TextArea() {
    const [content, setContent] = React.useState("")
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
                    shrink: false
                  }}
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Canecelar</Button>
          <Button onClick={handleClose}>Postar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}