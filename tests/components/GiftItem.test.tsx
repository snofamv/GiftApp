import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { GiftItem } from "../../src/components"; // Ajusta la ruta según tu proyecto
import React from "react";

describe("Pruebas en <GifItem />", () => {
  const id = 1;
  const title = "Un gif de prueba";
  const url = "https://example.com/gif.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GiftItem id={id} title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe encontrar la imagen con el URl y el ALT indicado", () => {
    render(<GiftItem id={id} title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el titulo en la pantalla", () => {
    render(<GiftItem id={id} title={title} url={url} />);
    // expect(screen.getByText(title)).toBeTruthy;
    expect(screen.getByRole("paragraph")).toBeTruthy;
    expect(screen.getByRole("paragraph").textContent).toBe(title);
  });
});
