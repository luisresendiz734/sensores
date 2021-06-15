import { makeStyles, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Base = ({ data, title, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {children}
      <Typography variant="h3">{data && data.val()}</Typography>
      <Typography variant="h5">{title}</Typography>
    </Paper>
  );
};

export default Base;
