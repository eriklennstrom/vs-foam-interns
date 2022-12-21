import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Icons from "@/components/icons/icons.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faWarning,
  faArrowDown,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown);

describe("Icons", () => {
  it("renders properly", () => {
    const wrapper = mount(Icons, { propsData: { variant: "warning" } });
    expect(wrapper.classes()).toContain("fa-warning");
  });

  it("renders correct variant prop", () => {
    const wrapper = mount(Icons, { propsData: { variant: "warning" } });
    expect(wrapper.vm.variant).toBe("warning");
  });

  it("renders color", () => {
    const wrapper = mount(Icons, {
      propsData: { variant: "warning", color: "success" },
    });
    expect(wrapper.vm.color).toBe("success");
    expect(wrapper.classes()).toContain("success");
  });

  it("renders correct color prop and class with no input", () => {
    const wrapper = mount(Icons);
    expect(wrapper.vm.color).toBe("primary");
    expect(wrapper.classes()).toContain("primary");
  });

  it("render correct size", () => {
    const wrapper = mount(Icons, {
      propsData: { variant: "warning", size: 18 },
    });
    expect(getComputedStyle(wrapper.element).fontSize).toBe("18px");
  });

  it("render correct size with no input", () => {
    const wrapper = mount(Icons, { propsData: { variant: "warning" } });
    console.log(getComputedStyle(wrapper.element).height);
    expect(getComputedStyle(wrapper.element).fontSize).toBe("100%");
  });

  it("render default color with incorrect input", () => {
    const wrapper = mount(Icons, {
      propsData: { variant: "warning", color: "red" },
    });
    console.log(wrapper.classes());
    expect(wrapper.classes()).toContain("primary");
  });
});
