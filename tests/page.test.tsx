import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { renderToStaticMarkup } from "react-dom/server";

import Home from "@/app/page";
import RootLayout from "@/app/layout";

jest.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
  }),
}));

describe("Home page", () => {
  it("renders the main hero content", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("RestoFlow");
    expect(html).toContain("Gerencie seu restaurante");
    expect(html).toContain("A ferramenta definitiva");
  });

  it("renders the primary and secondary actions", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Entrar");
    expect(html).toContain("Registre sua empresa");
  });
});

describe("Root layout", () => {
  it("renders children inside the application layout", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <div>Contenido de prueba</div>
      </RootLayout>
    );

    expect(html).toContain("Contenido de prueba");
  });
});
