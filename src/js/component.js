// From: https://gist.github.com/fchristant

export default class Component {

  constructor(selector) {

    let self = this;
    this._selector = selector;
    // reference to DOM element
    this.dom = !selector ? false : document.querySelector(this._selector);
    if (this.dom) {
      // store attributes of DOM element
      this.attributes = this.dom.dataset;
    }

    // observe changes to data attributes
    if ("MutationObserver" in window) {
      this._observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          self.handleMutation(mutation);
        });
      });

      this._observer.observe(this.dom, {
        attributes: true,
        childList: false,
        characterData: false
      });
    }

    // window load event. this method may have already happened before
    // we instantiated this class, therefore we call the handler directly
    // if needed
    if (app.state.isLoaded) {
      this.handleWindowLoad();
    } else {
      app.window.addEventListener('app.onWindowLoad', this.handleWindowLoad.bind(this));
    }

    // breakpoint change on window
    app.window.addEventListener('app.onModeChange', this.handleModeChange.bind(this));

    // window resize
    app.window.addEventListener('app.onResize', this.handleResize.bind(this));

    // orientation change on window
    app.window.addEventListener('app.onOrientationChange', this.handleOrientationChange.bind(this));

  }

  handleWindowLoad(e) {}
  handleModeChange(e) {}
  handleResize(e) {}
  handleOrientationChange(e) {}
  handleMutation(mutation) {
    if (mutation.type === "attributes") {
      this.attributes = this.dom.dataset;
    }
  }

}