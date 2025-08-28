import { Account, Client, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68aeb9b90035341235f7')
    .setPlatform('dev.code.bookshelf')

export const account = new Account(client)

export const avatars = new Avatars(client)



