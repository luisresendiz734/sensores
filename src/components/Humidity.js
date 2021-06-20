import { useData } from "../context/DataContext";
import BaseH from "./BaseH";
import DataChart from "./DataChart";
import { CircleProgress } from "react-gradient-progress";

const Humidity = () => {
  const { humidity, humidityHistory } = useData();
  return (
    <>
      <BaseH data={humidity} title="Humedad">
        <section
          style={{
            width: "100%",
            transform: "rotate(-90deg)",
            marginBottom: "-13rem",
          }}
        >
          {humidity && (
            <CircleProgress
              percentage={humidity.val()}
              strokeWidth={20}
              primaryColor={["#5E4AE3", "#23C9FF"]}
              width={300}
              fontColor="#fff"
              secondaryColor="#f2f2f2"
            />
          )}
        </section>
      </BaseH>
      <DataChart data={humidityHistory} from={1500} />
    </>
  );
};

export default Humidity;
