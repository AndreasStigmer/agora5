import mysql from 'serverless-mysql'
import { Channel } from '../types'
import { dbconfig } from './dbconfig'



export default async function executeQuery({query, values}: {query: string, values?: any[]}): Promise<Array<Channel>> {
    try {
        const connection = mysql({
            config: {
                host: dbconfig.host,
                database: dbconfig.database,
                user: dbconfig.user,
                password: dbconfig.password
            }
        })
        const results = await connection.query(query, values)
        await connection.end()
        return results as Array<Channel>
    }catch(error) {
        console.log(error)
        return []
    }
}