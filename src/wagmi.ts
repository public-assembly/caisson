// ConnectKit
import { getDefaultClient } from 'connectkit';
// wagmi
import { createClient, configureChains } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { provider, chains } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({ apiKey: alchemyId as string }),
    infuraProvider({ apiKey: infuraId as string }),
    publicProvider(),
  ]
);

export const client = createClient(
  getDefaultClient({
    appName: 'Flexible DAO Interfaces',
    autoConnect: true,
    provider,
  })
);
