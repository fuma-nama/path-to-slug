import { test, expect } from "vitest";
import { toSlug, toSlugString } from "../src/index";

test("Run", () => {
  expect(toSlug("hello/world")).toStrictEqual(["hello", "world"]);
  expect(toSlug("hello\\world")).toStrictEqual(["hello", "world"]);
  expect(toSlug("//hello/world///")).toStrictEqual(["hello", "world"]);
});

test("With index", () => {
  expect(toSlug("hello/world/index")).toStrictEqual(["hello", "world"]);
  expect(toSlug("/hello///world/index/")).toStrictEqual(["hello", "world"]);
});

test("Run and join", () => {
  expect(toSlugString("hello\\world//")).toBe("hello/world");
});
