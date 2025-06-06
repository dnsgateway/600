
document.addEventListener("DOMContentLoaded", () => {
    // Metric Cards
    const metrics = [
        { pair: "EUR/USD", rate: "1.0843", change: "+0.12%" },
        { pair: "USD/JPY", rate: "142.89", change: "-0.21%" },
        { pair: "GBP/USD", rate: "1.2711", change: "+0.18%" },
        { pair: "AUD/USD", rate: "0.6665", change: "+0.09%" }
    ];

    const container = document.getElementById("metrics-cards");
    metrics.forEach(metric => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = \`
            <h3>\${metric.pair}</h3>
            <p>Rate: \${metric.rate}</p>
            <p>Change: <strong>\${metric.change}</strong></p>
        \`;
        container.appendChild(card);
    });

    // Analytics Table
    const analytics = [
        { pair: "EUR/USD", vol: "6.2%", rateDiff: "-0.75%", event: "ECB Rate Decision" },
        { pair: "USD/JPY", vol: "7.8%", rateDiff: "+2.1%", event: "BoJ Statement" },
        { pair: "GBP/USD", vol: "5.9%", rateDiff: "-0.25%", event: "BoE Testimony" }
    ];

    const tbody = document.getElementById("analytics-table-body");
    analytics.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = \`
            <td>\${row.pair}</td>
            <td>\${row.vol}</td>
            <td>\${row.rateDiff}</td>
            <td>\${row.event}</td>
        \`;
        tbody.appendChild(tr);
    });

    // Mock AI Strategy
    const aiOutput = document.getElementById("ai-output");
    setTimeout(() => {
        aiOutput.innerHTML = \`
            <p><strong>Weekly Strategy:</strong></p>
            <ul>
                <li>📈 Long EUR/USD call spreads before ECB.</li>
                <li>📉 USD/JPY put spread to hedge BoJ volatility.</li>
                <li>⚖️ Neutral GBP/USD butterfly options for consolidation zone.</li>
            </ul>
        \`;
    }, 1000);
});
