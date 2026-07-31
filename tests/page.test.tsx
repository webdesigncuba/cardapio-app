import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { renderToStaticMarkup } from "react-dom/server";

import Home from "@/app/page";
import RootLayout from "@/app/layout";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src, width, height }) =>
    React.createElement("img", { alt, src, width, height }),
}));

jest.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
  }),
}));

describe("Home page", () => {
  it("renders the hero content and primary actions", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Bem-vindo ao Cardapio");
    expect(html).toContain(
      "A plataforma inteligente de gestão de restaurantes"
    );
    expect(html).toContain("Entrar");
    expect(html).toContain("Criar Conta");
    expect(html).toContain("Logo Cardapio");
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
