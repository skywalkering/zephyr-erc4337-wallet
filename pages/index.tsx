import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold'>ERC4337 web wallet</h1>
      <ConnectButton />
    </div>
  );
}
