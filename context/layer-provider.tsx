"use client";

import { createContext, useContext, ReactNode } from "react";

type LayerContext = {
  host: string;
  layer: number;
  content: string;
  params: string;
  frontLink: string;
  promoLink: string;
};

const LayerContext = createContext<LayerContext | undefined>(undefined);

type LayerProviderProps = {
  host: string;
  layer: number;
  params: string;
  content: string;
  children: ReactNode;
};

export function LayerProvider({
  host,
  layer,
  params,
  content,
  children,
}: LayerProviderProps) {
  // LINKS BASE DA STRIPE
  let frontLink = "https://buy.stripe.com/4gM3cvgZ7aQG21Q7lC9sk0n";
  let promoLink = "https://buy.stripe.com/eVqbJ138h4sibCqdK09sk0o";

  // --- MONTA client_reference_id A PARTIR DOS PARAMS ---
  try {
    if (params) {
      // params pode vir com ou sem "?"
      const search = params.startsWith("?") ? params.slice(1) : params;
      const searchParams = new URLSearchParams(search);

      // aqui usamos o xcod, que já tem toda a info da campanha
      const xcod = searchParams.get("xcod");

      if (xcod) {
        const suffix = `client_reference_id=${encodeURIComponent(xcod)}`;

        frontLink =
          frontLink + (frontLink.includes("?") ? "&" : "?") + suffix;

        promoLink =
          promoLink + (promoLink.includes("?") ? "&" : "?") + suffix;
      }
    }
  } catch (e) {
    // se der qualquer erro ao ler params, mantém os links base
    console.warn("Erro ao processar params para client_reference_id:", e);
  }

  const contextValue = {
    host,
    layer,
    params,
    content,
    frontLink,
    promoLink,
  };

  return (
    <LayerContext.Provider value={contextValue}>
      {children}
    </LayerContext.Provider>
  );
}

export function useLayer() {
  const layer = useContext(LayerContext);

  if (!layer) {
    throw new Error("useLayer deve ser usado dentro de LayerProvider");
  }

  return layer;
}