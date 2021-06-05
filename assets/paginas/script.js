//WHILE and SWITCH
let ingreseMaravilla = prompt("¡ Hola !, Ingrese una de las 7 maravillas del mundo antiguo:");
//Game: The 7 wonders of the world
while(ingreseMaravilla != "ESC" ){
    switch (ingreseMaravilla) {
        case "La Gran Pirámide de Guiza, Egipto":
            alert("¡ Bien !");
            break;
        case "Los Jardines Colgantes de Babilonia":
            alert(" ¡ Bien !");
            break;
        case " La Estatua de Zeus en Olimpia, Grecia":
            alert(" ¡ Bien !");
            break;
        case "El Templo de Artemisa, Éfeso":
            alert(" ¡ Bien !");
            break;
        case "El Mausoleo de Halicarnaso ":
            alert(" ¡ Bien !");
            break;
        case "El Coloso de Rodas, Rodas, Grecia":
            alert(" ¡ Bien !");
            break;
        case "El Faro de Alejandría, isla de Faro, Alejandría, Egipto":
            alert(" ¡ Bien !");
            break;
        default:
            alert("Mmmm.. creo que no es correcta la respuesta. Ingrese otro:")
            break;
    }
    entrada = prompt("Ingrese otra de las 7 maravillas del mundo antiguo:");
}