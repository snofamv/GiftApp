import { useFetchGif } from "../../src/hooks/useFetchGif";
import { waitFor, renderHook, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial del hook", () => {
    const { result } = renderHook(() => useFetchGif("One punch"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo de imagenes y isLoading debe ser False", async () => {
    const { result } = renderHook(() => useFetchGif("One punch"));

    // Esperar hasta que el estado se actualice
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
