import { useCallback, useState } from "react";
import { useEffect } from "react";
import type { HeadersFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

/// @ts-ignore - is generated everytime by cosmos
import { decorators, fixtures, rendererConfig } from "~/cosmos.userdeps.js";

// only load cosmos in the browser
const shouldLoadCosmos = typeof window !== "undefined";

// CORS: allow sites hosted on other URLs to access this one.
export const headers: HeadersFunction = () => {
  return { "Access-Control-Allow-Origin": "*" };
};

// mount the DOM renderer, notice it hydrates into `body`
function Cosmos() {
  const [cosmosLoaded, setCosmosLoaded] = useState(false);
  const loadRenderer = useCallback(async () => {
    /// @ts-ignore - works
    const { mountDomRenderer } = (await import("react-cosmos/dom")).default;
    mountDomRenderer({
      decorators,
      fixtures,
      rendererConfig: {
        ...rendererConfig,
        containerQuerySelector: "body",
      },
    } as any);
  }, []);

  useEffect(() => {
    if (shouldLoadCosmos && !cosmosLoaded) {
      loadRenderer();
      setCosmosLoaded(true);
    }
  }, [loadRenderer, cosmosLoaded]);

  return <div className="cosmos-container" />;
}

export default Cosmos;