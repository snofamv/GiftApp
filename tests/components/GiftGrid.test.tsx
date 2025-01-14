import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/category/GiftGrid";
import { describe, test, expect, vi } from "vitest";
import { useFetchGif } from "../../src/hooks/useFetchGif";

// Crear un mock del path del hook
vi.mock("../../src/hooks/useFetchGif");

describe("Pruebas en <GifGrid />", () => {
  const category = "One punch";
  test("Debe mostrar el loading inicialmente", () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GiftGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test("Se deben mostrar items cuando se cargan las imagenes desde useFetchGifs()", () => {
    const gifs = [
      { id: 1, title: "Saitama", url: "htttps://img.com/Saitama.jpg" },
      { id: 2, title: "Goku", url: "htttps://img.com/Goku.jpg" },
    ];
    useFetchGif.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GiftGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    // screen.debug();
  });
});
