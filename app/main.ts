import {bootstrap}    from '@angular/platform-browser-dynamic';
import {EmcStashApp} from './components/EmcStashApp';
import {HTTP_PROVIDERS} from '@angular/http';
import {StatsService} from './service/StatsService';

bootstrap(EmcStashApp, [ HTTP_PROVIDERS, StatsService ]);
