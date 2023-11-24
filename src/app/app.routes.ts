import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { GreecehopperComponent } from './components/greecehopper/greecehopper.component';
import { MonsterComponent } from './components/monster/monster.component';
import { TalksComponent } from './components/talks/talks.component';
import { StreamsComponent } from './components/streams/streams.component';

export const routes: Routes = [
  {
    path: '🐈',
    component: HomeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'greecehopperJs',
    component: GreecehopperComponent,
  },
  {
    path: 'monster',
    component: MonsterComponent,
  },
  {
    path: 'talks',
    component: TalksComponent,
  },
  {
    path: 'streams',
    component: StreamsComponent,
  },
  {
    path: 'discord',
    component: HomeComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: 'https://discord.gg/cc6vQseSUd',
    },
  },
  { path: '**', redirectTo: '/🐈', pathMatch: 'full' },
];
