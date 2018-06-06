export class AppareilService{
  appareils = [
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

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

}
