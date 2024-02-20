import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65cb22774820753c7d3a"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
