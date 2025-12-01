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
  params: string;  // querystring vinda da URL, sem "?"
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
  // LINKS BASE DA STRIPE (sem querystring)
  // ---------------------------------------------------------
  const frontLinkBase = "https://buy.stripe.com/4gM3cvgZ7aQG21Q7lC9sk0n";
  const promoLinkBase = "https://buy.stripe.com/eVqbJ138h4sibCqdK09sk0o";

  // ---------------------------------------------------------
  // LÊ OS PARÂMETROS DA URL QUE VÊM DA META
  // (utm_source, utm_campaign, xcod, etc.)
  // ---------------------------------------------------------
  const urlParams = new URLSearchParams(params || "");

  // xcod = “pacote” com os dados da campanha
  const xcod = urlParams.get("xcod");

  // Se existir xcod, usamos ele também como client_reference_id
  if (xcod && xcod.trim() !== "") {
    urlParams.set("client_reference_id", xcod);
  }

  // Query final que será usada na Stripe
  const finalQuery = urlParams.toString(); // ex: utm_source=...&utm_campaign=...&xcod=...&client_reference_id=...

  // Monta os links finais da Stripe já com todos os parâmetros
  const frontLink =
    finalQuery ? `${frontLinkBase}?${finalQuery}` : frontLinkBase;

  const promoLink =
    finalQuery ? `${promoLinkBase}?${finalQuery}` : promoLinkBase;

  const contextValue = {
    host,
    layer,
    params: finalQuery, // agora já inclui client_reference_id
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