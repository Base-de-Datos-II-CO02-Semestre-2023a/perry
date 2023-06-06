import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// app/components/Button.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Icon.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Icon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "span",
    {
      className: "material-symbols-outlined",
      style: props.type === "filled" ? { fontVariationSettings: "'FILL' 1" } : { fontVariationSettings: "'FILL' 0" },
      children: props.icon
    },
    void 0,
    false,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 7,
      columnNumber: 9
    },
    this
  );
}

// app/components/Button.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "button",
    {
      ref: props.ref,
      type: props.type,
      style: !props.icon ? { padding: "10px 24px" } : {},
      className: props.variant + " " + props.className + " " + props.color + " button " + (!props.label && "no-label"),
      disabled: props.disabled,
      onClick: props.onClick,
      children: [
        props.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: props.icon, type: "outlined" }, void 0, false, {
          fileName: "app/components/Button.tsx",
          lineNumber: 21,
          columnNumber: 32
        }, this),
        props.label && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "label-large", children: props.label }, void 0, false, {
          fileName: "app/components/Button.tsx",
          lineNumber: 22,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "state-layer on-primary" }, void 0, false, {
          fileName: "app/components/Button.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 13,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Button.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

export {
  Icon,
  Button
};
//# sourceMappingURL=/build/_shared/chunk-AVKYRRXB.js.map
