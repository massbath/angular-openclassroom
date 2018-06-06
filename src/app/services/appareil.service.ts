import {Subject} from 'rxjs/Subject';


export class AppareilService{
appareilSubject = new Subject<any[]>();

 private  appareils = [
    {
      id :1,
      name : 'Machine à laver',
      status : 'éteint'
    },
    {
      id :2,
      name : 'Frigo',
      status : 'allumé'
    },
    {
        id :3,
        name : 'Ordinateur',
        status : 'allumé'
      }

  ];
  emitAppareilSubject(){
      this.appareilSubject.next(this.appareils.slice());
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

}
