import { useState } from "react";
import "./App.css";
import { getOptions } from "./Chart/optionsChart";
import { ReactECharts } from "./components/ReactECharts";

function App() {
  const dataS = [60, 65, 70, 75, 80, 85, 90, 95, 100];
  const dataS1 = [55, 60, 65, 70, 75, 80, 85, 90, 95];
  const bar1 = [5, 8, 7, 20, 22, 50, 40, 12, 20];
  const bar2 = [2, 4, 7, 23, 25, 76, 50, 12, 20];
  const [dataSeri, setDataSeri] = useState<string[]>(dataS.map(String));
  const [dataSeri1, setDataSeri1] = useState<string[]>(dataS1.map(String));
  const [dataBar1, setDataBar1] = useState<string[]>(bar1.map(String));
  const [dataBar2, setDataBar2] = useState<string[]>(bar2.map(String));
  const dataX = [
    "Exam1",
    "Exam2",
    "Exam3",
    "Exam4",
    "Exam5",
    "Exam6",
    "Exam7",
    "Exam8",
    "Exam9",
  ];
  const option = getOptions(dataX, dataSeri, undefined, dataBar1);
  const option1 = getOptions(dataX, dataSeri, dataSeri1, dataBar1, dataBar2);
  console.log(dataSeri, dataSeri1);

  return (
    <div className="App">
      <div>
        <ReactECharts option={option} />
        <h5>Data Seri 1</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataSeri(e.target.value.split(","))}
          value={dataSeri}
        />
        <h5>Data Bar 1</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataBar1(e.target.value.split(","))}
          value={dataBar1}
        />
      </div>
      <div>
        <ReactECharts option={option1} />
        <h5>Data Seri 2</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataSeri1(e.target.value.split(","))}
          value={dataSeri1}
        />
        <h5>Data Bar 2</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataBar2(e.target.value.split(","))}
          value={dataBar2}
        />
      </div>
    </div>
  );
}

export default App;
