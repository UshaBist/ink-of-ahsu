function showPoems() {
  document.getElementById('intro').classList.remove('visible');
  document.getElementById('poems').classList.add('visible');
}

function showIntro() {
  document.getElementById('poems').classList.remove('visible');
  document.getElementById('intro').classList.add('visible');
}
