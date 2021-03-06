import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { MediaService } from './core/media.service';
import { LoggingService } from './core/logging/logging.service';
import { MessageService } from './core/message/message.service';
import { RequestService } from './core/request.service';

import { provideIgoStore } from './store/store.module';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/locale', '.json');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    }),
    SimpleNotificationsModule.forRoot(),
    MaterialModule.forRoot()
  ],
  exports: [
    HttpModule,
    MaterialModule,
    TranslateModule
  ],
  providers: [
    MediaService,
    LoggingService,
    MessageService,
    RequestService,
    provideIgoStore()
  ]
})

export class TestModule { }
