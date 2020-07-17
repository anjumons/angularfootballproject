import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // handset breakpoints to show the menu dropdown button only when the screen size is very small
isHandset$: Observable<boolean> =this.breakpointObeserver.observe(Breakpoints.XSmall)
.pipe(
  map(result => result.matches)
);
  constructor(private breakpointObeserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
