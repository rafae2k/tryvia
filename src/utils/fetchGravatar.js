import md5 from 'crypto-js/md5';

const getGravatar = (gravatarEmail) => {
  const HASH = md5(gravatarEmail).toString();
  const URL = `https://www.gravatar.com/avatar/${HASH}`;
  return URL;
};

export default getGravatar;
