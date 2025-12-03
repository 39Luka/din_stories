// List.stories.js - Versión Mínima con Datos Fijos (Hardcoded)

import List from "../components/List.jsx"; 

// --- Datos de Ejemplo Fijos (Tomados directamente de peliculas.js) ---

const ACTOR_BASICO = {
    nombre: "Haley Joel Osment",
    biografia: "Haley Joel Osment es un actor estadounidense conocido por su interpretación del niño que 've gente muerta' en 'El sexto sentido'.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Haley_Joel_Osment_TIFF_2014.jpg/500px-Haley_Joel_Osment_TIFF_2014.jpg"
};

const ACTOR_DESTACADO = {
    nombre: "Tom Hanks",
    biografia: "Tom Hanks es un actor estadounidense ganador del Óscar por interpretar a Forrest Gump.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg"
};

const ACTOR_LARGO = {
    nombre: "Leonardo Sbaraglia",
    biografia: "Leonardo Sbaraglia es un actor argentino que protagoniza 'Concursante'. Su carrera se ha desarrollado exitosamente tanto en Argentina como en España, destacando por su intensidad dramática y versatilidad en roles complejos.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg/330px-Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg"
};


// --- Metadata de la Historia ---
export default {
    title: 'Components/List',
    component: List,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered', 
    },
    // Decorator para mostrar las tarjetas en fila
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', gap: '40px', padding: '20px', flexWrap: 'wrap' }}>
                <Story />
            </div>
        ),
    ],
};

// --- Historias ---

export const Default = {
    args: {
        foto: ACTOR_BASICO.imagen,
        nombre: ACTOR_BASICO.nombre,
        esNota10: false,
        children: ACTOR_BASICO.biografia,
    },
    name: 'List Item Básico',
};

export const Nota10Item = {
    args: {
        foto: ACTOR_DESTACADO.imagen,
        nombre: ACTOR_DESTACADO.nombre,
        esNota10: true,
        children: ACTOR_DESTACADO.biografia,
    },
    name: 'List Item Destacado (Nota 10)',
};

export const LongNameAndDescription = {
    args: {
        foto: ACTOR_LARGO.imagen,
        nombre: `${ACTOR_LARGO.nombre} (Protagonista de "Concursante")`,
        esNota10: false,
        children: ACTOR_LARGO.biografia,
    },
    name: 'Nombre y Descripción Largos',
};