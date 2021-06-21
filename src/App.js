import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Distance from "./components/Distance";
import Humidity from "./components/Humidity";
import Layout from "./components/Layout";
import Temperature from "./components/Temperature";

const App = () => {
  return (
    <Layout>
      <Grid item xs={12}>
        <section style={{ margin: "1rem 0" }}>
          <Typography variant="h3" gutterBottom>
            Equipo 6
          </Typography>
          <Typography variant="subtitle1">Gasca León Alondra</Typography>
          <Typography variant="subtitle1">
            Resendiz Chavez Luis Fernando
          </Typography>
          <Typography variant="subtitle1">
            Sandoval Hernández Kevin Edwin
          </Typography>
        </section>
      </Grid>
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
