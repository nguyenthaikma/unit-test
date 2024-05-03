import ReactApexChart from "react-apexcharts";

import "./App.css";

function App() {
  const configChart = {
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        offsetY: -8,
        background: {
          borderRadius: 9999,
          padding: 6,
        },
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 6,
        showNullDataPoints: false,
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      colors: ['#77B6EA', '#545454'],
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <body data-theme="light" className="App">
      <ReactApexChart
        options={configChart.options}
        series={configChart.series}
        height={350}
      />
    </body>
  );
}

export default App;
