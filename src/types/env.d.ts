declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_PORT: string;
    readonly REACT_ENV: "development" | "production" | "test";
    readonly REACT_LOGIN_EMAIL: string;
    readonly REACT_LOGIN_PASSWORD: string;
  }
}
