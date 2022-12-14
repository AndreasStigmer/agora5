import { env } from "process";


const config = {
    mongodb_uri: env.MONGODB_URI?? 'mongodb://localhost:27017',
    agora_app_id: env.AGORA_APP_ID?? '0d6bd56df35b4828bd13f2f7beae4bed',
    agora_app_token: env.AGORA_APP_TOKEN?? '007eJxTYIiuf7COv2dCzOms1kyljW+2HwjapPL35mSGqZfPupdWHcxQYDBIMUtKMTVLSTM2TTKxMLJISjE0TjNKM09KTUw1SUpNab86IbkhkJHB7aESMyMDBIL4LAwlqcUlDAwACpYiZQ==',
    agora_channel:"test",
    initial_layout:"pinned"
}


export default config;
