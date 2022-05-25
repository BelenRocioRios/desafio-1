mostrarMenu();

function mostrarMenu()
{
   let opcion = 0;
   while(opcion!==3)
  {
      opcion = Number(prompt(`Ingrese una opcion:
                              1. Papas (15 peso)
                              2. Dorito (30 pesos)
                              3. Chisitos (40 pesos)
                              4. Mani (50 pesos)
                              4. Fin`));

      switch(opcion)
      {
          case 1: 
          {
              venderPapas();
              break;
          }
          case 2:
          {
              venderDorito();
              break;
          }
          case 3: 
          {
              venderChisitos();
              break;
          }
          case 4: 
          {
              venderMani();
              break;
          }
          case 5: 
          {
              alert("Gracias");
              break;
          }
          default:
              {
                  alert("Opcion Invalida");
                  break;
              }

      }
  }

}


function venderPapas(){

   cobrar(15);
   alert("Gracias por tu compra")

}

function venderDorito(){

  cobrar(30);
  alert("Gracias por tu compra")

}
function venderChisitos(){

    cobrar(40);
    alert("Gracias por tu compra")
  
  }
  function venderMani(){

    cobrar(50);
    alert("Gracias por tu compra")
  
  }

function cobrar(valorDelProducto)
{
  let dineroIngresado = 0;

  while(dineroIngresado<valorDelProducto){

      dineroIngresado+=Number(prompt(`El valor de su compra es ${valorDelProducto}
      Ingrese dinero:`));


  }

  alert(`Su cambio es: ${dineroIngresado-valorDelProducto}`)
}