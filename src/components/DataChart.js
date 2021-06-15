import { makeStyles, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
}));

const DataChart = ({ data, from }) => {
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (!data) return;

    const values = data.val();
    const cd = values.map((v, i) => ({ x: i, y: v }));
    setChartData(cd);
  }, [data]);
  return (
    <>
      {chartData && chartData.length > 0 && (
        <Paper className={classes.paper}>
          <VictoryChart
            height={250}
            animate={{
              duration: 2200,
              onLoad: { duration: from },
            }}
          >
            <VictoryLine interpolation="monotoneX" data={chartData} />
            <VictoryScatter size={4} data={chartData} />
          </VictoryChart>
        </Paper>
      )}
    </>
  );
};

export default DataChart;
