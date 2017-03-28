window.addEventListener('app.onReady',function() {
  app.components.load("GoogleMap").then(function(GoogleMap) {
    var newComp = document.createElement('div');
    newComp.innerHTML = '<div class="c_google-map__map"></div>';
    newComp.setAttribute('data-component','');
    newComp.setAttribute('data-component-init','');
    newComp.setAttribute('data-module','GoogleMap');
    newComp.setAttribute('data-zoom','1');
    newComp.setAttribute('id','map2');
    newComp.classList += 'c_google-map';
    document.querySelector('.clientDiv').appendChild(newComp);
    var com2 = new GoogleMap("#map2");
    com2.zoom = 2;
  });
});