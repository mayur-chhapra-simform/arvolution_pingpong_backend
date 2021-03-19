/**
 * Author: Mayur Chhapra
 */
import ScoreModel from '../../model/score.schema'
import {serverError, serverSuccess} from '../../helpers/response.helper'
import {Request, Response} from 'express'

const addScore = async (req: Request, res: Response): Promise<any> => {
  try {

    const {player_ids, score, game_id} = req.body
    // Prepare data for the bulk insert
    const rawData: any[] = []
    for (let i=0; i<player_ids.length; i++) {
      rawData.push( ScoreModel.findOneAndUpdate(
        {player_id: player_ids[i] },
        {
          player_id: player_ids[i],
          score: score[i],
          game_id
        },
        {upsert: true}
      ) )
    }
    // Upsert
    await Promise.all(rawData);
    return res.json(serverSuccess({data: 'Saved...'}))
  } catch (e) {
    console.log(e)
    return res.json(serverError)
  }
}

export default {
  addScore
}