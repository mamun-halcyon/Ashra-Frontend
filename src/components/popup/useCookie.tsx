"use client";
import { useState, useEffect } from "react";
import { useCookies } from "cookies";

export default function useCookie(name: string, defaultValue: string) {
  const [cookies, setCookie, removeCookie] = useCookies([name]);
  const [value, setValue] = useState(cookies[name] || defaultValue);

  useEffect(() => {
    if (value !== cookies[name]) {
      setCookie(name, value, { path: "/" });
    }
  }, [value, cookies, name, setCookie]);

  return { value, setValue, removeCookie };
}
