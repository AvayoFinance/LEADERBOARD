import { useWeb3React } from '@web3-react/core';
import Connect from './Connect';
import { useAuthContext } from './AuthProvider';
export default function Account() {
  const { address } = useAuthContext();

  return (
    <Connect/>
  )
  
}


