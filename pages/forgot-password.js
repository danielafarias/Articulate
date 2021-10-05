import React from "react";
import Head from "next/head";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { forgotPassword } from "../api/Api";

export default function ForgotPassword() {
  const [username, setUsername] = React.useState("");
  const [response, setResponse] = React.useState("");

  const clickHandler = (e) => {
    forgotPassword(username).then((res) => setResponse(res));
  };

  console.log(response);

  return (
    <div>
      <Head>
        <title>Articulate - Recuperar senha</title>
        <meta
          name="description"
          content="Recuperar senha da aplicação Articulate"
        />
        <link rel="icon" href="/newspaper2.svg" />
      </Head>

      <Header />

      <main>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h5">
              <b>Recuperar senha</b>
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              required
              label="Usuário"
              helperText="Informe seu usuário"
              variant="filled"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{ backgroundColor: "#082947ff" }}
              onClick={clickHandler}
            >
              Confirmar
            </Button>
          </Grid>
          {response == "" ? null : (
            <Alert severity="success">
              <AlertTitle>Senha</AlertTitle>
              Senha recuperada com sucesso. Sua senha é:{" "}
              <strong>{response.password}</strong>
            </Alert>
          )}
        </Grid>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
