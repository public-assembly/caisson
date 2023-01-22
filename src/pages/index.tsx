import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

import { Account } from '../components';

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <ConnectKitButton />
      {isConnected && <Account />}
    </>
  );
}

export default Page;
