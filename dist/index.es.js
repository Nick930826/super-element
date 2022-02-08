import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createBlock(_component_el_button, {
        class: "my-button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const ButtonPlugin = {
  install(app) {
    app.component("my-button", _sfc_main);
  }
};
const MyKitPlugin = {
  install(app) {
    var _a;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
  }
};
export { _sfc_main as Button, ButtonPlugin, MyKitPlugin as default };
