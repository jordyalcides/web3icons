import { TType, INetworkRaw, ITokenRaw, IWalletRaw } from '../../types'
import {
  getId,
  getName,
  getSymbol,
  getMarketCapRank,
  getShortName,
  getChainId,
  getNativeCoinId,
} from './icon-add-prompts'

export const addManualMetadata = async (
  type: TType,
): Promise<INetworkRaw | ITokenRaw | IWalletRaw> => {
  switch (type) {
    case 'token':
      return {
        id: await getId(),
        name: await getName(),
        symbol: await getSymbol(),
        marketCapRank: await getMarketCapRank(),
      } as ITokenRaw
    case 'network':
      return {
        id: await getId(),
        name: await getName(),
        shortname: await getShortName(),
        chainId: await getChainId(),
        nativeCoinId: await getNativeCoinId(),
      } as INetworkRaw
    case 'wallet':
      return {
        id: await getId(),
        name: await getName(),
      } as IWalletRaw
    default:
      throw new Error('Invalid type')
  }
}