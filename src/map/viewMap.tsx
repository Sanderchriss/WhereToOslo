import { Map } from "ol";
import React, { MutableRefObject, useEffect, useRef } from "react";

export function ViewMap({ map }: { map: Map }) {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return <div ref={mapRef}></div>;
}
