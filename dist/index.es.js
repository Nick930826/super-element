import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "my-button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a5dd954"]]);
const ButtonPlugin = {
  install(app) {
    app.component("my-button", Button);
  }
};
const MyKitPlugin = {
  install(app) {
    var _a;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
  }
};
export { Button, ButtonPlugin, MyKitPlugin as default };
