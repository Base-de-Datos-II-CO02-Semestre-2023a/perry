import {
  ErrorDialog,
  require_sessions
} from "/build/_shared/chunk-VWUXSX6C.js";
import {
  InformacionGeneral
} from "/build/_shared/chunk-COGPOLQ6.js";
import {
  InputMenu,
  Tabla
} from "/build/_shared/chunk-RKBFNAIX.js";
import {
  TextField
} from "/build/_shared/chunk-IBCIHWBQ.js";
import {
  Button,
  Icon
} from "/build/_shared/chunk-AVKYRRXB.js";
import {
  require_empleados
} from "/build/_shared/chunk-6ZK7KAIB.js";
import {
  init_dist,
  isRouteErrorResponse,
  useActionData,
  useFetcher,
  useFetcher2,
  useLoaderData,
  useMatches,
  useNavigate,
  useRouteError
} from "/build/_shared/chunk-GI2S6SSH.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// empty-module:./sessions.server
var require_sessions2 = __commonJS({
  "empty-module:./sessions.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/rh._index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/rh._index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react6 = __toESM(require_react());

// app/components/ExtendedFAB.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExtendedFAB(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "extended fab " + props.variant, onClick: props.onClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: props.icon, type: "outlined" }, void 0, false, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: props.label }, void 0, false, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "state-layer on-primary" }, void 0, false, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ExtendedFAB.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/InformacionCantidad.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function InformacionCantidad_default(props) {
  const pClass = props.variant == "peque\xF1o" ? "title-small" : props.variant == "mediano" ? "title-large" : "display-large";
  const labelClass = props.variant == "peque\xF1o" ? "label-small" : props.variant == "mediano" ? "label-medium" : "label-large";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "informacion cantidad " + props.type + " " + props.variant, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: pClass, children: props.cantidad }, void 0, false, {
      fileName: "app/components/InformacionCantidad.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: labelClass, children: props.title }, void 0, false, {
      fileName: "app/components/InformacionCantidad.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/InformacionCantidad.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/rh._index.tsx
var import_empleados3 = __toESM(require_empleados());
var import_sessions2 = __toESM(require_sessions());

// app/components/AgregarEmpleadoOverlay.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react4 = __toESM(require_react());

// app/components/Overlay.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Overlay(props) {
  const [errorMessage, setErrorMesage] = (0, import_react.useState)("");
  const fetcher = useFetcher();
  const data = fetcher.data;
  (0, import_react.useEffect)(() => {
    if (data) {
      const status = data.status;
      if (status != 200) {
        setErrorMesage(data.formError);
      } else if (fetcher.state == "idle") {
        setErrorMesage("");
        props.updateData && props.updateData(fetcher.data.data);
        props.onPrimary && props.onPrimary();
      }
    }
  }, [fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "overlayBackground",
        onClick: props.isCancelable
      },
      void 0,
      false,
      {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 56,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "post", action: props.action, className: "overlay", children: [
      errorMessage != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorDialog, { message: errorMessage }, void 0, false, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 62,
        columnNumber: 39
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 62,
        columnNumber: 80
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "action", hidden: true, value: props.name, readOnly: true }, void 0, false, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      props.children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row buttons", children: [
        props.onPrimary && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { type: "submit", variant: "filled", className: "primary", label: props.primaryText }, void 0, false, {
          fileName: "app/components/Overlay.tsx",
          lineNumber: 66,
          columnNumber: 41
        }, this),
        props.onSecundary && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { type: "button", variant: "outlined", className: "secondary", label: props.secondaryText, onClick: props.onSecundary }, void 0, false, {
          fileName: "app/components/Overlay.tsx",
          lineNumber: 67,
          columnNumber: 43
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Overlay.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Overlay.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

// app/utils/ciudad.api.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/utils/api.config.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_sessions = __toESM(require_sessions2());
var url = "http://localhost:8080";
function requestOptionsGetClient(token) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    mode: "cors",
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  return requestOptions;
}

// app/utils/ciudad.api.ts
async function suggestCiudad(token, query) {
  const requestOptions = requestOptionsGetClient(token);
  const ciudades = fetch(`${url}/ciudad/buscar/${query}`, requestOptions).then((response) => {
    return response.text().then((text) => {
      return JSON.parse(text);
    });
  });
  return await ciudades;
}

// app/components/AgregarEmpleadoOverlay.tsx
var import_empleados2 = __toESM(require_empleados());

// app/components/NuevoContratoOverlay.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_empleados = __toESM(require_empleados());

// app/utils/lugar.api.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
async function suggestLugar(token, query) {
  const requestOptions = requestOptionsGetClient(token);
  const ciudades = fetch(`${url}/lugar/buscar/${query}`, requestOptions).then((response) => {
    return response.text().then((text) => {
      return JSON.parse(text);
    });
  });
  return await ciudades;
}

// app/components/NuevoContratoOverlay.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function NuevoContratoOverlay(props) {
  const [startDate, setStartDate] = (0, import_react2.useState)(/* @__PURE__ */ new Date());
  const updateStartDate = (e) => {
    setStartDate(new Date(e.currentTarget.value));
  };
  const ref = (0, import_react2.useRef)(null);
  const puestos = [
    {
      name: "Recursos Humanos",
      value: "Recursos_Humanos"
    },
    {
      name: "Ventas",
      value: "Ventas"
    },
    {
      name: "Inventario",
      value: "Inventario"
    },
    {
      name: "Finanzas",
      value: "Finanzas"
    },
    {
      name: "Administrador",
      value: "Admin"
    }
  ];
  const suggestLugarOptions = async (input) => {
    let lugares = [];
    if (input != "") {
      lugares = await suggestLugar(props.token, input);
      console.log(lugares);
      return lugares.map((lugar) => {
        return {
          name: lugar.nombre,
          value: lugar.id.toString()
        };
      });
    }
    return [];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: props.isDisplayed && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Overlay, { primaryText: "Crear", name: "nuevoContrato", action: "?index", onPrimary: () => props.setNewContrato(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "display-medium on-surface-text", children: "Nuevo contrato" }, void 0, false, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 114,
      columnNumber: 21
    }, this),
    props.id && props.nombre ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InformacionGeneral, { label: "Id del Empleado", content: props.id.toString(), variant: "default", type: "filled" }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 117,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InformacionGeneral, { label: "Nombre del empleado", content: props.nombre, variant: "default", type: "filled" }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 118,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name: "empleado", value: props.id.toString(), type: "text", readOnly: true, hidden: true }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 119,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 116,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InputMenu, { label: "Empleado", name: "empleado", variant: "outlined" }, void 0, false, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 121,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InputMenu, { label: "Puesto*", name: "puesto", variant: "filled", initialSuggestions: puestos, selectOnly: true }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 124,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InputMenu, { label: "Lugar*", name: "lugar", variant: "filled", suggestFunction: suggestLugarOptions }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Salario*", name: "salario", type: "number", variant: "outlined", min: 0, max: 1e8 }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 126,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 123,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Dias de vacaciones al a\xF1o*", name: "vacaciones", type: "number", variant: "outlined", max: 365, min: 6 }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 129,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Horas diarias", name: "horas", type: "number", variant: "outlined", max: 24, min: 0 }, void 0, false, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 130,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 128,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        TextField,
        {
          label: "Fecha de inicio*",
          name: "inicio",
          type: "date",
          variant: "outlined",
          min: new Date(Date.now()).toISOString().split("T")[0],
          onChange: updateStartDate
        },
        void 0,
        false,
        {
          fileName: "app/components/NuevoContratoOverlay.tsx",
          lineNumber: 133,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        TextField,
        {
          label: "Fecha de finalizacion",
          name: "fin",
          type: "date",
          variant: "outlined",
          min: startDate.toISOString().split("T")[0]
        },
        void 0,
        false,
        {
          fileName: "app/components/NuevoContratoOverlay.tsx",
          lineNumber: 139,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 132,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 113,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 112,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 110,
    columnNumber: 12
  }, this);
}

// app/components/AgregarEmpleadoOverlay.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function AgregarEmpleadoOverlay(props) {
  const [rfc, setRfc] = (0, import_react4.useState)("");
  const [newContrato, setNewContrato] = (0, import_react4.useState)(false);
  const fetcher = useFetcher2();
  const onRfcChange = (e) => {
    let rfcU = e.target.value;
    rfcU = rfcU.toUpperCase();
    setRfc(rfcU);
  };
  const onEmpleadoAgregado = () => {
    props.setDisplayed(false);
    setNewContrato(true);
  };
  const [id, setId] = (0, import_react4.useState)();
  const [nombre, setNombre] = (0, import_react4.useState)("");
  const updateData = (data) => {
    console.log(data);
    setId(data.id);
    setNombre(data.nombre);
  };
  const suggestCiudades = async (val) => {
    let sCiudad = [];
    if (val != "") {
      sCiudad = await suggestCiudad(props.token, val);
      return sCiudad.map((c) => {
        return {
          name: c.nombre,
          value: c.id
        };
      });
    }
    return [];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    props.isDisplayed && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Overlay,
      {
        isCancelable: () => props.setDisplayed(false),
        onPrimary: onEmpleadoAgregado,
        onSecundary: () => props.setDisplayed(false),
        primaryText: "Registrar",
        secondaryText: "Cancelar",
        name: "agregarEmpleado",
        action: "?index",
        updateData,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "display-medium on-surface-text", children: "Agregar empleado" }, void 0, false, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            TextField,
            {
              label: "Nombre completo",
              name: "nombre",
              type: "text",
              variant: "outlined"
            },
            void 0,
            false,
            {
              fileName: "app/components/AgregarEmpleadoOverlay.tsx",
              lineNumber: 155,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "Telefono",
                name: "telefono",
                type: "tel",
                variant: "outlined",
                pattern: "[0-9]{10}",
                maxLength: 10
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 162,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                value: rfc,
                label: "RFC",
                name: "rfc",
                type: "text",
                variant: "outlined",
                minLenght: 12,
                maxLength: 13,
                autoCapitalize: "words",
                onChange: onRfcChange
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 170,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "NSS",
                name: "nss",
                type: "number",
                variant: "outlined",
                pattern: "[0-9]{11}",
                max: 99999999999
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 181,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "Correo electronico",
                name: "correo",
                type: "email",
                variant: "outlined",
                autoComplete: "none"
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 191,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "Contrase\xF1a",
                name: "contrase\xF1a",
                type: "password",
                variant: "outlined",
                autoComplete: "none"
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 197,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "Fecha de nacimiento",
                name: "nacim",
                type: "date",
                variant: "outlined"
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 204,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              InputMenu,
              {
                label: "Ciudad",
                name: "ciudad",
                variant: "outlined",
                suggestFunction: suggestCiudades
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 212,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "Calle",
                name: "calle",
                type: "text",
                variant: "outlined"
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 218,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "No. Externo",
                name: "nexterno",
                type: "number",
                variant: "outlined",
                min: 0
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 226,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "No. Interno",
                name: "ninterno",
                type: "number",
                variant: "outlined",
                min: 0
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 233,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TextField,
              {
                label: "C\xF3digo Postal",
                name: "cp",
                type: "tel",
                variant: "outlined",
                pattern: "[0-9]{5}",
                maxLength: 5
              },
              void 0,
              false,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 240,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 225,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/AgregarEmpleadoOverlay.tsx",
        lineNumber: 144,
        columnNumber: 34
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NuevoContratoOverlay, { token: props.token, setNewContrato, id, nombre, isDisplayed: newContrato }, void 0, false, {
      fileName: "app/components/AgregarEmpleadoOverlay.tsx",
      lineNumber: 252,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AgregarEmpleadoOverlay.tsx",
    lineNumber: 142,
    columnNumber: 13
  }, this);
}

// app/routes/rh._index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Index() {
  const navigate = useNavigate();
  const matches = useMatches();
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const [newEmpleado, setNewEmpleado] = (0, import_react6.useState)(false);
  const openEmpleado = (id) => {
    navigate(`/rh/empleados/${id}?redirectTo=%2f`);
  };
  const headers = ["Nombre", "Prod"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "actionsBar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExtendedFAB, { icon: "add", label: "Crear objetivo", variant: "primary", onClick: () => {
      } }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExtendedFAB, { icon: "add", label: "Registrar falta", variant: "primary", onClick: () => {
      } }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExtendedFAB, { icon: "add", label: "Nuevo empleado", variant: "tertiary", onClick: () => {
        setNewEmpleado(true);
      } }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExtendedFAB, { icon: "sync_alt", label: "Transferir empleado", variant: "primary", onClick: () => {
      } }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExtendedFAB, { icon: "edit", label: "Modificar contrato", variant: "primary", onClick: () => {
      } }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "header-large on-surface-variant-text", children: "Empleados m\xE1s productivos" }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tabla, { headers, rows: loaderData.productivos, onRowSelected: openEmpleado }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "header-large on-surface-variant-text", children: "Empleados menos productivos" }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 106,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tabla, { headers, rows: loaderData.inproductivos, onRowSelected: openEmpleado }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "column fit", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: loaderData.empleadosVacaciones, title: "Empleados de vacaciones" }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: 56, title: "Contratos proximos a concluir" }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: 56, title: "Promedio de productividad" }, void 0, false, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AgregarEmpleadoOverlay, { isDisplayed: newEmpleado, setDisplayed: setNewEmpleado, token: loaderData.token }, void 0, false, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/rh._index.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: [
        error.status,
        " ",
        error.statusText
      ] }, void 0, true, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.data }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this);
  } else if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Error" }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.message }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "The stack trace is:" }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("pre", { children: error.stack }, void 0, false, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this);
  } else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "error-container", children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 142,
      columnNumber: 16
    }, this);
  }
}
export {
  ErrorBoundary,
  Index as default
};
//# sourceMappingURL=/build/routes/rh._index-4E3MJ3HM.js.map
