import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  needsLogin: boolean | undefined;
  _userName: string = '';

  ngOnInit() {
    this.needsLogin = !!this.route.snapshot.params['needsLogin'];
  }

  get userName(): string {
    return this._userName;
  }

  login(): void {
    this._userName = 'Max';
  }
  initDemandeConges(): void {
    this.router.navigate(['/demande']);
    window.location.reload();
  }
  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
