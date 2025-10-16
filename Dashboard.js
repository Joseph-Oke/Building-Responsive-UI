// Simple Chart.js example
const ctx = document.getElementById('weeklyGraph').getContext('2d');

const weeklyChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Tasks Completed',
      data: [3, 4, 2, 5, 6, 3, 4],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#555' },
        grid: { color: '#eee' }
      },
      x: {
        ticks: { color: '#555' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

// Example: simulate updates every 5 seconds
setInterval(() => {
  weeklyChart.data.datasets[0].data.shift();
  weeklyChart.data.datasets[0].data.push(Math.floor(Math.random() * 7) + 1);
  weeklyChart.update();
}, 5000);
