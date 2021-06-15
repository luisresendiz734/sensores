import { Grid } from "@material-ui/core";
import Distance from "./components/Distance";
import Humidity from "./components/Humidity";
import Layout from "./components/Layout";
import Temperature from "./components/Temperature";

const App = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Temperature />
        </Grid>
        <Grid item xs={12} md={4}>
          <Humidity />
        </Grid>
        <Grid item xs={12} md={4}>
          <Distance />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;
