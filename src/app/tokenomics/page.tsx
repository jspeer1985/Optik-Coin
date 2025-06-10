// app/tokenomics/page.tsx
'use client';
// Removed duplicate import of React

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Tokenomics</h1>
        <p className="text-lg text-gray-300 mb-10">
          Optik Coin ($OPTIK) is designed to empower community-driven growth, transparency, and long-term utility within the meme coin ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Total Supply</h2>
            <p className="text-xl font-bold">1,000,000,000 $OPTIK</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Blockchain</h2>
            <p className="text-xl font-bold">Ethereum (ERC-20)</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Smart Contract</h2>
            <p className="break-all text-sm">0x8D2e19eeA1286680eEAd323063e569197454d3CB</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Token Symbol</h2>
            <p className="text-xl font-bold">$OPTIK</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Distribution</h2>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li>🔹 40% — Public Sale</li>
          <li>🔹 20% — Ecosystem Development</li>
          <li>🔹 15% — Staking Rewards</li>
          <li>🔹 10% — Team (12-month cliff, 24-month vesting)</li>
          <li>🔹 5% — Liquidity Pool</li>
          <li>🔹 5% — Marketing & Partnerships</li>
          <li>🔹 5% — Treasury & Future Use</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Burn & Deflation</h2>
        <p className="text-gray-300 text-lg">
          Optik Coin features a deflationary burn mechanism where a portion of transaction fees are burned automatically, reducing the total supply over time and increasing scarcity.
        </p>
      </div>
    </div>
  );
}