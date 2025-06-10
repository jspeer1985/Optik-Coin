import React, { useState } from 'react';

export default function OptikGPTPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    // Simulate an API call to GPT
    setTimeout(() => {
      setResponse(`You asked: "${input}". Here's a GPT-powered response!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Optik GPT Assistant</h1>
        <p className="text-lg mb-8">
          Ask anything about Optik Coin, DeFi, staking, mining, or crypto basics. Our GPT-powered AI is here to help!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="w-full px-4 py-2 rounded-lg text-black"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            {loading ? 'Loading...' : 'Ask GPT'}
          </button>
        </form>
        {response && (
          <div className="mt-8 bg-white text-black p-4 rounded-lg shadow-lg">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}