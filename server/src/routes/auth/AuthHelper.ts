import User from 'src/models/user/User';
import Connection from 'src/database/Connection';
import { PassportStatic } from 'passport';
import {Strategy} from 'passport-local';
import bcrypt from 'bcrypt';

export default class AuthHelper {

    public static insertNewUser = async (user: User): Promise<User|null> => {
        const db = Connection.getInstance();

        const result = await db.query(`
            INSERT INTO users (email, password, register_date)
            VALUES(
                ${db.escape(user.getEmail())},
                ${db.escape(user.getPassword())}
                , NOW()
            )
        `);

        return AuthHelper.userById(result.lastInsertedId);
    }

    public static userByEmail = async (email: string): Promise<User|null> => {
        const db = Connection.getInstance();

        const res = await db.query(`
            SELECT id FROM users
            WHERE email = ${db.escape(email)}
            LIMIT 1
        `);

        if (Array.isArray(res)) {
            return null;
        }

        return await AuthHelper.userById(res.id);
    }

    public static userById = async (id: number): Promise<User|null> => {
        const db = Connection.getInstance();

        const user = (new User()).deserialize(await db.query(`
            SELECT
                id, email, password, is_admin AS isAdmin, register_date AS registerDate
            FROM users
            WHERE id = ${db.escape(id)}
        `));

        if (user.notNull()) {
            return user;
        }
        return null;
    }

    public static initPassport = (passport: PassportStatic) => {
        passport.use(new Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email, password, done) => {
            const user = await AuthHelper.userByEmail(email);
            if (user === null) {
                return done(null, null);
            }

            if (await bcrypt.compare(password, user.getPassword())) {
                return done(null, user);
            }
            return done(null, null);
        }));

        passport.serializeUser((user: User, done) => {
            done(null, user.getId());
        });
        passport.deserializeUser(async (id: number, done) => {
            done(null, await AuthHelper.userById(id));
        })
    }

}
