import VuexORM from "@vuex-orm/core";
import User from "./models/user";
import Post from "./models/posts";

const database = new VuexORM.Database();
database.register(User);
database.register(Post);

export { database };
