const heroes = {
  capi: {
    nombre: "Capitán América",
    poder: "Aguantar inyecciones sin morir",
  },
  iron: {
    nombre: "Ironman",
    poder: "Absurda cantidad de dinero",
  },
  spider: {
    nombre: "Spiderman",
    poder: "la mejor reaccion alergica a las picaduras de arañas",
  },
};

export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id ${id}`);
    }
  });
};

export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe un heroe con el id ${id}`);
  }
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promesa lenta"), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promesa Media"), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promesa Rapida"), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
