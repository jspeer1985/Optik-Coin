import React from 'react';

export default function WhitePaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Optik Coin White Paper</h1>
        <p className="text-lg mb-8">
          Discover the vision, mission, and technical details behind Optik Coin. Our white paper outlines everything you need to know about our project, including tokenomics, features, and future plans.
        </p>
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          📄 Download White Paper
        </a>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What’s Inside?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Introduction to Optik Coin</li>
            <li>Tokenomics and Fee Structure</li>
            <li>Staking, Mining, and Rewards Programs</li>
            <li>Roadmap and Future Plans</li>
            <li>Community and Governance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}