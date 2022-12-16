import type { NextApiRequest, NextApiResponse } from 'next'
import { dbquerys } from '../../src/db/dbconfig'
import executeQuery from '../../src/db/dbhelper'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method==='GET'){
        if(req.query.id){
            //Get specific channel 
            res.status(200).json({ name: 'John Doe' })
    }    else{
            const result=await executeQuery({query: dbquerys.getAllChannels})
            res.status(200).json(result)
        }
    }   
}