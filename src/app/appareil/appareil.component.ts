import { Component, Input,OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';



@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

 @Input() appareilName: string;
 @Input() appareilStatus:string;
 @Input() index:number;

  constructor(private appareilService : AppareilService) {

  }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  isAllumer(){
    return this.appareilStatus === 'allumé';
  }

  onSwitch(){
    this.appareilService.switchStatus(this.index);
  }

  getColor(){
    return (this.isAllumer())?'green':'red';
  }

}
