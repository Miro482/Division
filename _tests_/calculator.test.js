
import { describe, test, expect } from "@jest/globals";
import { divide } from "../src/calculator.js";

describe("divide", () => {
  test("divides two valid numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("rejects a string as the first argument", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  test("rejects a string as the second argument", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
  });

  test("rejects NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("rejects division by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });
});
