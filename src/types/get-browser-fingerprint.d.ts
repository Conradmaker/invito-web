declare module "get-browser-fingerprint" {
  export default function getBrowserFingerprint(payload: {
    /**
     * @default false
     */
    hardwareOnly?: boolean;
    /**
     * @default false
     */
    enableWebgl?: boolean;
    /**
     * @default true
     */
    enableScreen?: boolean;
    /**
     * @default false
     */
    debug?: boolean;
  }): string;
}
