import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kick-off',
  templateUrl: './kick-off.component.html',
  styleUrls: ['./kick-off.component.css']
})
export class KickOffComponent implements OnInit {

  loading: boolean = false;

  constructor(private _router: Router) {
    
   }

  redirectKickOff(){
    this.loading = true;
    setTimeout(()=>{
      this._router.navigate(['dashboard']);
    },1500);
  }

  ngOnInit(){
    // this.redirectKickOff();
    // this.loading = false;
  }

}
