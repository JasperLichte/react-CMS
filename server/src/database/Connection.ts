import mysql from 'mysql';
import credentials from 'src/config/credentials';

export default class Connection {

    private static instane: Connection = new Connection();
    public static getInstance = () => Connection.instane;

    private db: mysql.Connection;

    private constructor() {
        this.db = mysql.createConnection({
            host: credentials.db.host,
            user: credentials.db.username,
            password: credentials.db.password,
            database: credentials.db.db,
        });

        this.db.connect((err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }

    public close() {
        this.db.end();
    }

    public query = (q: string, values: string[] = [], typeCast: boolean = true) =>
        new Promise<any>((resolve, reject) => {
            this.db.query(
                {
                    sql: q,
                    values,
                    typeCast,
                },
                (err, res, _) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(Array.isArray(res)
                        ? res.length > 1
                            ? res
                            : res.length > 0
                                ? res [0]
                                : res
                        : res);
                },
            );
        })

    public escape = (value: any, stringify: boolean = false) => this.db.escape(value, stringify);
    public quoatate = (value: any) => this.escape(value, true);

}
