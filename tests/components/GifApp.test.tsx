import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { GifApp } from "../../src/GifApp"; // Ajusta la ruta según tu proyecto
import React from "react";

describe("Probando componte <GiftApp />", () => {
  test("El el componente debe montarse por primera vez", () => {
    render(<GifApp />);
    expect(screen.getByRole("paragraph").textContent).toBe("Cargando...");
    screen.debug();
  });
});
