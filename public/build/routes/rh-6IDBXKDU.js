import {
  InformacionGeneral
} from "/build/_shared/chunk-COGPOLQ6.js";
import {
  Button,
  Icon
} from "/build/_shared/chunk-AVKYRRXB.js";
import {
  Link,
  NavLink,
  Outlet,
  useMatches,
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

// browser-route-module:routes/rh.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/rh.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Hero.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());

// app/components/Title.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Title() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const match = useMatches().filter((match2) => match2.data && match2.data.title).pop();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: (match == null ? void 0 : match.data.title) && match.data.redirect ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: redirectTo ? redirectTo : match.data.redirect, className: "display-small on-surface-text title", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "arrow_back_ios", type: "outlined" }, void 0, false, {
      fileName: "app/components/Title.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    match.data.title
  ] }, void 0, true, {
    fileName: "app/components/Title.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) : (match == null ? void 0 : match.data.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "display-small on-surface-text title", children: match == null ? void 0 : match.data.title }, void 0, false, {
    fileName: "app/components/Title.tsx",
    lineNumber: 32,
    columnNumber: 41
  }, this) }, void 0, false, {
    fileName: "app/components/Title.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/Hero.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Hero() {
  const [time, setTime] = (0, import_react2.useState)("");
  const updateTime = () => {
    setTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
  };
  (0, import_react2.useEffect)(() => {
    updateTime();
    const interval = setInterval(updateTime, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "hero", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, {}, void 0, false, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataContainer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InformacionGeneral, { label: "Fecha", content: (/* @__PURE__ */ new Date()).toLocaleDateString(), type: "filled", variant: "default" }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InformacionGeneral, { label: "Hora", content: time, type: "filled", variant: "default" }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/components/NavigationDrawer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/NavItem.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function NavItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "render", to: props.link, className: ({ isActive, isPending }) => "navItem " + (isPending ? "selected" : isActive ? "selected" : ""), end: props.end, children: ({ isActive, isPending }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: props.icon, type: isActive ? "filled" : "outlined" }, void 0, false, {
      fileName: "app/components/NavItem.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "label-large", children: props.name }, void 0, false, {
      fileName: "app/components/NavItem.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/NavItem.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/NavigationDrawer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function NavigationDrawer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "aria-disabled": true, className: "top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "title-medium", children: "Recursos Humanos" }, void 0, false, {
        fileName: "app/components/NavigationDrawer.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      props.links.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        NavItem,
        {
          name: item.title,
          link: item.link,
          icon: item.icon,
          end: item.end
        },
        item.title,
        false,
        {
          fileName: "app/components/NavigationDrawer.tsx",
          lineNumber: 14,
          columnNumber: 45
        },
        this
      ))
    ] }, void 0, true, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "aria-disabled": true, className: "bottom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { className: "logout", icon: "logout", color: "error", label: "Cerrar Sesi\xF3n", type: "submit", variant: "outlined" }, void 0, false, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/NavigationDrawer.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NavigationDrawer.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/styles/rh.css
var rh_default = "/build/_assets/rh-J2R3MRW3.css";

// app/routes/rh.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: rh_default }];
};
function rh() {
  let links2 = [{
    title: "Inicio",
    link: "/rh",
    icon: "home",
    end: true
  }, {
    title: "Empleados",
    link: "./empleados",
    icon: "badge"
  }, {
    title: "Lugares",
    link: "./lugares",
    icon: "storefront"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavigationDrawer, { links: links2 }, void 0, false, {
      fileName: "app/routes/rh.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Hero, {}, void 0, false, {
        fileName: "app/routes/rh.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/rh.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/rh.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/rh.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
export {
  rh as default,
  links
};
//# sourceMappingURL=/build/routes/rh-6IDBXKDU.js.map
