const ctx = document.getElementById("myChart");
const cfg = document.getElementById("myChart2");
const cfg2 = document.getElementById("myChart3");
const container = document.querySelector(".container");

// container.innerHTML = '<div class="myChart"><canvas id="myChart"></canvas></div><div class="myChart"><canvas id="myChart2"></canvas></div><div class="myChart"><canvas id="myChart3"></canvas></div>'

// container.appendChild([ctx, cfg, cfg2])

const data = [
  { x: "Jan", Keisya: 100, Zahra: 10, Farahe: 20 },
  { x: "Feb", Keisya: 60, Zahra: 155, Farahe: 15 },
  { x: "Mar", Keisya: 30, Zahra: 195, Farahe: 15 },
];
// chart.canvas.
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
new Chart(ctx, {
  type: "bar",
  data: {
    labels: data.map(x => x.x),
    hoverOffset: 4,
    datasets: [
      {
        label: "Keisya",
        data: data,
        parsing: {
          yAxisKey: "Keisya",
        },
      },
      {
        label: "Zahra",
        data: data,
        parsing: {
          yAxisKey: "Zahra",
        },
      },
      {
        label: "Farahe",
        data: data,
        parsing: {
          yAxisKey: "Farahe",
        },
      },
    ],
  },
});

new Chart(cfg, {
  type: "line",
//   data: {
//     labels: data.map(month => month.x),
//     datasets: [
//       {
//         data: [10, 2, 0],
//       },
//     ],
//   },
    data: {
        labels: data.map((month) => month.x),
        datasets: [
            {
            label: 'Keisya',
            data: data,
                parsing: {
                    yAxisKey: 'Keisya'
                },
            },
            {
                label: 'Zahra',
                data: data,
                    parsing: {
                        yAxisKey: 'Zahra'
                    },
            },
            {
                label: 'Farahe',
                data: data, 
                    parsing: {
                        yAxisKey: 'Farahe'
                    }
            },
        ]
    },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(cfg2, {
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

// let cfg = chart1
