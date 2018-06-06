import { Component, OnInit, OnDestroy} from '@angular/core';
import {AppareilService} from '../services/appareil.service'
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit,OnDestroy {

  isAuth = false;
  lastUpdate = new Promise((resolve,reject) =>{
    const date = new Date();
    setTimeout(
        () => {
            resolve(date);
        },2000
    );
  });

  appareils:any[];
  appareilSubscription:Subscription;

  onAllumer(){
    this.appareilService.switchOnAll();
  };

  onEteindre(){
    if(confirm('Etes-vous sur de vouloir éteindre tous les appareils ?')){
        this.appareilService.switchOffAll();
    }else{
      return null;
    }

  };



  constructor(private appareilService: AppareilService){
      setTimeout(()=>{
        this.isAuth = true;
      },4000
    );
  };


  ngOnInit(){
      this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
        (appareils: any[]) =>{
            this.appareils = appareils;
        }
      );

      this.appareilService.emitAppareilSubject();
    };

  ngOnDestroy(){
      this.appareilSubscription.unsubscribe();  
    }

}
