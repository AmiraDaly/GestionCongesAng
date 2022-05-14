import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import {Router} from "@angular/router";
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'leave-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoggedin = false;

  constructor(private observer: BreakpointObserver, private router: Router,
              private tokenStorage: TokenStorageService) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit() {
    console.log("called");
    if(!this.tokenStorage.getToken()){
      this.router.navigate(['/login']);
    }else{
      console.log("called 2nd time");
      console.log(this.isLoggedin);
      this.isLoggedin = true;
      this.router.navigate(['/home']);

    }
  }

  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/home']);
    window.location.reload();
  }
}

