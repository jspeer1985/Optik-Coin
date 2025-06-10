import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import { MetaMaskInpageProvider } from '@metamask/providers';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
// import MyButton from '../components/MyButton'; // Remove or correct this if the component exists
// Extend the global Window interface for MetaMask
import TOKEN_IMAGE from '../public/token-image.png'; // Ensure this path is correct

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const router = useRouter();

  const CONTRACT_ADDRESS = '0x8D2e19eeA1286680eEAd323063e569197454d3CB';
  const TOKEN_SYMBOL = 'OPTIK';
  const TOKEN_DECIMALS = 18;
// Removed duplicate Home function and undefined 'section' reference

  const copyContractAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    toast.info('Contract address copied to clipboard!');
  };

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' }) as string[];
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          if (Array.isArray(accounts) && accounts[0]) {
            setWalletAddress(accounts[0] as string);
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error checking wallet connection:', err.message);
        } else {
          console.error('An unknown error occurred:', err);
        }
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
        if (accounts && Array.isArray(accounts) && accounts[0]) {
          setWalletAddress(accounts[0] as string);
        }
        toast.success('Wallet connected successfully!');
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message || 'Wallet connection failed.');
          console.error(err.message);
        } else {
          toast.error('An unknown error occurred.');
          console.error(err);
        }
      }
    } else {
      toast.error('MetaMask not detected. Please install MetaMask.');
    }
  };

  const addTokenToWallet = async () => {
    if (!window.ethereum) {
      toast.error('MetaMask not detected.');
      return;
    }

    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: CONTRACT_ADDRESS,
            symbol: TOKEN_SYMBOL,
            decimals: TOKEN_DECIMALS,
            image: TOKEN_IMAGE,
          },
        },
      });

      if (wasAdded) {
        toast.success(`${TOKEN_SYMBOL} was added to your wallet!`);
      } else {
        toast.info('Token addition was cancelled.');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || 'Could not add token to wallet.');
        console.error(err.message);
      } else {
        toast.error('An unknown error occurred.');
        console.error(err);
      }
    }
  };

  const navigateToAbout = () => {
    router.push('/about');
  };

  useEffect(() => {
    checkWalletConnection();

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      } else {
        setWalletAddress('');
        setIsWalletConnected(false);
      }
    };

    if (window.ethereum?.on) {
      window.ethereum.on('accountsChanged', (accounts) => handleAccountsChanged(accounts as string[]));
    }

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', (accounts) => handleAccountsChanged(accounts as string[]));
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Optikcoin | Next-Gen Meme Coin Platform</title>
        <meta name="description" content="Discover Optikcoin, the innovative meme coin platform" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-400 p-4">
        <main className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Welcome to Optikcoin!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            The next-generation meme coin platform on Ethereum
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={connectWallet}
              className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              {isWalletConnected ? `Connected: ${walletAddress.substring(0, 6)}...` : 'Connect Wallet'}
            </button>

            <button
              onClick={addTokenToWallet}
              disabled={!isWalletConnected}
              className={`px-6 py-3 ${isWalletConnected ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-gray-400 cursor-not-allowed'} text-black font-bold rounded-full shadow-lg transition`}
            >
              Add {TOKEN_SYMBOL} to Wallet
            </button>
          </div>

          <div className="mt-8 text-white">
            <p className="mb-2">Contract Address:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="bg-black bg-opacity-30 px-3 py-2 rounded">
                {CONTRACT_ADDRESS}
              </code>
              <button
                onClick={copyContractAddress}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition"
                aria-label="Copy contract address"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={navigateToAbout}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-400 transition"
            >
              Go to About Page
            </button>
          </div>
        </main>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}
