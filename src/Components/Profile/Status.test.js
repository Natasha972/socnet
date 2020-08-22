import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Status from "./Status";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without status ", () => {
  act(() => {
    render(<Status status='Hello!'/>, container);
  });
  expect(container.querySelector('span').textContent).toBe("Hello!");

  act(() => {
    render(<Status />, container);
  });
  expect(container.querySelector('span').textContent).toBe("status");

});

it("on click toggle input or span shown", () => {

  act(() => {
    render(<Status/>, container);
  });

  // получаем элемент button и кликаем на него несколько раз
  const span = document.querySelector("span");
  expect(container.querySelector('span'))
  expect(container.querySelector('input')).toBe(null)

  span.dispatchEvent(new MouseEvent("click", { bubbles: true }));

  expect(container.querySelector('input'));
  expect(container.querySelector('span')).toBe(null)
});

