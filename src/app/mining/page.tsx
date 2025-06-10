export default function MiningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Optik Coin Mining</h1>
        <p className="text-lg mb-8">
          Start mining Optik Coin (OPTIK) today! Our decentralized mining system is designed to be fair, transparent, and accessible to everyone. Whether you're using a browser or a mining rig, you can participate and earn rewards.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Mine Optik Coin?</h2>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>Decentralized and transparent mining rewards.</li>
            <li>Low energy consumption with efficient algorithms.</li>
            <li>Earn OPTIK tokens directly to your wallet.</li>
            <li>Support the Optik Coin network and community.</li>
          </ul>
          <button
            onClick={() => alert('Mining feature coming soon!')}
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Start Mining
          </button>
        </div>
      </div>
    </div>
  );
}