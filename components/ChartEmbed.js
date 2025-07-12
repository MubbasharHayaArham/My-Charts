import { useState } from "react";

const timeframes = ["3M", "5M", "15M", "30M", "1H", "2H", "3H", "4H", "1D", "1W", "1M"];

const ChartEmbed = () => {
  const charts = Array.from({ length: 20 });

  return (
    <div className="p-4 space-y-4">
      {charts.map((_, index) => {
        const [selectedInterval, setSelectedInterval] = useState("1D");

        const chartSrc = `https://s.tradingview.com/widgetembed/?hideideas=1&overrides={}&enabled_features=[]&disabled_features=[]&locale=in#${JSON.stringify({
          symbol: "BITSTAMP:BTCUSD",
          frameElementId: `tv_${index}`,
          interval: "${selectedInterval}",
          range: "YTD",
          hide_side_toolbar: "0",
          allow_symbol_change: "1",
          save_image: "1",
          watchlist: "BITSTAMP:ETHUSD\u001fBYBIT:BNBUSDT",
          details: "1",
          calendar: "1",
          hotlist: "1",
          studies: "STD;EMA",
          theme: "dark",
          style: "1",
          timezone: "Etc/UTC",
          withdateranges: "1",
          studies_overrides: "{}",
          utm_source: "tradingview-widget.vercel.app",
          utm_medium: "widget_new",
          utm_campaign: "chart",
          utm_term: "BITSTAMP:BTCUSD",
          "page-uri": "tradingview-widget.vercel.app/"
        })}`;

        return (
          <details key={index} className="bg-gray-900 rounded-xl p-4">
            <summary className="cursor-pointer font-semibold text-white">
              Chart {index + 1} – Timeframe:
              <select
                value={selectedInterval}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setSelectedInterval(e.target.value)}
                className="ml-2 bg-gray-800 text-white px-2 py-1 rounded"
              >
                {timeframes.map((tf) => (
                  <option key={tf} value={tf}>
                    {tf}
                  </option>
                ))}
              </select>
            </summary>
            <iframe
              src={chartSrc}
              width="100%"
              height="500"
              frameBorder="0"
              allowTransparency={true}
              scrolling="no"
              allowFullScreen
              className="rounded-xl mt-4"
            />
          </details>
        );
      })}
    </div>
  );
};

export default ChartEmbed;