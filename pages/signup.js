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
import { register } from "../api/Api";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [error, setError] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await register(username, password);
      router.push("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div>
      <Head>
        <title>Articulate - Cadastro</title>
        <meta name="description" content="Cadastro da aplicação Articulate" />
        <link rel="icon" href="/newspaper2.svg" />
      </Head>

      <Header />

      <main>
        <form onSubmit={submitHandler}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">
                <b>Registrar-se</b>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Usuário"
                variant="filled"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Senha"
                variant="filled"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button sx={{ backgroundColor: "#082947ff" }} type="submit">
                Confirmar
              </Button>
            </Grid>

            {error == false ? null : (
              <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                Houve um erro ao realizar o cadastro —{" "}
                <strong>Tente novamente!</strong>
              </Alert>
            )}
          </Grid>
        </form>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
