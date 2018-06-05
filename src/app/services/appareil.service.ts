export class AppareilService{
  appareils = [
    {
      name : 'Machine à laver',
      status : 'éteint'
    },
    {
      name : 'Frigo',
      status : 'allumé'
    },
    {
        name : 'Ordinateur',
        status : 'allumé'
      }

  ];

 switchOnAll(){
   for(let appareil of this.appareils){
     appareil.status = 'allumé';
   }
 }

 switchOnOne(index: number){
   this.appareils[index].status = 'allumé';
 }


  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }

  switchStatus(index : number){
    if(this.appareils[index].status === 'allumé'){
      this.appareils[index].status = 'éteint';
    }else{
      this.appareils[index].status = 'allumé';
    }
  }



}
