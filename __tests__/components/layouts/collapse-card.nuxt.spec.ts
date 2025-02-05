import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Component from "@/layouts/collapse-card.vue";
import { Plus, Minus } from "lucide-vue-next";

describe("Collapse-card", () => {
  it("toggles collapse state when clicked", async () => {
    const wrapper = mount(Component);

    expect(wrapper.findComponent(Minus).exists()).toBe(true);
    expect(wrapper.findComponent(Plus).exists()).toBe(false);

    await wrapper.find("button").trigger("click");

    expect(wrapper.findComponent(Minus).exists()).toBe(false);
    expect(wrapper.findComponent(Plus).exists()).toBe(true);
  });

  it("applies proper classes based on layoutProps", () => {
    const wrapper = mount(Component, {
      attrs: {
        class: "custom-class",
        border: true,
      },
    });

    expect(wrapper.classes()).toContain("custom-class");
  });
});
