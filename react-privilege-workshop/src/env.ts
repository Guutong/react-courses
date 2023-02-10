interface ENV {
  environment: string
  apiBaseUrl: string
}

const processEnv = process.env as Record<string, string>;

export const env: ENV = {
  environment: processEnv.REACT_APP_ENVIRONMENT, 
  apiBaseUrl: processEnv.REACT_APP_API_BASE_URL
}
