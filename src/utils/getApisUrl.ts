export const getApisUrl = (hostname: string) => {
  let coreApiHost
  let authApiHost

  if (hostname.includes('preprod.simplex-rh.com')) {
    coreApiHost = 'https://preprod.simplex-rh.com'
    authApiHost = 'https://preprod-authentification.simplex-rh.com'
  } else if (hostname.includes('staging.simplex-rh.com') || hostname.includes('localhost')) {
    coreApiHost = 'https://staging.simplex-rh.com'
    authApiHost = 'https://staging-authentification.simplex-rh.com'
  } else {
    coreApiHost = 'https://simplex-rh.com'
    authApiHost = 'https://authentification.simplex-rh.com'
  }

  return { coreApiHost, authApiHost }
}
