/**
 * Author: Mayur Chhapra
 */

import GameModel from '../../model/game.schema'
import {serverError, serverSuccess} from '../../helpers/response.helper'

// Add Game name
const addGame = async (req: any, res: any): Promise<any> => {
  try {
    const data = await GameModel.create(req.body)
    return res.json(serverSuccess(data))
  } catch (e) {
    console.log(e)
    return res.json(serverError)
  }
}

const getGames = async (req: any, res: any): Promise<any> => {
  try {
    const getData = await GameModel.find()
    return res.json(serverSuccess(getData))
  } catch (e) {
    return res.json(serverError)
  }
}

export default {
  addGame,
  getGames
}