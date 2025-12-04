"use client";

import { createContext, useContext, ReactNode } from "react";

type LayerContext = {
  host: string,
  layer: number,
  content: string,
  params: string,
  frontLink: string,
  promoLink: string,
};

const LayerContext = createContext<LayerContext | undefined>(undefined);

type LayerProviderProps = {
  host: string,
  layer: number,
  params: string,
  content: string,
  children: ReactNode,
};

export function LayerProvider({
  host,
  layer,
  params,
  content,
  children,
}: LayerProviderProps) {

  // SET LINKS
  const frontLinkBase = "https://pagamento.watchtuberewards.com/checkout/204056770:1?cid={{ad.id}}";
  const promoLinkBase = "https://pagamento.watchtuberewards.com/checkout/204056770:1?cid={{ad.id}}";
  
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

};

export function useLayer() {

  const layer = useContext(LayerContext);

  if (!layer) {
    throw new Error("useLayer deve ser usado dentro de LayerProvider");
  };
  
  return layer;

};