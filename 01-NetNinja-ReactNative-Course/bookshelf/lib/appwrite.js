import { Client, TablesDB, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68aeb9b90035341235f7')
    .setPlatform('dev.code.bookshelf')

export const account = new Account(client)

export const avatars = new Avatars(client)

export const tablesDB = new TablesDB(client)

export const database = new Databases(client)
