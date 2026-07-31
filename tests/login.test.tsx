import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { renderToStaticMarkup } from "react-dom/server";

import Login from "@/app/login/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src, width, height }) =>
    React.createElement("img", { alt, src, width, height }),
}));

describe("Login page", () => {
  it("renders the login page content correctly", () => {
    const html = renderToStaticMarkup(<Login />);

    expect(html).toContain("Logo Cardapio");
    expect(html).toContain("Email");
    expect(html).toContain("Password");
    expect(html).toContain('placeholder="dd@dd.com"');
    expect(html).toContain('placeholder="••••••••"');
    expect(html).toContain("Login");
    expect(html).toContain("v0.0.1");
  });

  it("renders the email and password inputs with the correct ids", () => {
    const html = renderToStaticMarkup(<Login />);

    expect(html).toContain('id="email"');
    expect(html).toContain('id="password"');
  });
});
