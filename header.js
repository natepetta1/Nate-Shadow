const navig = document.querySelector('#navigationgoeshere');
window.addEventListener('load', function () {
  navig.innerHTML = `<nav id="linknavigation">
  <span class="mark">NATE SHADOW</span>
  <span class="links">
    <span class="dropdown">
      <a href="/Nate-Shadow/ghoul.html">Freaks</a>
      <span class="dropdown-menu">
        <a href="/Nate-Shadow/ghoul.html">The Ghoul</a>
        <a href="/Nate-Shadow/ghoul2.html">Ghoul2</a>
      </span>
    </span>
    <a href="/Nate-Shadow/index.html#story">Shadow Manor</a>
    <a href="/Nate-Shadow/index.html#music">Music</a>
  </span>
</nav>`
});
