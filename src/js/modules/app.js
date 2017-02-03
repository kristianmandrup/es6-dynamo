import {view} from 'view.js';
import {world} from 'static.js';

class App {
  constructor(){
       this.name = 'MyApp';
       this.size = view.size;
       this.world = world;
   }
}
export let app = new App();
