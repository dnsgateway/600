
document.addEventListener("DOMContentLoaded", () => {
    // Mock Market Metrics
    const marketMetrics = [
        { name: "EUR/USD", value: "1.0850", change: "+0.20%" },
        { name: "USD/JPY", value: "142.30", change: "-0.15%" },
        { name: "GBP/USD", value: "1.2700", change: "+0.10%" }
    ];

    const metricsContainer = document.getElementById("market-metrics");
    marketMetrics.forEach(metric => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = \`
            <h3>\${metric.name}</h3>
            <p>Rate: \${metric.value}</p>
            <p>Change: \${metric.change}</p>
        \`;
        metricsContainer.appendChild(card);
    });

    // Mock Calendar Events
    const eventCalendar = document.getElementById("event-calendar");
    eventCalendar.innerHTML = "<ul><li>FOMC Meeting - June 12</li><li>ECB Rate Decision - June 18</li><li>US CPI Data - June 20</li></ul>";

    // Mock AI Insight
    const aiInsight = document.getElementById("ai-insight");
    aiInsight.innerHTML = "<p>Based on current volatility and sentiment, consider a EUR/USD straddle strategy before the FOMC meeting.</p>";

    // Mock News Feed
    const newsContainer = document.getElementById("news");
    const newsItems = [
        "USD weakens ahead of inflation data release.",
        "BOJ signals no change in monetary policy.",
        "EUR gains amid positive PMI reports."
    ];
    newsItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "news-item";
        div.textContent = item;
        newsContainer.appendChild(div);
    });
});
