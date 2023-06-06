import {
  TextField
} from "/build/_shared/chunk-IBCIHWBQ.js";
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

// app/components/Tabla.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Tabla(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tableContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "header", children: props.headers.map((header, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "hader-small on-surface-variant-text", children: header }, index, false, {
        fileName: "app/components/Tabla.tsx",
        lineNumber: 26,
        columnNumber: 36
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: props.rows.map((row, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { onClick: () => props.onRowSelected(row.id), children: row.data.map((cell, index2) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "body-large on-surface-variant-text", children: cell }, index2, false, {
          fileName: "app/components/Tabla.tsx",
          lineNumber: 35,
          columnNumber: 44
        }, this);
      }) }, row.id, false, {
        fileName: "app/components/Tabla.tsx",
        lineNumber: 33,
        columnNumber: 36
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tabla.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Tabla.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/components/InputMenu.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function InputMenu(props) {
  var [suggestions, setSuggestions] = (0, import_react.useState)(props.initialSuggestions ? props.initialSuggestions : []);
  var [value, setValue] = (0, import_react.useState)(props.initialValue ? props.initialValue : "");
  const [active, setActive] = (0, import_react.useState)(0);
  const onInputChange = async (event) => {
    if (!props.selectOnly) {
      setValue(event.target.value);
      if (props.suggestFunction) {
        let suggest = await props.suggestFunction(event.target.value);
        setSuggestions(suggest);
      }
    }
    event.target.value == "" && setSuggestions([]);
  };
  const onEnterPressed = (val) => {
    setValue(suggestions[active].value);
    setSuggestions([]);
    setTimeout(() => {
      props.onEnterPressed && props.onEnterPressed();
    }, 5);
  };
  const onArrowKeyPressed = (event) => {
    console.log(event.key);
    if (event.key == "ArrowDown" && !event.shiftKey || event.key == "ArrowUp" && event.shiftKey) {
      if (active < suggestions.length - 1)
        setActive(active + 1);
      event.preventDefault();
    } else if (event.key == "ArrowUp" || event.key == "ArrowDown" && event.shiftKey) {
      event.preventDefault();
      if (active > 0)
        setActive(active - 1);
    }
  };
  const onSuggestionSelected = (val) => {
    setValue(val);
    setSuggestions([]);
    setTimeout(() => {
      props.onOptionClicked && props.onOptionClicked(val);
    }, 5);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inputMenu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextField,
      {
        icon: props.icon,
        label: props.label,
        name: props.name,
        type: "search",
        isValid: true,
        variant: "outlined",
        maxLength: props.maxLenght,
        onChange: onInputChange,
        onEnterPressed,
        onArrowKeyPressed,
        value,
        onClick: () => setSuggestions(props.initialSuggestions || [])
      },
      void 0,
      false,
      {
        fileName: "app/components/InputMenu.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    ),
    suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "column card suggest", children: suggestions.map((option, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { className: (index == suggestions.length - 1 ? "last " : "") + (index == active && "active"), onClick: () => onSuggestionSelected(option.value), onMouseDown: (event) => {
        event.preventDefault();
      }, children: option.name }, index, false, {
        fileName: "app/components/InputMenu.tsx",
        lineNumber: 83,
        columnNumber: 32
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/InputMenu.tsx",
      lineNumber: 80,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/InputMenu.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}

export {
  InputMenu,
  Tabla
};
//# sourceMappingURL=/build/_shared/chunk-RKBFNAIX.js.map
