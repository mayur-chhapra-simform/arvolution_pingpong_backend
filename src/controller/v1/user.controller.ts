/**
 * Author: Mayur Chhapra
 */
import UserModel from '../../model/user.schema'
import {serverError, serverSuccess} from '../../helpers/response.helper'

const addUsers = async (req: any, res: any): Promise<any> => {
  try {
    // Prepare input for bulk insert
    const rawData: any[] = [
      { name: req.body.player_1 },
      { name: req.body.player_2 }]

    const data = await UserModel.insertMany(rawData)
    return res.json(serverSuccess(data))
  } catch (e) {
    console.log(e)
    return res.json(serverError)
  }
}


export default {
  addUsers
}