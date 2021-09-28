import { Grid } from "@mui/material";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <Grid container direction="row" alignItems="center">

          <img src="newspaper.svg" className={styles.icon}/>

        <Grid item>
          <h1>Articulate</h1>
        </Grid>
      </Grid>
    </div>
  );
}
