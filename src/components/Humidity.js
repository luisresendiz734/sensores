import { Typography } from "@material-ui/core";
import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";

const Humidity = () => {
  const { humidity, humidityHistory } = useData();
  return (
    <>
      <Base data={humidity} title="Humedad">
        <Typography>dentro de humedad</Typography>
      </Base>
      <DataChart data={humidityHistory} from={1500} />
    </>
  );
};

export default Humidity;
