import md5 from 'crypto-js/md5';

const fetchGravatar = async (gravatarEmail) => {
  const HASH = md5(gravatarEmail).toString();
  const URL = `https://www.gravatar.com/avatar/${HASH}`;

  try {
    const response = await fetch(URL);
    const avatarURL = await response.url;
    return avatarURL;
  } catch (error) {
    console.error(error);
  }
};

export default fetchGravatar;
