import { useEffect } from "react";

type KeyDownAction = () => void;

export function useKeyDown(key: string, action: KeyDownAction) {
  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      }
      document.addEventListener("keydown", callback);

      return () => {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
