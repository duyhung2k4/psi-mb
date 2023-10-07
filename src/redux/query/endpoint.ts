const header = {
  public: {
    'content-typee': 'application/json',
  },
}

export const endPoint = {
  auth: {
    sendInfoRegister: () => ({
      url: "api/v1/access/register/send-info-register",
      method: "POST",
      header: header.public,
    }),
    sendCodeRegister: () => ({
      url: "api/v1/access/register/send-code",
      method: "POST",
      header: header.public,
    }),
    login: () => ({
      url: "api/v1/access/login",
      method: "POST",
      header: header.public,
    })
  }
}