// Versículos motivacionales para mostrar aleatoriamente
const versiculos = [
  '“Esfuérzate y sé valiente; no temas ni desmayes, porque el Señor tu Dios estará contigo dondequiera que vayas.” (Josué 1:9)',
  '“Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán.” (Isaías 43:2)',
  '“Echa sobre el Señor tu carga, y él te sustentará.” (Salmo 55:22)',
  '“Cuando siento que no valgo nada, Dios me recuerda que soy su obra maestra.” (Efesios 2:10)',
  '“Clama a mí y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.” (Jeremías 33:3)',
  '“No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré.” (Isaías 41:10)',
  '“Jehová está cerca de los quebrantados de corazón; y salva a los contritos de espíritu.” (Salmo 34:18)'
];


function mostrarVersiculo() {
    const idx = Math.floor(Math.random() * versiculos.length);
    document.getElementById('versiculo').textContent = versiculos[idx];
}

window.onload = mostrarVersiculo;