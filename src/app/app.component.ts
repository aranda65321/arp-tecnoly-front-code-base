import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptsServiceService } from './Commons/Services/scripts-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {


  constructor(private scriptAnimation: ScriptsServiceService) {
    this.scriptAnimation.loadScriptHeaderAnimation("particle-script", "assets/scripts/particle-animation.js")
      .then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));
  }
  ngOnDestroy(): void {
    this.scriptAnimation.removeScript("particle-script");
  }

  ngOnInit(): void {
  }

}
