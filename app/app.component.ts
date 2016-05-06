import {Component} from '@angular/core';
import {EmcStashWidget} from "./emc-stash-widget.component";

@Component({
    selector: 'emc-stash-widget-app',
    directives: [EmcStashWidget],
    template: `
      <h1>Emc Stash Widget App</h1>
      <emc-stash-widget></emc-stash-widget>
    `
})
export class EmcStashWidgetApp { }
