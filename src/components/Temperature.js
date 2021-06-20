import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";

const Temperature = () => {
  const { temperature, temperatureHistory } = useData();
  console.log(temperature);
  return (
    <>
      <Base data={temperature} title="Temperatura">
        <section
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "220px",
            width: "5rem",
            margin: "0 auto",
            background: "#f2f2f2",
          }}
        >
          {temperature && (
            <div
              style={{
                width: "5rem",
                height: `${temperature.val() * 2}px`,
                background: `${
                  temperature.val() > 60
                    ? "#ED474A"
                    : temperature.val() > 30
                    ? "#FFCA3A"
                    : "#8AC926"
                }`,
                transition: "all ease .3s",
              }}
            />
          )}
        </section>
      </Base>
      <DataChart data={temperatureHistory} from={1000} />
    </>
  );
};

export default Temperature;
