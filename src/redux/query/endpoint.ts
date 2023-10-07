const headers = {
  public: {
    "content-type": "application/json",
  },
  token: {
    "content-type": "application/json",
    "Authorization": `Bearer `
  }
}

export const endPoint = {
  auth: {
    sendInfoRegister: () => ({
      url: "api/v1/access/register/send-info-register",
      method: "POST",
      headers: headers.public,
    }),
    sendCodeRegister: () => ({
      url: "api/v1/access/register/send-code",
      method: "POST",
      headers: headers.public,
    }),
    login: () => ({
      url: "api/v1/access/login",
      method: "POST",
      headers: headers.public,
    }),
    loginToken: () => ({
      url: "api/v1/access-protected/login-token",
      method: "POST",
      headers: headers.token,
    })
  }
}