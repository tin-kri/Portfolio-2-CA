import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollToId() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
}