import dynamic from "next/dynamic";
const ChartEmbed = dynamic(() => import("../components/ChartEmbed"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold p-4">20 Persistent TradingView Charts</h1>
      <ChartEmbed />
    </div>
  );
}