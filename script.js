


// Declarar constantes 
const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const PESO = document.getElementById("peso");
const VOLUMEN= document.getElementById("volumen");

function HollidaySegar(peso){
    let pesoRestante=0;
    let resultado=0;
    //Definir constantes
    const FLUJO1=1500;
    const FLUJO2=1000;
    if(peso> 20){
        pesoRestante=peso-20;
        resultado= FLUJO1+(pesoRestante*20)
        return resultado;
    }
     else if(peso>10){
        pesoRestante=peso-10;
        resultado= FLUJO2+(pesoRestante*50)
        return resultado;

    }
    else{
        return resultado = peso * 100;
    }

}
function superficieCorporal(peso) {
    return ( (peso * 4) + 7) / (peso + 90);
}

// Traer el dato del input cuando se hace clic en el botón "calcular"
CALCULAR.addEventListener("click", () => {
    const peso = document.getElementById("peso").value;
    console.log("El peso ingresado es: " + peso);

    if ( peso <= 0 || isNaN(peso)) {
        ERROR.style.display = 'block'; // Mostrar el mensaje de error
        PESO.onfocus = () => {
            ERROR.style.display = 'none'; // Ocultar el mensaje de error
        }
    } else {
        // Verificar peso y realizar el cálculo correspondiente
        let resultado;

        if (peso <= 30) {
            // ingresar fórmula de Holliday-Segar
            resultado = HollidaySegar(peso);

            PESO.value = ""; // limpiar input
            console.log("El resultado del calculo es: " + resultado);

            // calcula flujo de líquido y el mantenimiento
            let fluHora = Math.round(resultado / 24);
            let mantenimiento = Math.round(fluHora * 1.5);

            // muestra en pantalla el flujo de líquido y el mantenimiento
            VOLUMEN.innerHTML= "Volumen Diario: "+resultado+ " cc/hr"
            FLU.innerHTML ="Mantenimiento: "+ fluHora + " cc/hr";
            MAN.innerHTML = "m+m/2: " + mantenimiento + " cc/hr";
            FLU.style.display = "block";
            MAN.style.display = "block";

        } else {
            // superficie corporal
            console.log(superficieCorporal(peso))
            let resultado1 = Math.round(superficieCorporal(peso) * 1500);
            let resultado2 = Math.round(superficieCorporal(peso) * 2000);

            PESO.value = ""; // limpiar el input
            console.log("El resultado de SC*1500 es: " + resultado1);
            console.log("El resultado de SC*2000 es: " + resultado2);

            // se calcula el flujo líquido y el mantenimiento
            let fluHora1 = Math.round(resultado1 / 24);
            let mantenimiento1 = Math.round(fluHora1 * 1.5);

            let fluHora2 = Math.round(resultado2 / 24);
            let mantenimiento2 = Math.round(fluHora2 * 1.5);

            // en pantalla
            VOLUMEN.innerHTML = "Volumen diario entre "+ resultado1 + " cc"+ " y "+resultado2 + " cc" ;
            VOLUMEN.style.display="block"
            FLU.style.display = "none";
            MAN.style.display = "none";
        }
    }
});

