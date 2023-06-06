import {
  ErrorDialog,
  require_sessions
} from "/build/_shared/chunk-VWUXSX6C.js";
import {
  TextField
} from "/build/_shared/chunk-IBCIHWBQ.js";
import {
  Button
} from "/build/_shared/chunk-AVKYRRXB.js";
import {
  useActionData,
  useSearchParams
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

// browser-route-module:routes/login.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/login.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());

// app/styles/login.css
var login_default = "/build/_assets/login-P2MW232P.css";

// app/routes/login.tsx
var import_sessions = __toESM(require_sessions());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function Login() {
  const [isRfcValid, setIsRfcValid] = (0, import_react.useState)(true);
  const [isPasswordValid, setIsPasswordValid] = (0, import_react.useState)(true);
  const [rfc, setRfc] = (0, import_react.useState)("");
  const actionData = useActionData();
  const [messageError, setMessageError] = (0, import_react.useState)((actionData == null ? void 0 : actionData.formError) || "");
  const [searchParams] = useSearchParams();
  function validateRfc(event) {
    let rfc2 = event.target.value;
    setRfc(event.target.value.toUpperCase());
    setMessageError("");
    if (rfc2.length === 0) {
      setIsRfcValid(false);
      setMessageError("El RFC no puede estar vac\xEDo");
    } else if (rfc2.length < 12) {
      setIsRfcValid(false);
      setMessageError("El RFC debe tener al menos 12 caracteres");
    } else {
      setIsRfcValid(true);
      setMessageError("");
    }
  }
  function validatePassword(event) {
    let password = event.target.value;
    setMessageError("");
    if (password.length === 0) {
      setIsPasswordValid(false);
      setMessageError("La contrase\xF1a no puede estar vac\xEDa");
    } else if (password.length < 8) {
      setIsPasswordValid(false);
      setMessageError("La contrase\xF1a debe tener al menos 8 caracteres");
    } else {
      setIsPasswordValid(true);
      setMessageError("");
    }
  }
  const upperCase = (event) => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "display-large", children: "Inicio de sesi\xF3n" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: searchParams.get("redirectTo") || "/", readOnly: true }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this),
      messageError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorDialog, { message: messageError }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "RFC", name: "user", type: "text", variant: "outlined", onChange: validateRfc, isValid: isRfcValid, autoComplete: "off", value: rfc }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Contrase\xF1a", name: "password", type: "password", variant: "outlined", onChange: validatePassword, isValid: isPasswordValid, autoComplete: "current-password" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "filled", label: "Iniciar sesi\xF3n", className: "primary", color: "primary", disabled: !(isPasswordValid && isRfcValid) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-6H3EHQBX.js.map
