import { Typography } from "@material-ui/core";
import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";

const Temperature = () => {
  const { temperature, temperatureHistory } = useData();
  return (
    <>
      <Base data={temperature} title="Temperatura">
        <Typography>dentro de temperature</Typography>
      </Base>
      <DataChart data={temperatureHistory} from={1000} />
    </>
  );
};

export default Temperature;
