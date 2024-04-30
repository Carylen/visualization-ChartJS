const cfg = document.getElementById("myChart");
const dropdown = document.getElementById("dropdown");
// const container = document.querySelector(".container");
const title = document.getElementById("title");
// import {Chart} from 'chart.js'

title.textContent = dropdown.value + " Chart";

const datappl = [
  { x: "Jan", Keisya: 100, Zahra: 10, Farahe: 20 },
  { x: "Feb", Keisya: 60, Zahra: 155, Farahe: 15 },
  { x: "Mar", Keisya: 30, Zahra: 195, Farahe: 15 },
];

const changeType = (chart, value) => {
  if (chart.config.type != value) {
    console.log('before :', chart.config.type)
    const type = `${value}`
    chart.config.type = type
  }
  chart.update()
  console.log('now :', chart.config.type)
}

dropdown.addEventListener('change', () => {
  changeType(chart1, dropdown.value)
  title.textContent = dropdown.value + " Chart"
})

const chart1 = new Chart(cfg, {
  type: "bar",
  data: {
    labels: datappl.map((month) => month.x),
    datasets: [
      {
        label: "Keisya",
        data: datappl.map((x) => x.Keisya),
        // data: datappl,
        // parsing: {
        //   yAxisKey: "Keisya",
        // },
      },
      {
        label: "Zahra",
        data: datappl.map((x) => x.Zahra),
        // data: datappl,
        // parsing: {
        //   yAxisKey: "Zahra",
        // },
      },
      {
        label: "Farahe",
        data: datappl.map((x) => x.Farahe),
        // data: datappl,
        // parsing: {
        //   yAxisKey: "Farahe",
        // },
      },
    ],
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
  },
});

