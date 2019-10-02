//1- TODAS LAS PALABRAS QUE TENGAN UNA LONGITUD DE 7 O MAS LETRAS
let mensaje = 'habia una "vez" un perrito que cruzo y murio';
let newMensaje = mensaje.replace(/[a-z]{7,}/g, "");
console.log(newMensaje);

//EXPRESIONES QUE NO FINALIZEN CON UNA VOCAL
newMensaje = mensaje.replace(/[^aeiou\s]\b/g,""); 
console.log(newMensaje);

//LAS PALABRAS QUE INICIEN CON M DONDE LA SEGUNDA LETRA NO SEA UNA VOCAL
let mensaje2 = "habia una moto de la marca mloto";
newMensaje = mensaje2.replace(/[mM](?=[^aeiou])/g, "");
console.log(newMensaje);

//EXPRESIONES ENCERRADAS ENTRE COMILLAS
newMensaje = mensaje.replace(/".*?"|'.*?'/g, "");
console.log(newMensaje);

//IPS 
let mensajeIp = "La ip de mi laptop es 124.178.0.1 el cual es muy amplia";
newMensaje = mensajeIp.replace(/\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/g, "");
console.log(newMensaje);

//Horas
let mensajeHoras = "Ahora son las 11:49am y ya casi entro a la escuela";
newMensaje = mensajeHoras.replace(/\b\d{1,2}[:]\d{1,2}(am|pm)/g, "");
console.log(newMensaje);

//Telefonos
let mensajeTelefonos = "Mi numero de telefono es 985-106-9398 llamame";
newMensaje = mensajeTelefonos.replace(/\d{1,3}[-]\d{1,3}[-]\d{1,4} /g, "");
console.log(newMensaje);

//Correos electronicos
let mensajeCorreo = "Mi correo electronico es chimarcoantonio@gmail.com mandame correo";
newMensaje = mensajeCorreo.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+/g, "");
console.log(newMensaje);

//urls
let mensajePagina = "mi pagina web https://www.facebook.com/ e igual tengo esta pagina web https://www.google.com/";
newMensaje = mensajePagina.replace(/https:..w{3}[.].*?[.]com./g,"");
console.log(newMensaje);

//Codigo postal
let mensajeCP = "Mi codigo postal es 97780 y vivo en valladolid";
newMensaje = mensajeCP.replace(/\b\d{5}\b/g,"");
console.log(newMensaje);
