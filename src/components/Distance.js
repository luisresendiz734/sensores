import { Typography } from "@material-ui/core";
import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";

const Distance = () => {
  const { distance, distanceHistory } = useData();
  return (
    <>
      <Base data={distance} title="Distancia">
        <Typography>dentro de distance</Typography>
      </Base>
      <DataChart data={distanceHistory} from={2000} />
    </>
  );
};

export default Distance;
