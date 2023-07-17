import { test } from "vitest";
import { calculate } from "../calculate";

test("calculate addition", ({ expect }) => {
  expect(calculate(5, 7, "+")).toBe(12);
});

test("calculate subtraction", ({ expect }) => {
  expect(calculate(7, 5, "-")).toBe(2);
});
test("calculate multiplication", ({ expect }) => {
  expect(calculate(5, 7, "*")).toBe(35);
});

test("calculate division", ({ expect }) => {
  expect(calculate(4, 2, "/")).toBe(2);
});

test("handle division by zero", ({ expect }) => {
  expect(calculate(5, 0, "/")).toBe("Cannot divide by zero");
});

test("Invalid Operator", ({ expect }) => {
  expect(() => calculate(5, 7, "&")).toThrowError("Invalid Operator");
});
