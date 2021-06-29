import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test_migration",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
}).then(connection => {
    console.log('connection success')
    // here you can start to work with your entities
}).catch(error => console.log(error));


