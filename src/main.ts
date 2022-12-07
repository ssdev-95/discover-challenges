import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if(window && window.innerWidth < 720 && (process.env['NODE_ENV'] === 'development')) {
	eruda.init()
	eruda.add(erudaDOM)
}
