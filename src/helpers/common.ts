export const replaceTokenURI = (tokenURI: string = ''): string => {
  return tokenURI?.replace('ipfs://', 'https://ipfs.io/ipfs/');
};

export const truncateText = (text: string = '', length: number = 10): string => {
  return text.length <= length ? text : text.substring(0, length) + '...';
};

export const noop = () => {};
