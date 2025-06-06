
document.addEventListener("DOMContentLoaded", () => {
    const aiOutput = document.getElementById("ai-output");
    setTimeout(() => {
        aiOutput.innerHTML = `
            <p><strong>Recommended Strategy (Week):</strong></p>
            <ul>
                <li>📈 Long EUR/USD call spreads before ECB</li>
                <li>📉 Short USD/JPY futures before BoJ meeting</li>
                <li>📊 Straddle GBP/USD around inflation release</li>
            </ul>
        `;
    }, 1500);
});
