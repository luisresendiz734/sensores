import Distance from "./components/Distance";
import Humidity from "./components/Humidity";
import Layout from "./components/Layout";
import Temperature from "./components/Temperature";

const App = () => {
  return (
    <Layout>
      <Temperature />
      <Humidity />
      <Distance />
    </Layout>
  );
};

export default App;
