import Component from './component.js';
class GoogleMap extends Component {

  constructor(selector) {

    super(selector);

    // data attributes
    this._lat = parseFloat(this.attributes.lat || 0);
    this._lng = parseFloat(this.attributes.lng || 0);
    this._zoom = parseFloat(this.attributes.zoom || 8);

    // API/map load status
    this._api = false;
    this._map = false;

    // load the maps API
    app.utilities.loadScriptEvent('https://maps.googleapis.com/maps/api/js?v=3.exp&key=' + app.config.mapsKey, "GoogleMap.API.Loaded");
    app.window.addEventListener('GoogleMap.API.Loaded', this.initMap.bind(this));

  }

  initMap() {
    this._api = true;
    this._map = new google.maps.Map(this.dom.querySelector('.c_google-map__map'), {
      center: {
        lat: this._lat,
        lng: this._lng
      },
      scrollwheel: false,
      zoom: this._zoom
    });
  }

  get lat() {
    return this._lat;
  }
  set lat(newLat) {
    if (newLat) {
      this._lat = newLat;
      this.centerMap(this._lat, this._lng);
    }
  }

  get lng() {
    return this._lat;
  }
  set lng(newLng) {
    if (newLng) {
      this._lng = newLng;
      this.centerMap(this._lat, this._lng);
    }
  }

  get zoom() {
    return this._zoom;
  }
  set zoom(newZoom) {
    if (newZoom) {
      this._zoom = newZoom;
      this.centerMap(this._lat, this._lng);
      this.zoomMap(this._zoom);
    }
  }

  centerMap(pLat, pLng) {
    if (this._map) {
      var myLatlng = {
        lat: pLat,
        lng: pLng
      };
      this._map.setCenter(myLatlng);
    }
  }

  zoomMap(pZoomLevel) {
    if (this._map) {
      this._map.setZoom(pZoomLevel);
    }
  }

  handleChange(e) {
    if (this.dom.clientWidth <= 300) {
      this.zoom = 3;
    }
    if (this.dom.clientWidth > 300) {
      this.zoom = parseFloat(this.attributes.zoom);
    }
  }

  handleWindowLoad(e) {}

  handleModeChange(e) {
    this.handleChange(e);
  }

  handleResize(e) {
    this.handleChange(e);
  }

  handleOrientationChange(e) {
    this.handleChange(e);
  }

  handleMutation(mutation) {
    this.lat = parseFloat(this.attributes.lat);
    this.lng = parseFloat(this.attributes.lng);
    this.zoom = parseFloat(this.attributes.zoom);
  }

}

export {
  GoogleMap
}