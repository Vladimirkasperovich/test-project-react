/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_STORE_BASE_URL: string
  readonly VITE_GEO_API_URL: string
  readonly VITE_WEATHER_BASE_URL: string
  readonly VITE_WEATHER_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
