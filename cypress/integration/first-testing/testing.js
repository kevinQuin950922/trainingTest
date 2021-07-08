const { hasUncaughtExceptionCaptureCallback } = require("process");

describe('Cuentas',function(){ //grupo de caso de pruebas
    // Nombre de la prueba y segundo parametro una funcion que contiene todos 
    // los casos de prueba

    var a =1+1;
    var b=2;
    it('Verificar suma',function(){// it van todas las pruebas, primer parametro descripcion
        //como segundo parametro recibe una funcion.
        expect(a==b).to.equal(true); // se espera que esta condicion sea verdadera
    })

    it ('Verificar resta', function(){ // nuevo caso de prueba
        expect (a-b).to.equal(0);
    })
})      