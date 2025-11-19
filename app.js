
// Trivia orientada a 6 oportunidades
const oportunidades = [
    'Fundacion Por un mañana mejor en Bogotá, Colombia',
    'Instituto Solidare en Recife, Brasil',
    'kinderpark en Mansoura, Egipto',
    'Liberamente en San Cosmo, Italia',
    'Fundacion Ronald McDonald en Ciudad de México, México',
    'Yakari en Cusco, Perú'
];

// Imagen grande para cada oportunidad (local)
const imgOportunidad = [
    'img/futuromejor.jpg',
    'img/institutosolidare.png',
    'img/kinderpark.jpg',
    'img/liberamente.jpg',
    'img/ronaldmcdonald.jpg',
    'img/yakari.jpg'
];

// Descripciones finales para cada oportunidad (se muestran en el resultado)
const descripcionesOportunidad = [
    `<strong>ODS 4:</strong> Ofrece orientación y formación en valores, convivencia y un buen uso de tiempo libre, atención alimentaria, apoyo escolar, deportivo, recreativo y cultural a los niños de la comunidad, durante las jornadas alternas a la escolar. <br><br> Tu codigo de descuento es: <strong>20%COLOMBIA</strong>`,
    `<strong>ODS 4:</strong> Su misión es empoderar a niños, jóvenes y familias mediante programas de socioeducación, desarrollo económico solidario y defensa de derechos. A través de la formación ciudadana y el emprendimiento, busca construir autonomía y un futuro más justo. <br><br> Tu codigo de descuento es: <strong>20%BRASIL</strong>`,
    `<strong>ODS 4:</strong> Su misión principal es proporcionar un entorno seguro, enriquecedor y divertido donde los niños puedan crecer, aprender y desarrollar habilidades sociales y cognitivas. Buscan fomentar la creatividad y el aprendizaje lúdico. <br><br> Tu codigo de descuento es: <strong>20%EGIPTO</strong>`,
    `<strong>ODS 10:</strong> "Liberamente" es una asociación italiana dedicada a defender los derechos civiles y humanos, y promover la inclusión social y el diálogo intercultural. Su misión se centra en crear un modelo de sociedad solidaria a través de la acogida e integración de solicitantes de asilo y refugiados. <br><br> Tu codigo de descuento es: <strong>20%ITALIA</strong>`,
    `<strong>ODS 17:</strong> Se dedica a apoyar la salud y el bienestar de los niños, manteniendo a las familias unidas durante tratamientos médicos complejos. Su misión se centra en proporcionar un "hogar lejos del hogar" para niños de 0 a 18 años. <br><br> Tu codigo de descuento es: <strong>20%MEXICO</strong>`,
    `<strong>ODS 4:</strong> Es una asociación cultural y educativa en Cusco, Perú, dedicada a transformar el futuro de niños y jóvenes a través de la educación, la cultura y el liderazgo. Se centra en valorar los intereses comunitarios mediante acciones recreativas y culturales, fomentando el desarrollo personal y la formación de líderes seguros y creativos. <br><br> Tu codigo de descuento es: <strong>20%PERU</strong>`
];

// Imágenes genéricas (locales)
const imgOpciones = [
    'img/ods3.jpg',
    'img/ods4.jpg',
    'img/ods8.jpg',
    'img/ods10.jpg',
    'img/ods13.jpg',
    'img/ods17.png',
    'img/tropical.jpg',
    'img/frio.jpg',
    'img/soleado.jpg',
    'img/lluvioso.jpg',
    'img/seco.jpg',
    'img/idiomas.jpg',
    'img/amigos.jpg',
    'img/aprender.jpg',
    'img/ayudar.jpg',
    'img/explorar.jpg',
    'img/ciudades.jpg',
    'img/comidas.jpg',
    'img/relax.jpg',
    'img/viajar.jpg'

];

const preguntas = [
    {
        texto: '¿Qué tipo de problemática te mueve más?',
        opciones: [
            {txt: 'Educación y enseñanza', puntaje: 2, oportunidad: 1, img: imgOpciones[1]},
            {txt: 'Salud pública', puntaje: 1, oportunidad: 4, img: imgOpciones[0]},
            {txt: 'Medio ambiente y sustentabilidad', puntaje: 1, oportunidad: 0, img: imgOpciones[4]},
            {txt: 'Emprendimiento y liderazgo', puntaje: 1, oportunidad: 5, img: imgOpciones[2]},
            {txt: 'Alianzas entre organizaciones', puntaje: 1, oportunidad: 4, img: imgOpciones[5]},
            {txt: 'Desigualdad social', puntaje: 2, oportunidad: 3, img: imgOpciones[3]}
        ]
    },
    {
        texto: 'Si tuvieras que elegir uno de estos climas, ¿cuál preferirías?',
        opciones: [
            {txt: 'Tropical y cálido', puntaje: 1, oportunidad: 1, img: imgOpciones[6]},
            {txt: 'Frío y nevado', puntaje: 1, oportunidad: 5, img: imgOpciones[7]},
            {txt: 'Templado y soleado', puntaje: 1, oportunidad: 4, img: imgOpciones[8]},
            {txt: 'Húmedo y lluvioso', puntaje: 1, oportunidad: 0, img: imgOpciones[9]},
            {txt: 'Seco y desértico', puntaje: 1, oportunidad: 2, img: imgOpciones[10]}
        ]
    },
    {
        texto: '¿Te gusta aprender nuevos idiomas?',
        opciones: [
            {txt: 'Sí, mucho, pero aun no se', puntaje: 2, oportunidad: 1, img: imgOpciones[11]},
            {txt: 'Sí, pero me cuesta', puntaje: 1, oportunidad: 4, img: imgOpciones[11]},
            {txt: 'No, prefiero mi idioma', puntaje: 1, oportunidad: 5, img: imgOpciones[11]},
            {txt: 'Se inglés básico y me gustaria mejorarlo', puntaje: 1, oportunidad: 2, img: imgOpciones[11]},
            {txt: 'Ya se varios, me encanta', puntaje: 2, oportunidad: 3, img: imgOpciones[11]}
        ]
    },
    {
        texto: '¿Qué es lo que más disfrutas de hacer en un viaje?',
        opciones: [
            {txt: 'Conocer gente nueva', puntaje: 1, oportunidad: 2, img: imgOpciones[12]},
            {txt: 'Aprender cosas nuevas', puntaje: 1, oportunidad: 3, img: imgOpciones[13]},
            {txt: 'Ayudar en proyectos sociales', puntaje: 1, oportunidad: 4, img: imgOpciones[14]},
            {txt: 'Explorar la naturaleza', puntaje: 1, oportunidad: 0, img: imgOpciones[15]},
            {txt: 'Descubrir ciudades y cultura', puntaje: 1, oportunidad: 2, img: imgOpciones[16]},
            {txt: 'Probar comida local', puntaje: 1, oportunidad: 5, img: imgOpciones[17]},
            {txt: 'Relajarme', puntaje: 1, oportunidad: 1, img: imgOpciones[18]}
        ]
    },
    {
        texto: '¿En qué época del año te gusta viajar?',
        opciones: [
            {txt: 'Vacaciones de Verano', puntaje: 0, oportunidad: 1, img: imgOpciones[19]},
            {txt: 'Vacaciones de Invierno', puntaje: 0, oportunidad: 1, img: imgOpciones[19]},
            {txt: 'Cuando termine mi carrera', puntaje: 1, oportunidad: 3, img: imgOpciones[19]},
            {txt: 'Cuando me den vacaciones del trabajo', puntaje: 0, oportunidad: 5, img: imgOpciones[19]},
            {txt: 'En cualquier momento del año', puntaje: 0, oportunidad: 0, img: imgOpciones[19]}
        ]
    }
];

const triviaStep = document.getElementById('triviaStep');
// Botones de navegación eliminados
const result = document.getElementById('result');

let paso = 0;
let respuestas = [];
let puntajes = Array(oportunidades.length).fill(0);

function renderPregunta(){
    const pregunta = preguntas[paso];
        triviaStep.innerHTML = `<div class="trivia-question">${pregunta.texto}</div>` +
        `<div class="options-grid">` +
        pregunta.opciones.map((op,i) =>
            `<button type="button" class="option-btn${respuestas[paso]===i?' selected':''}" data-idx="${i}">
                <img src="${op.img}" alt="${op.txt}">
                <span>${op.txt}</span>
            </button>`
        ).join('') + `</div>`;
    // Acciones de navegación eliminadas

    // Selección visual y lógica
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.onclick = () => {
            respuestas[paso] = parseInt(btn.getAttribute('data-idx'));
            // Avanzar automáticamente
            if(paso < preguntas.length-1){
                paso++;
                renderPregunta();
            }else{
                calcularResultado();
            }
        };
    });
}

// Funciones avanzar y retroceder eliminadas

function calcularResultado(){
    puntajes = Array(oportunidades.length).fill(0);
    respuestas.forEach((resp, idx) => {
        const op = preguntas[idx].opciones[resp];
        puntajes[op.oportunidad] += op.puntaje;
    });
    const maxPuntaje = Math.max(...puntajes);
    const idxGanadora = puntajes.indexOf(maxPuntaje);
    const ganadora = oportunidades[idxGanadora];
    const imgGrande = imgOportunidad[idxGanadora];
    triviaStep.innerHTML = `
        <div class="field" style="text-align:center;">
            <strong>¡Tu voluntariado ideal es:</strong><br>
            <span style="color:#0b66c3;font-size:1.2rem">${ganadora}</span>
        </div>
        <div style="margin:18px 0;text-align:center;">
            <img src="${imgGrande}" alt="${ganadora}" style="max-width:100%;width:340px;height:auto;border-radius:16px;box-shadow:0 4px 24px rgba(11,102,195,0.13);">
        </div>
        <div style="margin-top:12px;padding:12px 14px;background:#f6fbff;border-radius:10px;color:var(--muted);text-align:left;">${descripcionesOportunidad[idxGanadora]}</div>
        <div style="text-align:center;margin-top:22px;">
            <a href="https://podio.com/webforms/30454927/2569796" target="_blank" class="btn-link" style="display:inline-block;padding:12px 28px;background:#0b66c3;color:#fff;font-weight:600;border-radius:8px;text-decoration:none;box-shadow:0 2px 8px rgba(11,102,195,0.10);transition:background .2s;">Ir al formulario de contacto</a>
        </div>
    `;
    triviaActions.style.display = 'none';
    result.style.display = 'block';
    result.innerHTML = '<button type="button" id="restartBtn">Volver a empezar</button>';
    document.getElementById('restartBtn').onclick = reiniciar;
}

function reiniciar(){
    paso = 0;
    respuestas = [];
    puntajes = Array(oportunidades.length).fill(0);
    result.style.display = 'none';
    renderPregunta();
}
// Inicializar trivia
renderPregunta();