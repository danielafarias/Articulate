import { Grid } from "@mui/material";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <img src="newspaper2.svg" className={styles.icon} />
        <Grid item>
          <h1>Articulate</h1>
        </Grid>
        <Grid item>{props.button}</Grid>
      </Grid>
    </div>
  );
}
