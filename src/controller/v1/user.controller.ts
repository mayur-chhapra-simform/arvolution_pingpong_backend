import db from '../../helpers/database.helper'

const addUser = (req: any, res: any) => {
  // tslint:disable-next-line:no-console
  console.log(req.body)
  return res.json(req.body)
}

export default {
  addUser
}