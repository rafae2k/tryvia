function decodeHtml(question) {
  const decodedText = document.createElement('textarea');
  decodedText.innerHTML = question;
  return decodedText.value;
}

export default decodeHtml;
