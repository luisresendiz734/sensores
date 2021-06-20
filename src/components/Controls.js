import {
  FormControlLabel,
  makeStyles,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
import { useData } from "../context/DataContext";
import { useUser } from "../context/UserContext";
import { db } from "../services/firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const Controls = () => {
  const classes = useStyles();
  const { user } = useUser();
  const { motor } = useData();
  if (!user) {
    return null;
  }
  const updateMotor = () => {
    const current = motor.val();
    db.ref("motor").set(current === 0 ? 1 : 0);
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h3">Controls</Typography>
      <Typography>
        Estos controles se muestran unicamente cuando el usuario ha iniciado
        sesion
      </Typography>
      <FormControlLabel
        control={<Switch onChange={updateMotor} />}
        label="Motor"
      />
    </Paper>
  );
};

export default Controls;
