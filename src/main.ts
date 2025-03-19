import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch((err)=> console.error(err));


