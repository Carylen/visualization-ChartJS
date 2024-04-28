const cfg = document.getElementById("myChart");
const dropdown = document.getElementById("dropdown");
const container = document.querySelector(".container");
const title = document.getElementById("title")
import {Chart} from 'chart.js';

title.textContent = dropdown.value + " Chart"


const data = [
  { x: "Jan", Keisya: 100, Zahra: 10, Farahe: 20 },
  { x: "Feb", Keisya: 60, Zahra: 155, Farahe: 15 },
  { x: "Mar", Keisya: 30, Zahra: 195, Farahe: 15 },
];

dropdown.addEventListener("change", () => {
    // calling function for change 'TypeOfChart'
    changeType(dropdown.value)
    // calling function for change Title on Card, based on 'type of chart'
    changeTitle(dropdown.value)
  let con = dropdown.value;
  console.log(con);
});

const changeTitle = (value) => {
    title.textContent = value + " Chart"
}

const changeType = (value) => {
  if (chart1.config.type != value) {
    const type = `${value}`;
    chart1.config.type = type;
    chart1.update();
    chart1.resize()
  }
//   console.log(chart1.config.type);
};

const chart1 = new Chart(cfg, {
  type: "doughnut",
  data: {
    labels: data.map((month) => month.x),
    datasets: [
      {
        label: "Keisya",
        data: data.map((x) => x.Keisya),
      },
      {
        label: "Zahra",
        data: data.map((x) => x.Zahra),
      },
      {
        label: "Farahe",
        data: data.map((x) => x.Farahe),
      },
    ],
  },
});

// window.addEventListener("afterprint", () => {
//   chart1.resize();
// });

// let cfg = chart1
