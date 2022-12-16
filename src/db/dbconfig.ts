

export const dbconfig={
    host     : process.env.DBHOST,
    port     : process.env.DBPORT,
    database : process.env.DBNAME,
    user     : process.env.DBUSER,
    password : process.env.DBPASS
}

export const dbquerys={
    getAllChannels: 'SELECT * FROM channels',
    getChannelById: `SELECT * FROM channels WHERE id = :id`,
}