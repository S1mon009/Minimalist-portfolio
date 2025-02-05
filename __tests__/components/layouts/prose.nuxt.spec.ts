import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Component from "@/layouts/prose.vue";

describe("Prose", () => {
  it("applies correct Tailwind classes", async () => {
    const wrapper = mount(Component);

    const div = wrapper.find("div");
    expect(div.classes()).toContain("prose");
    expect(div.classes()).toContain("prose-ul:-mt-4");
    expect(div.classes()).toContain("prose-ul:-pb-2");
    expect(div.classes()).toContain("prose-h3:-mt-2");
    expect(div.classes()).toContain("prose-h3:pointer-events-none");
    expect(div.classes()).toContain("prose-h4:mb-6");
    expect(div.classes()).toContain("prose-h4:pointer-events-none");
  });

  it("renders slot content", () => {
    const wrapper = mount(Component, {
      slots: {
        default: "### Test Vitest",
      },
    });

    // Sprawdzamy, czy zawartość slotu została wyrenderowana
    expect(wrapper.html()).toContain(
      `<div class="prose prose-ul:-mt-4 prose-ul:-pb-2 prose-h3:-mt-2 prose-h3:pointer-events-none prose-h4:mb-6 prose-h4:pointer-events-none">### Test Vitest</div>`
    );
  });
});
