import { Grid } from "@material-ui/core";
import Controls from "./components/Controls";
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
        <Grid item xs={12}>
          <Controls />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;
