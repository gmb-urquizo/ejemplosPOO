function Persona(primerNombre) {
    this.primerNombre = primerNombre;
  }
  
  Persona.prototype.caminar = function() {
    alert("Estoy caminando!");
  };
  Persona.prototype.diHola = function(){
    alert("Hola, Soy" + this.primerNombre);
  };
  
  function Estudiante(primerNombre, asignatura) {
 
    Persona.call(this, primerNombre);

  };

  Estudiante.prototype = Object.create(Persona.prototype);   

  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.diHola = function(){
    alert("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
  };
  
  Estudiante.prototype.diAdios = function() {
    alert("¡ Adios !");
  };
  
  var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
  estudiante1.diHola();    
  estudiante1.caminar();   
  estudiante1.diAdios();   