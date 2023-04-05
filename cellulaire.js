class cellulares {
  constructor(color,peso,rdp,rdc,ram){
     this.color=color;
     this.peso=peso;
     
     this.resolucionDePantalla = rdp;
     this.resolucionDeCamara= rdc;
     this.ram= ram;
     this.on= false;
     //this.off= true;no lo necesitamos
    }
    //modo prender:
    clickBotonPrender(){
      if(this.on == false) {
        alert('cellulaire en " On "');
        this.on= true;
      }
      else{
        alert('cell "OFF"');
        this.on = false;
      }
    }
    //reinicializar:
    clickBotonRenicializar(){
    if (this.on == true) {
      alert('Reinicializando el Cell')
    }
    else{
      alert('El cellulaire esta en OFF')
    }
  }
  
  //tomar Foto:
  tomarFoto(){
    alert(`la resolucion de la foto es: ${this.resolucionDePantalla}`)
  }
  //grabar video:
  grabarVideo() {
    alert(`grabando video en ${this.resolucionDeCamara}`)
  }
  mobileInformacion(){
    return `
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Resolucion Pantalla: <b>${this.resolucionDePantalla}</b><br>
    Resolucion Camara: <b>${this.resolucionDeCamara}</b><br>
    Memoria Ram: <b>${this.ram}</b><br>
    `;
    
  }
}

cellula1= new cellulares('rojo','120g','5"','Full HD','2GB');
cellula2= new cellulares('negro','140g','7"','Full HD','1GB');
cellula3= new cellulares('blanco','130g','5.5"','Full HD','2GB');
//vamos a llamarala por que tiene un "return":
document.write(`
   ${cellula1.mobileInformacion()} <br>
   ${cellula2.mobileInformacion()} <br>
   ${cellula3.mobileInformacion()}
`)
   


//vamos a crear METODOS:
// prender(){
//   if(this.on == false) {
//     alert('cellulaire On');
//     this.on= true
//   }
//   else{
//     alert('EL CELULLAIRE ESTA ENCENDIDO')
//   }
// }
// //lo mismo por off
// apagar(){
//   if(this.off == true) {
//     alert('cellulaire Off');
//     this.off= false
//   }
//   else{
//     alert('el cell ESTA "APAGADO"')
//   }
// }