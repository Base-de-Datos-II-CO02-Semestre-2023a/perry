var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node4 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-YYCA4D7A.css";

// app/utils/sessions.server.ts
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node");

// app/utils/api.config.ts
var url = "http://localhost:8080";
async function requestOptionsGET(request) {
  let [token, rfc] = await getUserSession(request);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  return requestOptions;
}
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
async function postRequestOptions(request, empleado) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let [token, rfc] = await getUserSession(request);
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(empleado),
    redirect: "follow"
  };
  return requestOptions;
}

// app/utils/sessions.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
    httpOnly: !0
  }
});
async function login(username, password, redirectTo) {
  if (typeof username != "string" || typeof password != "string")
    return {
      status: 400,
      detail: "Datos ingresados no validos"
    };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    password,
    rfc: username
  }), requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }, status = 0, data = null;
  try {
    let response = await (0, import_node3.fetch)(`${url}/auth/login`, requestOptions);
    data = await response.json(), console.log(data), status = response.status;
  } catch {
    return {
      status: 500,
      formError: "Error desconocido"
    };
  }
  if (status !== 200)
    return {
      status,
      formError: data.detail
    };
  let token = data.jwt_token, user = data.user, puesto = data.puesto;
  return createUserSession(token, user, puesto, redirectTo);
}
async function getSessionCookies(request) {
  return await storage.getSession(request.headers.get("Cookie"));
}
async function getUserSession(request) {
  let session = await getSessionCookies(request), token = session.get("token"), user = session.get("user"), puesto = session.get("puesto");
  return [token, user, puesto];
}
async function createUserSession(token, user, puesto, redirectTo) {
  let session = await storage.getSession();
  return session.set("token", token), session.set("user", user), session.set("puesto", puesto), console.log("redirect to" + redirectTo), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function logout(request) {
  let session = await getSessionCookies(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/root.tsx
var import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  //...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }
], loader = async ({ request }) => {
  let [token, user, puesto] = await getUserSession(request), root = "";
  if (token) {
    switch (puesto) {
      case "Admin":
        root = "admin";
        break;
      case "Ventas":
        root = "ventas";
        break;
      case "Recursos_Humanos":
        root = "rh";
        break;
      case "Inventario":
        root = "inventario";
        break;
      case "Finanzas":
        root = "finanzas";
        break;
    }
    return { root };
  }
  return request.url.includes("/login") || request.url.includes("/asistencia") ? { root: null } : (0, import_node4.redirect)("/login");
};
function App() {
  let location = (0, import_react2.useLocation)(), navigate = (0, import_react2.useNavigate)(), data = (0, import_react2.useLoaderData)();
  return (0, import_react3.useEffect)(() => {
    !location.pathname.includes(data.root) && data.root != null && navigate(`/${data.root}`);
  }, [location]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/rh.empleados._index.tsx
var rh_empleados_index_exports = {};
__export(rh_empleados_index_exports, {
  default: () => Index,
  loader: () => loader2
});

// app/components/SearchBar.tsx
var import_react6 = require("@remix-run/react");

// app/components/Icon.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Icon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "span",
    {
      className: "material-symbols-outlined",
      style: props.type === "filled" ? { fontVariationSettings: "'FILL' 1" } : { fontVariationSettings: "'FILL' 0" },
      children: props.icon
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 7,
      columnNumber: 9
    },
    this
  );
}

// app/components/Button.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      ref: props.ref,
      type: props.type,
      style: props.icon ? {} : { padding: "10px 24px" },
      className: props.variant + " " + props.className + " " + props.color + " button " + (!props.label && "no-label"),
      disabled: props.disabled,
      onClick: props.onClick,
      children: [
        props.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: props.icon, type: "outlined" }, void 0, !1, {
          fileName: "app/components/Button.tsx",
          lineNumber: 21,
          columnNumber: 32
        }, this),
        props.label && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "label-large", children: props.label }, void 0, !1, {
          fileName: "app/components/Button.tsx",
          lineNumber: 22,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "state-layer on-primary" }, void 0, !1, {
          fileName: "app/components/Button.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 13,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Button.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/components/InputMenu.tsx
var import_react5 = require("react");

// app/components/TextField.tsx
var import_react4 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function TextField(props) {
  let [isValid, setValid] = (0, import_react4.useState)(props.isValid === void 0 ? !0 : props.isValid), descRef = (0, import_react4.useRef)(null), onEnterPressed = (event) => {
    var _a, _b;
    event.key == "Enter" && (props.onEnterPressed && props.onEnterPressed(event), ((_a = descRef.current) == null ? void 0 : _a.type) == "search" && ((_b = descRef.current) == null || _b.blur())), (event.key == "ArrowDown" || event.key == "ArrowUp") && props.onArrowKeyPressed && props.onArrowKeyPressed(event);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "textField " + props.variant + " " + (isValid ? "" : "error"), onClick: props.onClick, children: [
    props.icon && props.type != "date" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Icon,
      {
        icon: props.icon,
        type: "outlined"
      },
      void 0,
      !1,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 45,
        columnNumber: 57
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "label",
      {
        className: "body-small",
        htmlFor: props.name,
        children: props.label
      },
      void 0,
      !1,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 50,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
      !1,
      {
        fileName: "app/components/TextField.tsx",
        lineNumber: 55,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/TextField.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

// app/components/InputMenu.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function InputMenu(props) {
  var [suggestions, setSuggestions] = (0, import_react5.useState)(props.initialSuggestions ? props.initialSuggestions : []), [value, setValue] = (0, import_react5.useState)(props.initialValue ? props.initialValue : "");
  let [active, setActive] = (0, import_react5.useState)(0), onInputChange = async (event) => {
    if (!props.selectOnly && (setValue(event.target.value), props.suggestFunction)) {
      let suggest = await props.suggestFunction(event.target.value);
      setSuggestions(suggest);
    }
    event.target.value == "" && setSuggestions([]);
  }, onEnterPressed = (val) => {
    setValue(suggestions[active].value), setSuggestions([]), setTimeout(() => {
      props.onEnterPressed && props.onEnterPressed();
    }, 5);
  }, onArrowKeyPressed = (event) => {
    console.log(event.key), event.key == "ArrowDown" && !event.shiftKey || event.key == "ArrowUp" && event.shiftKey ? (active < suggestions.length - 1 && setActive(active + 1), event.preventDefault()) : (event.key == "ArrowUp" || event.key == "ArrowDown" && event.shiftKey) && (event.preventDefault(), active > 0 && setActive(active - 1));
  }, onSuggestionSelected = (val) => {
    setValue(val), setSuggestions([]), setTimeout(() => {
      props.onOptionClicked && props.onOptionClicked(val);
    }, 5);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inputMenu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      TextField,
      {
        icon: props.icon,
        label: props.label,
        name: props.name,
        type: "search",
        isValid: !0,
        variant: "outlined",
        maxLength: props.maxLenght,
        onChange: onInputChange,
        onEnterPressed,
        onArrowKeyPressed,
        value,
        onClick: () => setSuggestions(props.initialSuggestions || [])
      },
      void 0,
      !1,
      {
        fileName: "app/components/InputMenu.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    ),
    suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "column card suggest", children: suggestions.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { className: (index == suggestions.length - 1 ? "last " : "") + (index == active && "active"), onClick: () => onSuggestionSelected(option.value), onMouseDown: (event) => {
      event.preventDefault();
    }, children: option.name }, index, !1, {
      fileName: "app/components/InputMenu.tsx",
      lineNumber: 83,
      columnNumber: 32
    }, this)) }, void 0, !1, {
      fileName: "app/components/InputMenu.tsx",
      lineNumber: 80,
      columnNumber: 43
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InputMenu.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}

// app/components/SearchBar.tsx
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SearchBar(props) {
  let formRef = (0, import_react7.useRef)(null), submit = (0, import_react6.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react6.Form,
    {
      reloadDocument: !1,
      name: "search",
      method: "get",
      className: "searchBar",
      onChange: (e) => {
        !props.searchSuggestFunction && submit(e.currentTarget);
      },
      ref: formRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
          !1,
          {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 18,
            columnNumber: 13
          },
          this
        ),
        props.collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Button,
          {
            type: "submit",
            variant: "filled",
            icon: "search",
            className: "primary"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 29,
            columnNumber: 35
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Button,
          {
            label: "Buscar",
            type: "submit",
            variant: "filled",
            className: "primary",
            icon: "search"
          },
          void 0,
          !1,
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
    !0,
    {
      fileName: "app/components/SearchBar.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/routes/rh.empleados._index.tsx
var import_react8 = require("@remix-run/react");

// app/components/Tabla.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Tabla(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "tableContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { className: "header", children: props.headers.map((header, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "hader-small on-surface-variant-text", children: header }, index, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 26,
      columnNumber: 36
    }, this)) }, void 0, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { children: props.rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { onClick: () => props.onRowSelected(row.id), children: row.data.map((cell, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "body-large on-surface-variant-text", children: cell }, index2, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 35,
      columnNumber: 44
    }, this)) }, row.id, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 33,
      columnNumber: 36
    }, this)) }, void 0, !1, {
      fileName: "app/components/Tabla.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tabla.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Tabla.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/utils/empleados.server.ts
var import_node5 = require("@remix-run/node");
async function getEmpleado(request, id) {
  let requestOptions = await requestOptionsGET(request), status = 0;
  try {
    let request2 = await (0, import_node5.fetch)(`${url}/empleados/${id}`, requestOptions), response = await request2.text(), data = JSON.parse(response);
    return status = request2.status, data.fechaDeIngreso = data.fechaDeIngreso && new Date(data.fechaDeIngreso), data.fechaDeNacimiento = new Date(data.fechaDeNacimiento), data;
  } catch {
    return null;
  }
}
async function getContarEmpleadosVacaciones(request) {
  let requestOptions = await requestOptionsGET(request), status = 0;
  try {
    let request2 = await (0, import_node5.fetch)(`${url}/empleados/vacaciones/contar`, requestOptions), response = await request2.text(), data = JSON.parse(response);
    return status = request2.status, data;
  } catch {
    return null;
  }
}
async function getEmpleadosMasProductivos(request) {
  let requestOptions = await requestOptionsGET(request), status = 0;
  try {
    let request2 = await (0, import_node5.fetch)(`${url}/empleados/productivos`, requestOptions), response = await request2.text(), data = JSON.parse(response);
    return status = request2.status, data;
  } catch {
    return null;
  }
}
async function getEmpleadosMenosProductivos(request) {
  let requestOptions = await requestOptionsGET(request), status = 0;
  try {
    let request2 = await (0, import_node5.fetch)(`${url}/empleados/inproductivos`, requestOptions), response = await request2.text(), data = JSON.parse(response);
    return status = request2.status, data;
  } catch {
    return null;
  }
}
async function getEmpleados(request) {
  let requestOptions = await requestOptionsGET(request), status = 0, req = await (0, import_node5.fetch)(`${url}/empleados`, requestOptions), response = await req.text(), data = JSON.parse(response);
  return data.forEach((empleado) => {
    empleado.fechaDeIngreso = new Date(empleado.fechaDeIngreso);
  }), status = req.status, data;
}
async function buscarEmpleadosPorRFC(request, id) {
  let status = 0, requestOptions = await requestOptionsGET(request), req = await (0, import_node5.fetch)(`${url}/empleados/buscar/${id}`, requestOptions), response = await req.text(), data = JSON.parse(response);
  return status = req.status, data.forEach((empleado) => {
    empleado.fechaDeIngreso = new Date(empleado.fechaDeIngreso);
  }), data;
}
async function registrarEmpleado(request, empleado) {
  let status = 0;
  var requestOptions = await postRequestOptions(request, empleado);
  try {
    let req = await (0, import_node5.fetch)(`${url}/auth/register`, requestOptions), response = await req.text(), data = JSON.parse(response);
    return status = req.status, status == 200 ? {
      data,
      status
    } : {
      title: data.title,
      status: data.status,
      error: data.detail
    };
  } catch (error) {
    return {
      title: "Error Interno",
      status: 500,
      error
    };
  }
}
async function nuevoContrato(request, contrato) {
  let status = 0;
  var requestOptions = await postRequestOptions(request, contrato);
  try {
    let req = await (0, import_node5.fetch)(`${url}/contrato`, requestOptions), response = await req.text(), data = JSON.parse(response);
    return status = req.status, status == 200 ? {
      data,
      status
    } : {
      title: data.title,
      status: data.status,
      error: data.detail
    };
  } catch (error) {
    return {
      title: "Error Interno",
      status: 500,
      error
    };
  }
}

// app/routes/rh.empleados._index.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let searchValue = new URL(request.url).searchParams.get("searchValue"), data = [], empleados = [];
  return searchValue ? empleados = await buscarEmpleadosPorRFC(request, searchValue) : empleados = await getEmpleados(request), data = empleados.map((empleado) => ({
    id: empleado.id,
    data: [empleado.rfc, empleado.nombre, empleado.puesto, empleado.salario.toString(), empleado.indiceProductividad.toString(), empleado.idLugar, empleado.fechaDeIngreso.toLocaleDateString()]
  })), {
    searchValue,
    title: "Empleados",
    data
  };
};
function Index() {
  let [searchParams] = (0, import_react8.useSearchParams)(), searchValue = searchParams.get("searchValue"), headers = ["RFC", "Nombre", "Puesto", "Sueldo", "Prod", "Lugar", "Fecha Ingreso"], navigate = (0, import_react8.useNavigate)(), loaderData = (0, import_react8.useLoaderData)(), openEmpleado = (id) => {
    navigate(`/rh/empleados/${id}`);
  }, rows = [{
    id: "ejemploderfc",
    data: ["ejemploderfc23", "Ejemplo de nombre", "Ejemplo de puesto", "$1000", "0.95", "Ejemplo de lugar", "Ejemplo de fecha"]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      SearchBar,
      {
        label: "Buscar empleados por RFC, nombre o correo",
        value: searchValue || ""
      },
      void 0,
      !1,
      {
        fileName: "app/routes/rh.empleados._index.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tabla, { headers, rows: loaderData.data, onRowSelected: openEmpleado }, void 0, !1, {
      fileName: "app/routes/rh.empleados._index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/rh.empleados._index.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

// app/routes/rh.empleados.$id.tsx
var rh_empleados_id_exports = {};
__export(rh_empleados_id_exports, {
  default: () => Empleado,
  loader: () => loader3
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let empleado = await getEmpleado(request, params.id);
  return empleado ? {
    empleado,
    title: empleado.nombre,
    redirect: "/rh/empleados"
  } : {
    empleado
  };
};
function Empleado() {
  let matches = (0, import_react9.useMatches)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", {}, void 0, !1, {
    fileName: "app/routes/rh.empleados.$id.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

// app/routes/rh.empleados.tsx
var rh_empleados_exports = {};
__export(rh_empleados_exports, {
  default: () => Empleados,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => ({
  title: "Empleados"
});
function Empleados() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
    fileName: "app/routes/rh.empleados.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/rh.empleados.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/asistencia.tsx
var asistencia_exports = {};
__export(asistencia_exports, {
  default: () => Asistencia
});
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Asistencia() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Asistencia" }, void 0, !1, {
    fileName: "app/routes/asistencia.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/asistencia.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/rh.lugares.tsx
var rh_lugares_exports = {};
__export(rh_lugares_exports, {
  default: () => Lugares,
  loader: () => loader5
});
var loader5 = async ({ request, params }) => ({
  title: "Lugares"
});
function Lugares() {
}

// app/routes/rh._index.tsx
var rh_index_exports = {};
__export(rh_index_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => Index2,
  loader: () => loader6
});
var import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/components/ExtendedFAB.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ExtendedFAB(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "extended fab " + props.variant, onClick: props.onClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { icon: props.icon, type: "outlined" }, void 0, !1, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { children: props.label }, void 0, !1, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "state-layer on-primary" }, void 0, !1, {
      fileName: "app/components/ExtendedFAB.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ExtendedFAB.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/InformacionCantidad.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function InformacionCantidad_default(props) {
  let pClass = props.variant == "peque\xF1o" ? "title-small" : props.variant == "mediano" ? "title-large" : "display-large", labelClass = props.variant == "peque\xF1o" ? "label-small" : props.variant == "mediano" ? "label-medium" : "label-large";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "informacion cantidad " + props.type + " " + props.variant, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: pClass, children: props.cantidad }, void 0, !1, {
      fileName: "app/components/InformacionCantidad.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { className: labelClass, children: props.title }, void 0, !1, {
      fileName: "app/components/InformacionCantidad.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InformacionCantidad.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/AgregarEmpleadoOverlay.tsx
var import_react13 = require("@remix-run/react"), import_react14 = require("react");

// app/components/Overlay.tsx
var import_react11 = require("react");
var import_react_router_dom = require("react-router-dom");

// app/components/ErrorDialog.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ErrorDialog(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "errorDialog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "body-medium", children: props.message }, void 0, !1, {
    fileName: "app/components/ErrorDialog.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/ErrorDialog.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Overlay.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Overlay(props) {
  let [errorMessage, setErrorMesage] = (0, import_react11.useState)(""), fetcher = (0, import_react_router_dom.useFetcher)(), data = fetcher.data;
  return (0, import_react11.useEffect)(() => {
    data && (data.status != 200 ? setErrorMesage(data.formError) : fetcher.state == "idle" && (setErrorMesage(""), props.updateData && props.updateData(fetcher.data.data), props.onPrimary && props.onPrimary()));
  }, [fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "overlayBackground",
        onClick: props.isCancelable
      },
      void 0,
      !1,
      {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 56,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(fetcher.Form, { method: "post", action: props.action, className: "overlay", children: [
      errorMessage != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ErrorDialog, { message: errorMessage }, void 0, !1, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 62,
        columnNumber: 39
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {}, void 0, !1, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 62,
        columnNumber: 80
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { name: "action", hidden: !0, value: props.name, readOnly: !0 }, void 0, !1, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      props.children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "row buttons", children: [
        props.onPrimary && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Button, { type: "submit", variant: "filled", className: "primary", label: props.primaryText }, void 0, !1, {
          fileName: "app/components/Overlay.tsx",
          lineNumber: 66,
          columnNumber: 41
        }, this),
        props.onSecundary && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Button, { type: "button", variant: "outlined", className: "secondary", label: props.secondaryText, onClick: props.onSecundary }, void 0, !1, {
          fileName: "app/components/Overlay.tsx",
          lineNumber: 67,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Overlay.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Overlay.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Overlay.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

// app/utils/ciudad.api.ts
async function suggestCiudad(token, query) {
  let requestOptions = requestOptionsGetClient(token);
  return await fetch(`${url}/ciudad/buscar/${query}`, requestOptions).then((response) => response.text().then((text) => JSON.parse(text)));
}

// app/components/NuevoContratoOverlay.tsx
var import_react12 = require("react");

// app/components/InformacionGeneral.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function InformacionGeneral(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { "aria-disabled": !0, className: "informacion general " + props.type + " " + props.variant, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "label-small", children: props.label }, void 0, !1, {
      fileName: "app/components/InformacionGeneral.tsx",
      lineNumber: 4,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "title-small", children: props.content }, void 0, !1, {
      fileName: "app/components/InformacionGeneral.tsx",
      lineNumber: 5,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InformacionGeneral.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/utils/lugar.api.ts
async function suggestLugar(token, query) {
  let requestOptions = requestOptionsGetClient(token);
  return await fetch(`${url}/lugar/buscar/${query}`, requestOptions).then((response) => response.text().then((text) => JSON.parse(text)));
}

// app/components/NuevoContratoOverlay.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), registrarNuevoContrato = async (form, request) => {
  let empleado = form.get("empleado"), puesto = form.get("puesto"), lugar = form.get("lugar");
  lugar = parseInt(lugar);
  let salario = form.get("salario");
  salario = parseFloat(salario);
  let fechaInicio = form.get("inicio"), fechaFin = form.get("fin"), vacaciones = form.get("vacaciones"), horas = form.get("horas");
  if (!empleado || !puesto || !lugar || !salario || !fechaInicio || !vacaciones || !horas)
    return {
      status: 400,
      formError: "Faltan campos por llenar"
    };
  let contrato = {
    idEmpleado: parseInt(empleado),
    idLugar: lugar,
    fechaInicio: new Date(fechaInicio),
    puesto,
    salario,
    diasVacaciones: parseInt(vacaciones),
    horasDiarias: parseInt(horas)
  };
  fechaFin && (contrato.fechaFin = new Date(fechaFin));
  let r = await nuevoContrato(request, contrato);
  return r.status == 200 ? {
    status: 200,
    data: r.data
  } : {
    status: r.status,
    formError: r.error
  };
};
function NuevoContratoOverlay(props) {
  let [startDate, setStartDate] = (0, import_react12.useState)(/* @__PURE__ */ new Date()), updateStartDate = (e) => {
    setStartDate(new Date(e.currentTarget.value));
  }, ref = (0, import_react12.useRef)(null), puestos = [
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
  ], suggestLugarOptions = async (input) => {
    let lugares = [];
    return input != "" ? (lugares = await suggestLugar(props.token, input), console.log(lugares), lugares.map((lugar) => ({
      name: lugar.nombre,
      value: lugar.id.toString()
    }))) : [];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: props.isDisplayed && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Overlay, { primaryText: "Crear", name: "nuevoContrato", action: "?index", onPrimary: () => props.setNewContrato(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "display-medium on-surface-text", children: "Nuevo contrato" }, void 0, !1, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 114,
      columnNumber: 21
    }, this),
    props.id && props.nombre ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(InformacionGeneral, { label: "Id del Empleado", content: props.id.toString(), variant: "default", type: "filled" }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 117,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(InformacionGeneral, { label: "Nombre del empleado", content: props.nombre, variant: "default", type: "filled" }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 118,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "empleado", value: props.id.toString(), type: "text", readOnly: !0, hidden: !0 }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 119,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 116,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(InputMenu, { label: "Empleado", name: "empleado", variant: "outlined" }, void 0, !1, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 121,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(InputMenu, { label: "Puesto*", name: "puesto", variant: "filled", initialSuggestions: puestos, selectOnly: !0 }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 124,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(InputMenu, { label: "Lugar*", name: "lugar", variant: "filled", suggestFunction: suggestLugarOptions }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TextField, { label: "Salario*", name: "salario", type: "number", variant: "outlined", min: 0, max: 1e8 }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 126,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 123,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TextField, { label: "Dias de vacaciones al a\xF1o*", name: "vacaciones", type: "number", variant: "outlined", max: 365, min: 6 }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 129,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TextField, { label: "Horas diarias", name: "horas", type: "number", variant: "outlined", max: 24, min: 0 }, void 0, !1, {
        fileName: "app/components/NuevoContratoOverlay.tsx",
        lineNumber: 130,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 128,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        !1,
        {
          fileName: "app/components/NuevoContratoOverlay.tsx",
          lineNumber: 133,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        TextField,
        {
          label: "Fecha de finalizacion",
          name: "fin",
          type: "date",
          variant: "outlined",
          min: startDate.toISOString().split("T")[0]
        },
        void 0,
        !1,
        {
          fileName: "app/components/NuevoContratoOverlay.tsx",
          lineNumber: 139,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NuevoContratoOverlay.tsx",
      lineNumber: 132,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 113,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 112,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/NuevoContratoOverlay.tsx",
    lineNumber: 110,
    columnNumber: 12
  }, this);
}

// app/components/AgregarEmpleadoOverlay.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), agregarEmpleado = async (form, request) => {
  let nombre = form.get("nombre"), rfc = form.get("rfc"), correo = form.get("correo"), contrase\u00F1a = form.get("contrase\xF1a"), ciudad = form.get("ciudad"), calle = form.get("calle"), telefono = form.get("telefono");
  telefono = parseInt(telefono);
  let nss = form.get("nss");
  nss = parseInt(nss);
  let fechaNacimiento = form.get("fechaNacimiento");
  fechaNacimiento = new Date(fechaNacimiento);
  let nexterno = form.get("nexterno");
  nexterno = parseInt(nexterno);
  let ninterno = form.get("ninterno");
  ninterno = parseInt(ninterno);
  let cp = form.get("cp");
  if (cp = parseInt(cp), !nombre || !telefono || !rfc || !nss || !correo || !contrase\u00F1a || !fechaNacimiento || !ciudad || !calle || !nexterno || !ninterno || !cp)
    return {
      status: 400,
      formError: "Todos los campos son obligatorios"
    };
  let empleado = {
    nombre,
    telefono,
    correo,
    codigoPostal: cp,
    idCiudad: ciudad,
    calle,
    numeroInterno: ninterno,
    numeroExterno: nexterno,
    nss,
    rfc,
    fechaDeNacimiento: fechaNacimiento,
    fechaDeIngreso: new Date(Date.now()),
    indiceProductividad: 1,
    password: contrase\u00F1a
  }, r = await registrarEmpleado(request, empleado);
  return r.status == 200 ? {
    status: 200,
    data: r.data
  } : {
    status: r.status,
    formError: r.error
  };
};
function AgregarEmpleadoOverlay(props) {
  let [rfc, setRfc] = (0, import_react14.useState)(""), [newContrato, setNewContrato] = (0, import_react14.useState)(!1), fetcher = (0, import_react13.useFetcher)(), onRfcChange = (e) => {
    let rfcU = e.target.value;
    rfcU = rfcU.toUpperCase(), setRfc(rfcU);
  }, onEmpleadoAgregado = () => {
    props.setDisplayed(!1), setNewContrato(!0);
  }, [id, setId] = (0, import_react14.useState)(), [nombre, setNombre] = (0, import_react14.useState)(""), updateData = (data) => {
    console.log(data), setId(data.id), setNombre(data.nombre);
  }, suggestCiudades = async (val) => {
    let sCiudad = [];
    return val != "" ? (sCiudad = await suggestCiudad(props.token, val), sCiudad.map((c) => ({
      name: c.nombre,
      value: c.id
    }))) : [];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    props.isDisplayed && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      Overlay,
      {
        isCancelable: () => props.setDisplayed(!1),
        onPrimary: onEmpleadoAgregado,
        onSecundary: () => props.setDisplayed(!1),
        primaryText: "Registrar",
        secondaryText: "Cancelar",
        name: "agregarEmpleado",
        action: "?index",
        updateData,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "display-medium on-surface-text", children: "Agregar empleado" }, void 0, !1, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            TextField,
            {
              label: "Nombre completo",
              name: "nombre",
              type: "text",
              variant: "outlined"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AgregarEmpleadoOverlay.tsx",
              lineNumber: 155,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 162,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 170,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 181,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "Correo electronico",
                name: "correo",
                type: "email",
                variant: "outlined",
                autoComplete: "none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 191,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "Contrase\xF1a",
                name: "contrase\xF1a",
                type: "password",
                variant: "outlined",
                autoComplete: "none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 197,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "Fecha de nacimiento",
                name: "nacim",
                type: "date",
                variant: "outlined"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 204,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              InputMenu,
              {
                label: "Ciudad",
                name: "ciudad",
                variant: "outlined",
                suggestFunction: suggestCiudades
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 212,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "Calle",
                name: "calle",
                type: "text",
                variant: "outlined"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 218,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "No. Externo",
                name: "nexterno",
                type: "number",
                variant: "outlined",
                min: 0
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 226,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              TextField,
              {
                label: "No. Interno",
                name: "ninterno",
                type: "number",
                variant: "outlined",
                min: 0
              },
              void 0,
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 233,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              !1,
              {
                fileName: "app/components/AgregarEmpleadoOverlay.tsx",
                lineNumber: 240,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/AgregarEmpleadoOverlay.tsx",
            lineNumber: 225,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AgregarEmpleadoOverlay.tsx",
        lineNumber: 144,
        columnNumber: 34
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NuevoContratoOverlay, { token: props.token, setNewContrato, id, nombre, isDisplayed: newContrato }, void 0, !1, {
      fileName: "app/components/AgregarEmpleadoOverlay.tsx",
      lineNumber: 252,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AgregarEmpleadoOverlay.tsx",
    lineNumber: 142,
    columnNumber: 13
  }, this);
}

// app/routes/rh._index.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), loader6 = async ({ request, params }) => {
  let empleados = await getEmpleadosMasProductivos(request), productivos = [];
  empleados && (productivos = empleados.map((empleado) => ({
    id: empleado.id,
    data: [empleado.nombre, empleado.indiceProductividad]
  }))), empleados = await getEmpleadosMenosProductivos(request);
  let inproductivos = [];
  empleados && (inproductivos = empleados.map((empleado) => ({
    id: empleado.id,
    data: [empleado.nombre, empleado.indiceProductividad]
  })));
  let [token] = await getUserSession(request), response = await getContarEmpleadosVacaciones(request), empleadosVacaciones = response == null ? void 0 : response.empleados;
  return {
    title: "Inicio",
    productivos,
    inproductivos,
    token,
    empleadosVacaciones
  };
}, action = async ({ request }) => {
  let fromulario = await request.formData();
  switch (fromulario.get("action")) {
    case "agregarEmpleado":
      return await agregarEmpleado(fromulario, request);
    case "nuevoContrato":
      return await registrarNuevoContrato(fromulario, request);
  }
  return {
    status: 500,
    formError: "Error"
  };
};
function Index2() {
  let navigate = (0, import_react15.useNavigate)(), matches = (0, import_react15.useMatches)(), actionData = (0, import_react15.useActionData)(), loaderData = (0, import_react15.useLoaderData)(), [newEmpleado, setNewEmpleado] = (0, import_react16.useState)(!1), openEmpleado = (id) => {
    navigate(`/rh/empleados/${id}?redirectTo=%2f`);
  }, headers = ["Nombre", "Prod"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "actionsBar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ExtendedFAB, { icon: "add", label: "Crear objetivo", variant: "primary", onClick: () => {
      } }, void 0, !1, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ExtendedFAB, { icon: "add", label: "Registrar falta", variant: "primary", onClick: () => {
      } }, void 0, !1, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ExtendedFAB, { icon: "add", label: "Nuevo empleado", variant: "tertiary", onClick: () => {
        setNewEmpleado(!0);
      } }, void 0, !1, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ExtendedFAB, { icon: "sync_alt", label: "Transferir empleado", variant: "primary", onClick: () => {
      } }, void 0, !1, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ExtendedFAB, { icon: "edit", label: "Modificar contrato", variant: "primary", onClick: () => {
      } }, void 0, !1, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "header-large on-surface-variant-text", children: "Empleados m\xE1s productivos" }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tabla, { headers, rows: loaderData.productivos, onRowSelected: openEmpleado }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "header-large on-surface-variant-text", children: "Empleados menos productivos" }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 106,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tabla, { headers, rows: loaderData.inproductivos, onRowSelected: openEmpleado }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "column fit", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: loaderData.empleadosVacaciones, title: "Empleados de vacaciones" }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: 56, title: "Contratos proximos a concluir" }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(InformacionCantidad_default, { variant: "grande", type: "filled", cantidad: 56, title: "Promedio de productividad" }, void 0, !1, {
          fileName: "app/routes/rh._index.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/rh._index.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AgregarEmpleadoOverlay, { isDisplayed: newEmpleado, setDisplayed: setNewEmpleado, token: loaderData.token }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/rh._index.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react15.useRouteError)();
  return (0, import_react15.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: error.data }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/rh._index.tsx",
    lineNumber: 125,
    columnNumber: 11
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "The stack trace is:" }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("pre", { children: error.stack }, void 0, !1, {
      fileName: "app/routes/rh._index.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/rh._index.tsx",
    lineNumber: 134,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "error-container", children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/rh._index.tsx",
    lineNumber: 142,
    columnNumber: 16
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader7
});
var import_node6 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader7 = async () => (0, import_node6.redirect)("/");

// app/routes/ventas.tsx
var ventas_exports = {};
__export(ventas_exports, {
  default: () => Ventas
});
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Ventas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Ventas" }, void 0, !1, {
    fileName: "app/routes/ventas.tsx",
    lineNumber: 5,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/ventas.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login,
  links: () => links2,
  loader: () => loader8
});
var import_node7 = require("@remix-run/node"), import_react17 = require("react");

// app/styles/login.css
var login_default = "/build/_assets/login-P2MW232P.css";

// app/routes/login.tsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: login_default }], loader8 = async ({ request }) => {
  let [token, user, puesto] = await getUserSession(request);
  return token ? (0, import_node7.redirect)("/") : null;
}, action3 = async ({ request }) => {
  let form = await request.formData(), user = form.get("user"), password = form.get("password"), redirectTo = form.get("redirectTo");
  if (user != "" && password != "") {
    var response = await login(user, password, redirectTo);
    return console.log(response), response;
  }
  return { formError: "Favor de llenar los campos" };
};
function Login() {
  let [isRfcValid, setIsRfcValid] = (0, import_react17.useState)(!0), [isPasswordValid, setIsPasswordValid] = (0, import_react17.useState)(!0), [rfc, setRfc] = (0, import_react17.useState)(""), actionData = (0, import_react18.useActionData)(), [messageError, setMessageError] = (0, import_react17.useState)((actionData == null ? void 0 : actionData.formError) || ""), [searchParams] = (0, import_react18.useSearchParams)();
  function validateRfc(event) {
    let rfc2 = event.target.value;
    setRfc(event.target.value.toUpperCase()), setMessageError(""), rfc2.length === 0 ? (setIsRfcValid(!1), setMessageError("El RFC no puede estar vac\xEDo")) : rfc2.length < 12 ? (setIsRfcValid(!1), setMessageError("El RFC debe tener al menos 12 caracteres")) : (setIsRfcValid(!0), setMessageError(""));
  }
  function validatePassword(event) {
    let password = event.target.value;
    setMessageError(""), password.length === 0 ? (setIsPasswordValid(!1), setMessageError("La contrase\xF1a no puede estar vac\xEDa")) : password.length < 8 ? (setIsPasswordValid(!1), setMessageError("La contrase\xF1a debe tener al menos 8 caracteres")) : (setIsPasswordValid(!0), setMessageError(""));
  }
  let upperCase = (event) => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "display-large", children: "Inicio de sesi\xF3n" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: searchParams.get("redirectTo") || "/", readOnly: !0 }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this),
      messageError && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ErrorDialog, { message: messageError }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextField, { label: "RFC", name: "user", type: "text", variant: "outlined", onChange: validateRfc, isValid: isRfcValid, autoComplete: "off", value: rfc }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextField, { label: "Contrase\xF1a", name: "password", type: "password", variant: "outlined", onChange: validatePassword, isValid: isPasswordValid, autoComplete: "current-password" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { type: "submit", variant: "filled", label: "Iniciar sesi\xF3n", className: "primary", color: "primary", disabled: !(isPasswordValid && isRfcValid) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/rh.tsx
var rh_exports = {};
__export(rh_exports, {
  default: () => rh,
  links: () => links3,
  loader: () => loader9
});
var import_react22 = require("@remix-run/react");

// app/components/Hero.tsx
var import_react20 = require("react");

// app/components/Title.tsx
var import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Title() {
  let [searchParams] = (0, import_react19.useSearchParams)(), redirectTo = searchParams.get("redirectTo"), match = (0, import_react19.useMatches)().filter((match2) => match2.data && match2.data.title).pop();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: match != null && match.data.title && match.data.redirect ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react19.Link, { to: redirectTo || match.data.redirect, className: "display-small on-surface-text title", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { icon: "arrow_back_ios", type: "outlined" }, void 0, !1, {
      fileName: "app/components/Title.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    match.data.title
  ] }, void 0, !0, {
    fileName: "app/components/Title.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) : (match == null ? void 0 : match.data.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "display-small on-surface-text title", children: match == null ? void 0 : match.data.title }, void 0, !1, {
    fileName: "app/components/Title.tsx",
    lineNumber: 32,
    columnNumber: 41
  }, this) }, void 0, !1, {
    fileName: "app/components/Title.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/Hero.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Hero() {
  let [time, setTime] = (0, import_react20.useState)(""), updateTime = () => {
    setTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
  };
  return (0, import_react20.useEffect)(() => {
    updateTime();
    let interval = setInterval(updateTime, 1e3);
    return () => clearInterval(interval);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("header", { className: "hero", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Title, {}, void 0, !1, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "dataContainer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(InformacionGeneral, { label: "Fecha", content: (/* @__PURE__ */ new Date()).toLocaleDateString(), type: "filled", variant: "default" }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(InformacionGeneral, { label: "Hora", content: time, type: "filled", variant: "default" }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/components/NavItem.tsx
var import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function NavItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react21.NavLink, { prefetch: "render", to: props.link, className: ({ isActive, isPending }) => "navItem " + (isPending || isActive ? "selected" : ""), end: props.end, children: ({ isActive, isPending }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Icon, { icon: props.icon, type: isActive ? "filled" : "outlined" }, void 0, !1, {
      fileName: "app/components/NavItem.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "label-large", children: props.name }, void 0, !1, {
      fileName: "app/components/NavItem.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/NavigationDrawer.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function NavigationDrawer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("nav", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { "aria-disabled": !0, className: "top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "title-medium", children: "Recursos Humanos" }, void 0, !1, {
        fileName: "app/components/NavigationDrawer.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      props.links.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        NavItem,
        {
          name: item.title,
          link: item.link,
          icon: item.icon,
          end: item.end
        },
        item.title,
        !1,
        {
          fileName: "app/components/NavigationDrawer.tsx",
          lineNumber: 14,
          columnNumber: 45
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { "aria-disabled": !0, className: "bottom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Button, { className: "logout", icon: "logout", color: "error", label: "Cerrar Sesi\xF3n", type: "submit", variant: "outlined" }, void 0, !1, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavigationDrawer.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/styles/rh.css
var rh_default = "/build/_assets/rh-J2R3MRW3.css";

// app/routes/rh.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader9 = async ({ request, params }) => ({
  title: "Recursos Humanos"
}), links3 = () => [{ rel: "stylesheet", href: rh_default }];
function rh() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NavigationDrawer, { links: [{
      title: "Inicio",
      link: "/rh",
      icon: "home",
      end: !0
    }, {
      title: "Empleados",
      link: "./empleados",
      icon: "badge"
    }, {
      title: "Lugares",
      link: "./lugares",
      icon: "storefront"
    }] }, void 0, !1, {
      fileName: "app/routes/rh.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Hero, {}, void 0, !1, {
        fileName: "app/routes/rh.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react22.Outlet, {}, void 0, !1, {
        fileName: "app/routes/rh.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/rh.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/rh.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HJ3RGELC.js", imports: ["/build/_shared/chunk-GI2S6SSH.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5UPMXHPF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/asistencia": { id: "routes/asistencia", parentId: "root", path: "asistencia", index: void 0, caseSensitive: void 0, module: "/build/routes/asistencia-WRK2EVCN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-6H3EHQBX.js", imports: ["/build/_shared/chunk-VWUXSX6C.js", "/build/_shared/chunk-IBCIHWBQ.js", "/build/_shared/chunk-AVKYRRXB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-IVCPR3TQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rh": { id: "routes/rh", parentId: "root", path: "rh", index: void 0, caseSensitive: void 0, module: "/build/routes/rh-6IDBXKDU.js", imports: ["/build/_shared/chunk-COGPOLQ6.js", "/build/_shared/chunk-AVKYRRXB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rh._index": { id: "routes/rh._index", parentId: "routes/rh", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/rh._index-4E3MJ3HM.js", imports: ["/build/_shared/chunk-VWUXSX6C.js", "/build/_shared/chunk-RKBFNAIX.js", "/build/_shared/chunk-IBCIHWBQ.js", "/build/_shared/chunk-6ZK7KAIB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/rh.empleados": { id: "routes/rh.empleados", parentId: "routes/rh", path: "empleados", index: void 0, caseSensitive: void 0, module: "/build/routes/rh.empleados-NUQJCQV4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rh.empleados.$id": { id: "routes/rh.empleados.$id", parentId: "routes/rh.empleados", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/rh.empleados.$id-6ABFJUQY.js", imports: ["/build/_shared/chunk-6ZK7KAIB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rh.empleados._index": { id: "routes/rh.empleados._index", parentId: "routes/rh.empleados", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/rh.empleados._index-KNZHDDD7.js", imports: ["/build/_shared/chunk-RKBFNAIX.js", "/build/_shared/chunk-IBCIHWBQ.js", "/build/_shared/chunk-AVKYRRXB.js", "/build/_shared/chunk-6ZK7KAIB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rh.lugares": { id: "routes/rh.lugares", parentId: "routes/rh", path: "lugares", index: void 0, caseSensitive: void 0, module: "/build/routes/rh.lugares-TNKLSROV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ventas": { id: "routes/ventas", parentId: "root", path: "ventas", index: void 0, caseSensitive: void 0, module: "/build/routes/ventas-UUCL3OZ4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "debf9f84", hmr: void 0, url: "/build/manifest-DEBF9F84.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/rh.empleados._index": {
    id: "routes/rh.empleados._index",
    parentId: "routes/rh.empleados",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: rh_empleados_index_exports
  },
  "routes/rh.empleados.$id": {
    id: "routes/rh.empleados.$id",
    parentId: "routes/rh.empleados",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: rh_empleados_id_exports
  },
  "routes/rh.empleados": {
    id: "routes/rh.empleados",
    parentId: "routes/rh",
    path: "empleados",
    index: void 0,
    caseSensitive: void 0,
    module: rh_empleados_exports
  },
  "routes/asistencia": {
    id: "routes/asistencia",
    parentId: "root",
    path: "asistencia",
    index: void 0,
    caseSensitive: void 0,
    module: asistencia_exports
  },
  "routes/rh.lugares": {
    id: "routes/rh.lugares",
    parentId: "routes/rh",
    path: "lugares",
    index: void 0,
    caseSensitive: void 0,
    module: rh_lugares_exports
  },
  "routes/rh._index": {
    id: "routes/rh._index",
    parentId: "routes/rh",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: rh_index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/ventas": {
    id: "routes/ventas",
    parentId: "root",
    path: "ventas",
    index: void 0,
    caseSensitive: void 0,
    module: ventas_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/rh": {
    id: "routes/rh",
    parentId: "root",
    path: "rh",
    index: void 0,
    caseSensitive: void 0,
    module: rh_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
