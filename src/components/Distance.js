import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";
import meteorito from "../meteorito.svg";

const Distance = () => {
  const { distance, distanceHistory } = useData();
  return (
    <>
      <Base data={distance} title="Distancia">
        {distance && (
          <section>
            <figure
              style={{
                margin: "0 auto",
                height: "220px",
                width: `${50 - distance.val() / 8}%`,
                transition: "all ease .5s",
              }}
            >
              <img
                src={meteorito}
                alt="Meteorito animado"
                style={{ width: "100%", transition: "all ease .5s" }}
              />
            </figure>
          </section>
        )}
      </Base>
      <DataChart data={distanceHistory} from={2000} />
    </>
  );
};

export default Distance;
