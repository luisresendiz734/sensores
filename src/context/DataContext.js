import { createContext, useContext } from "react";
import { useObject } from "react-firebase-hooks/database";
import { db } from "../services/firebase";

const DataContext = createContext();

const KEYS = {
  T: "temperature",
  TH: "temperatureHistory",
  H: "humidity",
  HH: "humidityHistory",
  D: "distance",
  DH: "distanceHistory",
};

const DataProvider = ({ children }) => {
  const [temperature] = useObject(db.ref(KEYS.T));
  const [humidity] = useObject(db.ref(KEYS.H));
  const [distance] = useObject(db.ref(KEYS.D));
  const [temperatureHistory] = useObject(db.ref(KEYS.TH));
  const [humidityHistory] = useObject(db.ref(KEYS.HH));
  const [distanceHistory] = useObject(db.ref(KEYS.DH));

  return (
    <DataContext.Provider
      value={{
        temperature,
        temperatureHistory,
        humidity,
        humidityHistory,
        distance,
        distanceHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
