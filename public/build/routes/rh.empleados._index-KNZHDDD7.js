import {
  InputMenu,
  Tabla
} from "/build/_shared/chunk-RKBFNAIX.js";
import "/build/_shared/chunk-IBCIHWBQ.js";
import {
  Button
} from "/build/_shared/chunk-AVKYRRXB.js";
import {
  require_empleados
} from "/build/_shared/chunk-6ZK7KAIB.js";
import {
  Form,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit
} from "/build/_shared/chunk-GI2S6SSH.js";
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

// browser-route-module:routes/rh.empleados._index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/rh.empleados._index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/SearchBar.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SearchBar(props) {
  const formRef = (0, import_react2.useRef)(null);
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Form,
    {
      reloadDocument: false,
      name: "search",
      method: "get",
      className: "searchBar",
      onChange: (e) => {
        !props.searchSuggestFunction && submit(e.currentTarget);
      },
      ref: formRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          InputMenu,
          {
            label: props.label,
            name: "searchValue",
            variant: "outlined",
            suggestFunction: props.searchSuggestFunction,
            maxLenght: props.maxLenght,
            onEnterPressed: () => {
              var _a;
              return (_a = formRef.current) == null ? void 0 : _a.submit();
            },
            onOptionClicked: () => {
              var _a;
              return (_a = formRef.current) == null ? void 0 : _a.submit();
            },
            initialValue: props.value
          },
          void 0,
          false,
          {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 18,
            columnNumber: 13
          },
          this
        ),
        props.collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            type: "submit",
            variant: "filled",
            icon: "search",
            className: "primary"
          },
          void 0,
          false,
          {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 29,
            columnNumber: 35
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            label: "Buscar",
            type: "submit",
            variant: "filled",
            className: "primary",
            icon: "search"
          },
          void 0,
          false,
          {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 35,
            columnNumber: 18
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/SearchBar.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/routes/rh.empleados._index.tsx
var import_empleados = __toESM(require_empleados());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("searchValue");
  const headers = ["RFC", "Nombre", "Puesto", "Sueldo", "Prod", "Lugar", "Fecha Ingreso"];
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const openEmpleado = (id) => {
    navigate(`/rh/empleados/${id}`);
  };
  const rows = [{
    id: "ejemploderfc",
    data: ["ejemploderfc23", "Ejemplo de nombre", "Ejemplo de puesto", "$1000", "0.95", "Ejemplo de lugar", "Ejemplo de fecha"]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      SearchBar,
      {
        label: "Buscar empleados por RFC, nombre o correo",
        value: searchValue ? searchValue : ""
      },
      void 0,
      false,
      {
        fileName: "app/routes/rh.empleados._index.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabla, { headers, rows: loaderData.data, onRowSelected: openEmpleado }, void 0, false, {
      fileName: "app/routes/rh.empleados._index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/rh.empleados._index.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/rh.empleados._index-KNZHDDD7.js.map
