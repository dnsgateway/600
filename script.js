
document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Market Metrics
    const marketMetrics = [
        { name: "EUR/USD", value: "1.0850", change: "+0.20%" },
        { name: "USD/JPY", value: "142.30", change: "-0.15%" },
        { name: "GBP/USD", value: "1.2700", change: "+0.10%" },
        { name: "AUD/USD", value: "0.6670", change: "+0.05%" },
    ];

    const metricsContainer = document.getElementById("market-metrics");
    marketMetrics.forEach(metric => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = \`
            <h3>\${metric.name}</h3>
            <p>Rate: \${metric.value}</p>
            <p>Change: <strong>\${metric.change}</strong></p>
        \`;
        metricsContainer.appendChild(card);
    });

    // Calendar Events
    const eventCalendar = document.getElementById("event-calendar");
    eventCalendar.innerHTML = "<ul><li>📌 FOMC Meeting - June 12</li><li>📌 ECB Rate Decision - June 18</li><li>📌 US CPI Data - June 20</li><li>📌 BoE Policy Update - June 25</li></ul>";

    // AI Strategy Insight
    const aiInsight = document.getElementById("ai-insight");
    aiInsight.innerHTML = "<p>📈 <strong>Strategy:</strong> Consider a long straddle on EUR/USD ahead of the FOMC announcement, given rising volatility and mixed sentiment from news sources.</p>";

    // Market News
    const newsContainer = document.getElementById("news");
    const newsItems = [
        "USD weakens ahead of CPI data; investors await clarity.",
        "ECB hints at possible policy tightening this summer.",
        "BoJ maintains dovish stance, yen remains pressured.",
        "US retail sales beat expectations, boosting dollar sentiment."
    ];
    newsItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "news-item";
        div.innerHTML = "<i class='fas fa-bolt'></i> " + item;
        newsContainer.appendChild(div);
    });

    // Navigation interactivity
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".nav-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
