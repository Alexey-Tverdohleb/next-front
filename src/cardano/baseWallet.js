import Loader from './helpers/loader.js';
import { fromHex, toHex, valueToAssets } from './helpers/utils.js';

export const cardanoInit = async () => {
  await Loader.load();
};

export async function getWalletAddress(wallet) {
  const walletAddress = Loader.Cardano.Address.from_bytes(
    fromHex((await wallet.getUsedAddresses())[0])
  );

  const bechAddress = walletAddress.to_bech32();
  return bechAddress;
}

export async function getAdaBalance(wallet) {
  if (!wallet) {
    return 0;
  }
  const valueHex = await wallet.getBalance();
  const value = Loader.Cardano.Value.from_bytes(fromHex(valueHex));
  const lovelace = parseFloat(value.coin().to_str()) / 1000000;
  return lovelace;
}

export async function getAllTokenBalances(wallet) {
  if (!wallet) {
    return {};
  }
  const valueHex = await wallet.getBalance();
  const value = Loader.Cardano.Value.from_hex(valueHex);

  const assets = valueToAssets(value);
  return assets;
}

export async function getTokenBalance(wallet, policyId, tokenName) {
  if (!wallet) {
    return '';
  }

  const valueHex = await wallet.getBalance();
  const value = Loader.Cardano.Value.from_hex(valueHex);
  if (!value.multiasset()) {
    return '0';
  }

  const scriptHashPolicyId = Loader.Cardano.ScriptHash.from_hex(policyId);
  const policy = value.multiasset().get(scriptHashPolicyId);

  if (policy) {
    const assetName = Loader.Cardano.AssetName.new(fromHex(tokenName));
    const quantity = policy.get(assetName);
    return quantity ? quantity.to_str() : '0';
  }

  return '0';
}

export async function getAdaHandles(wallet) {
  if (!wallet) {
    return undefined;
  }

  const valueHex = await wallet.getBalance();
  const value = Loader.Cardano.Value.from_bytes(fromHex(valueHex));
  if (!value.multiasset()) {
    return undefined;
  }

  const scriptHashPolicyId = Loader.Cardano.ScriptHash.from_bytes(
    fromHex('f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a')
  );
  const policy = value.multiasset().get(scriptHashPolicyId);

  if (policy) {
    let names = [];

    for (let i = 0; i < policy.keys().len(); i++) {
      names.push(new TextDecoder().decode(policy.keys().get(i).name()));
    }

    // which order should we define?
    names.sort(function (a, b) {
      return (
        a.length - b.length || // sort by length, if equal then
        a.localeCompare(b)
      ); // sort by dictionary order
    });
    return names;
  }

  return undefined;
}

export async function getPublicKeyHash(address, encoding = 'hex') {
  switch (encoding) {
    case 'hex':
      address = Loader.Cardano.Address.from_bytes(fromHex(address));
      break;
    case 'bech32':
      address = Loader.Cardano.Address.from_bech32(address);
      break;
  }

  const walletAddress = Loader.Cardano.BaseAddress.from_address(address);

  if (!walletAddress) {
    return undefined;
  }

  var oCreator = walletAddress.payment_cred().to_keyhash().to_bytes();
  oCreator = toHex(oCreator);

  return oCreator;
}

export async function getStakeKeyHash(address, encoding = 'hex') {
  switch (encoding) {
    case 'hex':
      address = Loader.Cardano.Address.from_bytes(fromHex(address));
      break;
    case 'bech32':
      address = Loader.Cardano.Address.from_bech32(address);
      break;
  }
  const walletAddress = Loader.Cardano.BaseAddress.from_address(address);

  if (!walletAddress) {
    return undefined;
  }

  var oCreator = walletAddress.stake_cred().to_keyhash().to_bytes();
  oCreator = toHex(oCreator);

  return oCreator;
}

export async function addressToHex(address) {
  return Loader.Cardano.Address.from_bech32(address).to_hex();
}
