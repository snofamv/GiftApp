import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en helper getGifs()", () => {
  // Test al fetch de la api
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Naruto");

    // Que sea el array mayor que 0
    expect(gifs.length).toBeGreaterThan(0);
    //Los elementos contengan la estructura esperada
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
