import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ["capi", "iron", "spider"];

const obtenerHeroesArr = async () => {
  return await Promise.all(heroesIds.map(buscarHeroe));
  //   const heroesArr = [];
  //   for (const id of heroesIds) {
  //     heroesArr.push(buscarHeroe(id));
  //   }

  //   return await Promise.all(heroesArr);
};

const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (error) {
    console.log('CATCH');
    return {
        nombre: 'Sin nombre',
        poder: 'Sin poder' 
    }
  }
};

export { obtenerHeroesArr, obtenerHeroeAwait };
