import knex, { Knex } from "knex";
import { ageKey, emailKey, idKey, nicknameKey, passwordKey, usernameKey } from "../constants";

const user_t = 'user_t';


const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: './myData.db'
    },
    useNullAsDefault: true
}

const knexInstance = knex(config);

try {
    knexInstance.schema.hasTable(user_t).then((has) => {
        if(has) {
            return;
        }
        knexInstance.schema.createTable(user_t, (table) => {
            table.increments(idKey);
            table.string(usernameKey);
            table.string(passwordKey);
            table.integer(ageKey);
            table.string(nicknameKey);
            table.string(emailKey);
        }).then(() => {
            console.log("数据表创建成功");
        })
    });
} catch (error) {
    console.log('创建数据表出错');
}


export async function insertUser(user: User): Promise<boolean> {

    try {
        const result = await knexInstance(user_t).insert(user);
        return result.length > 0
    } catch (error) {
        console.log('插入数据失败');
        return false;
    }
}

export async function queryPureUser(userName: string): Promise<PureUser | null> {
    try {
        const result = await knexInstance<PureUser>(user_t).select(usernameKey, nicknameKey, ageKey, emailKey, idKey).where({username: userName});
        console.log(result);
        return result[0];
    } catch (error) {
        return null;
    }
}

export async function queryPassword(userName: string): Promise<string> {
    try {
        const result = await knexInstance(user_t).select(passwordKey).where({username: userName});
        return result[0][passwordKey];
    } catch (error) {
        return '';
    }
}