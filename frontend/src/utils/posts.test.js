import { describe, it, expect } from "vitest";
import { sortNewestFirst, searchPosts } from "./posts.js";

const posts = [
    { id: 1, title: "Old post", author: "Amina", date: "2026-01-01" },
    { id: 2, title: "New post", author: "Brian", date: "2026-03-01" },
    { id: 3, title: "Middle post", author: "Faith", date: "2026-02-01" },
];

describe("sortNewestFirst", () => {
    it("puts the newest post first", () => {
        expect(sortNewestFirst(posts).map((p) => p.id)).toEqual([2, 3, 1]);
    });

    it("does not change the original array", () => {
        sortNewestFirst(posts);
        expect(posts.map((p) => p.id)).toEqual([1, 2, 3]);
    });

    it("handles an empty list", () => {
        expect(sortNewestFirst([])).toEqual([]);
    });
});

describe("searchPosts", () => {
    it("finds posts by title, ignoring case", () => {
        expect(searchPosts(posts, "NEW")).toHaveLength(1);
    });

    it("finds posts by author", () => {
        expect(searchPosts(posts, "faith")[0].id).toBe(3);
    });

    it("returns everything for an empty query", () => {
        expect(searchPosts(posts, "   ")).toHaveLength(3);
    });
});
