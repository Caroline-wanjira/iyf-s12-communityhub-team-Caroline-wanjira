import { describe, it, expect } from "vitest";
import { getInitials, formatPostCount } from "./users";

describe("getInitials", () => {
  it("returns two initials for a full name", () => {
    expect(getInitials("Caroline Wanjira")).toBe("CW");
  });
  it("returns one initial for a single name", () => {
    expect(getInitials("madonna")).toBe("M");
  });
  it("returns an empty string for an empty name", () => {
    expect(getInitials("")).toBe("");
  });
});

describe("formatPostCount", () => {
  it("uses the singular for one post", () => {
    expect(formatPostCount(1)).toBe("1 post");
  });
  it("uses the plural for several posts", () => {
    expect(formatPostCount(5)).toBe("5 posts");
  });
  it("uses the plural for zero posts", () => {
    expect(formatPostCount(0)).toBe("0 posts");
  });
});