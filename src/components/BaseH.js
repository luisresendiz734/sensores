import { makeStyles, Typography, Paper } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    paddingBottom: "8.5rem",
  },
  number: {
    fontSize: "3rem",
  },
}));

const BaseH = ({ data, title, children }) => {
  const classes = useStyles();
  const formatValue = (value) => Number(value).toFixed(2);
  return (
    <Paper className={classes.paper}>
      {children}
      {data && (
        <AnimatedNumber
          value={data.val()}
          formatValue={formatValue}
          duration={500}
          className={classes.number}
        />
      )}
      <Typography variant="h5">{title}</Typography>
    </Paper>
  );
};

export default BaseH;
