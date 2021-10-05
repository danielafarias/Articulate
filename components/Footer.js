import { Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography>
          <a
            href="https://github.com/danielafarias"
            target="_blank"
            rel="noreferrer"
          >
            &copy; 2021 danielafarias
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
