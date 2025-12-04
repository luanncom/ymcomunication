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

  // Links base da Stripe
  const frontLinkBase = "https://pagamento.watchtuberewards.com/checkout/204056770:1?cid={{ad.id}}";
  const promoLinkBase = "https://pagamento.watchtuberewards.com/checkout/204056770:1?cid={{ad.id}}";

  // Pega todos os parâmetros atuais
  const urlParams = new URLSearchParams(params || "");

  // Pega o xcod (tráfego da META)
  const xcod = urlParams.get("xcod");

  // Se existir xcod, usa também no client_reference_id
  if (xcod) {
    urlParams.set("client_reference_id", xcod);
  }

  const finalQuery = urlParams.toString();

  const frontLink = finalQuery
    ? `${frontLinkBase}?${finalQuery}`
    : frontLinkBase;

  const promoLink = finalQuery
    ? `${promoLinkBase}?${finalQuery}`
    : promoLinkBase;

  return (
    <LayerContext.Provider
      value={{
        host,
        layer,
        params: finalQuery,
        content,
        frontLink,
        promoLink,
      }}
    >
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