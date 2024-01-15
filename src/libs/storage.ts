type SessionStorage = {
  test: string | null;
};
type LocalStorage = {
  refreshToken: string | null;
  fingerPrint: string | null;
};
export const appStorage = {
  session: {
    set: (payload: Partial<SessionStorage>) => {
      Object.entries(payload).forEach(([key, value]) => {
        sessionStorage.setItem(
          key,
          typeof value === "string" ? value : JSON.stringify(value)
        );
      });
    },
    get: <T extends keyof SessionStorage>(key: T): SessionStorage[T] => {
      const res = sessionStorage.getItem(key);
      if (
        res?.includes("{") ||
        res?.includes("[") ||
        res?.includes("undefined") ||
        res?.includes("null")
      )
        return JSON.parse(res);
      else return res;
    },
    remove: (key: keyof SessionStorage) => {
      sessionStorage.removeItem(key);
    },
    clear: () => {
      sessionStorage.clear();
    },
  },
  local: {
    set: (payload: Partial<LocalStorage>) => {
      Object.entries(payload).forEach(([key, value]) => {
        localStorage.setItem(
          key,
          typeof value === "string" ? value : JSON.stringify(value)
        );
      });
    },
    get: <T extends keyof LocalStorage>(key: T): LocalStorage[T] => {
      const res = localStorage.getItem(key);
      if (
        res?.includes("{") ||
        res?.includes("[") ||
        res?.includes("undefined") ||
        res?.includes("null")
      )
        return JSON.parse(res);
      else return res;
    },
    remove: (key: keyof LocalStorage) => {
      localStorage.removeItem(key);
    },
    clear: () => {
      localStorage.clear();
    },
  },
};
