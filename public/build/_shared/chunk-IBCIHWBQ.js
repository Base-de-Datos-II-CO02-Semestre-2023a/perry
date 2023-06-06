import {
  Icon
} from "/build/_shared/chunk-AVKYRRXB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// app/components/TextField.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TextField(props) {
  const [isValid, setValid] = (0, import_react.useState)(props.isValid === void 0 ? true : props.isValid);
  const descRef = (0, import_react.useRef)(null);
  const onEnterPressed = (event) => {
    var _a, _b;
    if (event.key == "Enter") {
      if (props.onEnterPressed) {
        props.onEnterPressed(event);
      }
      ((_a = descRef.current) == null ? void 0 : _a.type) == "search" && ((_b = descRef.current) == null ? void 0 : _b.blur());
    }
    if (event.key == "ArrowDown" || event.key == "ArrowUp") {
      props.onArrowKeyPressed && props.onArrowKeyPressed(event);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "textField " + props.variant + " " + (isValid ? "" : "error"), onClick: props.onClick, children: [
    props.icon && props.type != "date" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Icon,
      {
        icon: props.icon,
        type: "outlined"
      },
      void 0,
      false,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 45,
        columnNumber: 57
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "label",
      {
        className: "body-small",
        htmlFor: props.name,
        children: props.label
      },
      void 0,
      false,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 50,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: descRef,
        id: props.name,
        name: props.name,
        type: props.type,
        placeholder: " ",
        className: "body-large",
        onChange: props.onChange,
        min: props.min,
        max: props.max,
        maxLength: props.maxLength,
        minLength: props.minLenght,
        onKeyDown: onEnterPressed,
        value: props.value,
        autoComplete: props.autoComplete ? props.autoComplete : "off",
        pattern: props.pattern
      },
      void 0,
      false,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 55,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/TextField.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

export {
  TextField
};
//# sourceMappingURL=/build/_shared/chunk-IBCIHWBQ.js.map
