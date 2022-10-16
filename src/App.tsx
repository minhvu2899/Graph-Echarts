import { useState } from "react";
import "./App.css";
import { getOptions } from "./Chart/optionsChart";
import { ReactECharts } from "./components/ReactECharts";

function App() {
  const dataS = [60, 64, 68, 72, 76, 80, 84, 88, 92];
  const dataS1 = [55, 59, 63, 67, 71, 75, 79, 83, 87];
  const bar1 = [45, 55, 62, 63, 63, 68, 75, 79, 86];
  const bar2 = [62, 60, 72, 75, 76, 77, 85, 82, 90];
  const [dataLine1, setDataSeri] = useState<string[]>(dataS.map(String));
  const [dataLine2, setDataSeri1] = useState<string[]>(dataS1.map(String));
  const [dataBar1, setDataBar1] = useState<string[]>(bar1.map(String));
  const [dataBar2, setDataBar2] = useState<string[]>(bar2.map(String));
  const dataLength = 9;
  const option = getOptions(dataLength, dataLine1, undefined, dataBar1);
  const option1 = getOptions(
    dataLength,
    dataLine1,
    dataLine2,
    dataBar1,
    dataBar2
  );

  return (
    <div className="App">
      <div>
        <ReactECharts option={option} />
        <h5>Data Line 1</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataSeri(e.target.value.split(","))}
          value={dataLine1}
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
        <h5>Data Line 2</h5>
        <textarea
          rows={2}
          style={{ width: "60%" }}
          onChange={(e) => setDataSeri1(e.target.value.split(","))}
          value={dataLine2}
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
