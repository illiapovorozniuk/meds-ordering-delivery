import { useEffect } from "react";

type KeyDonwAction = () => void;

export function useKeyDown(key: string, action: KeyDonwAction) {
  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
        console.log(key);
      }
      document.addEventListener("keydown", callback);

      return () => {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
