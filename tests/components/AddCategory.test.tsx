import { AddCategory } from "../../src/components/category/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import React from "react";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja del texto ", () => {
    // Se crea el componente en la pantalla
    render(<AddCategory onNewCategory={() => {}} />);
    // Se toma el input del screen
    const input = screen.getByRole("textbox");

    // Disparar el evento onSubmit con valores definidos en el target.value
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("Debe de llamar onNewCategory() si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = vi.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    // Evaluar si se ha llamado la fn
    expect(onNewCategory).toHaveBeenCalled();
    // Evaluar si se llamo solamente 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Evaluar si se llamo con el valor del input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug();
  });
  test("No debe de llamar el onNewCategory() si el input esta vacio", () => {
    const onNewCategory = vi.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
