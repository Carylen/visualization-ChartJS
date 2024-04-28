
const ctx = document.getElementById("myChart");
const cfg = document.getElementById("myChart2");
const cfg2 = document.getElementById("myChart3");
const container = document.querySelector(".container");

// container.innerHTML = '<div class="myChart"><canvas id="myChart"></canvas></div><div class="myChart"><canvas id="myChart2"></canvas></div><div class="myChart"><canvas id="myChart3"></canvas></div>'

// container.appendChild([ctx, cfg, cfg2])
        
const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
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
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb'],
        hoverOffset: 4,
        datasets: [
            {
                label: 'Net sales',
                data: data,
                    parsing: {
                        yAxisKey: 'net'
                    }
            }, 
            {
                label: 'Cost of goods sold',
                data: data,
                parsing: {
                    yAxisKey: 'cogs'
                }
            }, 
            {
                label: 'Gross margin',
                data: data,
                parsing: {
                    yAxisKey: 'gm'
                }
            },
        ]
    },
});

new Chart(cfg,
    {
        type: 'line',
        data: {
            labels: ['One', 'Two', 'TR'],
            datasets: [
                {
                    label: 'Net sales',
                    data: data,
                        parsing: {
                            yAxisKey: 'net'
                        }
                }, 
                {
                    label: 'Cost of goods sold',
                    data: data,
                    parsing: {
                        yAxisKey: 'cogs'
                    }
                }, 
                {
                    label: 'Gross margin',
                    data: data,
                    parsing: {
                        yAxisKey: 'gm'
                    }
                },
            ]
        },
    }  
);

new Chart(cfg2,
    {
        type: 'doughnut',
        data: {
            labels: ['Jan', 'Feb', 'Mar'],
            datasets: [
                {
                    label: 'Net sales',
                    data: data.map(x => x.net)
                    // data: 
                }
                // {
                //     label: 'Cost of goods sold',
                //     data: data.map(x => x.net)
                // }, 
                // {
                //     label: 'Gross margin',
                //     data: data.map(x => x.net)
                // },
            ]
        },
    }  
); 

// let cfg = chart1

