
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('strategyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'EUR/USD',
        data: [1.07, 1.08, 1.076, 1.081, 1.0843],
        borderColor: '#facc15',
        backgroundColor: 'transparent',
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
});
