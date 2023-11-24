import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GreecehopperComponent } from './components/greecehopper/greecehopper.component';
import { CvComponent } from './components/cv/cv.component';
import { TalksComponent } from './components/talks/talks.component';
import { MonsterComponent } from './components/monster/monster.component';
import { ErrorComponent } from './components/error/error.component';
import { TalkComponent } from './components/talks/talk/talk.component';
import { StreamsComponent } from './components/streams/streams.component';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};

@NgModule({
  declarations: [
    HomeComponent,
    GreecehopperComponent,
    CvComponent,
    TalksComponent,
    MonsterComponent,
    ErrorComponent,
    TalkComponent,
    StreamsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppComponent],
})
export class AppModule {}
