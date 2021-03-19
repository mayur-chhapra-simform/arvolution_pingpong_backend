const serverError = {
  data: {},
  status: 500,
  message: 'Something went'
}

const serverSuccess = (data: any) => {
  return {
    data,
    status: 200
  }
}

export {
  serverError,
  serverSuccess
}