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

  // ---------------------------------------------------------
  // LINKS ORIGINAIS DA STRIPE — não mexa neles!
  // ---------------------------------------------------------
  let frontLinkBase = "https://buy.stripe.com/4gM3cvgZ7aQG21Q7lC9sk0n";
  let promoLinkBase = "https://buy.stripe.com/eVqbJ138h4sibCqdK09sk0o";

  // ---------------------------------------------------------
  // PEGA OS PARAMETROS da URL
  // ---------------------------------------------------------
  const searchParams = new URLSearchParams(params);

  // Esse é o valor completo da campanha/meta ads (xcod)
  const xcod = searchParams.get("xcod");

  // ---------------------------------------------------------
  // MONTA O LINK FINAL JÁ COM client_reference_id
  // ---------------------------------------------------------
  let frontLink = frontLinkBase;
  let promoLink = promoLinkBase;

  if (xcod && xcod.trim() !== "") {
    frontLink = `${frontLinkBase}?client_reference_id=${encodeURIComponent(xcod)}`;
    promoLink = `${promoLinkBase}?client_reference_id=${encodeURIComponent(xcod)}`;
  }

  // ---------------------------------------------------------
  // CONTEXT FINAL
  // ---------------------------------------------------------
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
