import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService{
appareilSubject = new Subject<any[]>();

 private  appareils = [];

  constructor(private httpClient : HttpClient){}

  addAppareil(name :string, status:string){
      const appareilObject = {
        id:0,
        name:'',
        status:''
      };

      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[this.appareils.length -1].id+1;

      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
  }

  emitAppareilSubject(){
      this.appareilSubject.next(this.appareils.slice());
      this.saveAppareilsToServer();
  }

 switchOnAll(){
   for(let appareil of this.appareils){
     appareil.status = 'allumé';
   }

   this.emitAppareilSubject();
 }

 switchOnOne(index: number){
   this.appareils[index].status = 'allumé';
   this.emitAppareilSubject();
 }


  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  switchStatus(index : number){
    if(this.appareils[index].status === 'allumé'){
      this.appareils[index].status = 'éteint';
    }else{
      this.appareils[index].status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  saveAppareilsToServer(){
    this.httpClient.put('https://angular-project-375fa.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      ()=>{
          console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log("Erreur : "+error);
      }
    )
  }

  getAppareilsFromServer(){
    this.httpClient.get<any[]>('https://angular-project-375fa.firebaseio.com/appareils.json')
    .subscribe(
      (response) =>{
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log("Erreur : "+error);
      }
    );
  }

}
