import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6">About Optik Coin</h1>
        <p className="text-lg mb-4">
          Optik Coin (OPTIK) is a next-generation meme coin designed to revolutionize the DeFi space. With a focus on transparency, community-driven development, and innovative features, Optik Coin is more than just a cryptocurrency—it's a movement.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to empower individuals by providing them with tools to participate in decentralized finance (DeFi) while having fun. Optik Coin combines the power of blockchain technology with a vibrant community to create a unique and rewarding experience.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Deflationary tokenomics with a 3% transaction fee for development and community growth.</li>
          <li>Free AI-powered assistant for investors to make informed decisions.</li>
          <li>Staking, mining, and rewards programs to incentivize participation.</li>
          <li>Open-source codebase for transparency and community contributions.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Optik Coin?</h2>
        <p className="text-lg mb-4">
          Optik Coin is built on the Solana blockchain, ensuring fast and low-cost transactions. Our community-first approach ensures that every decision is made with the best interests of our users in mind. Whether you're a seasoned investor or new to crypto, Optik Coin has something for everyone.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Join the Community</h2>
        <p className="text-lg mb-4">
          Be a part of the Optik Coin revolution! Follow us on social media, contribute to our open-source projects, and participate in our community events. Together, we can shape the future of decentralized finance.
        </p>
        <div className="mt-8">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME/optik_token"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}