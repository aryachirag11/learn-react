const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinymceapikey: String(import.meta.env.VITE_TINYMCE_API_KEY),
};
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

// console.log(conf.appwriteUrl);
// console.log(conf.appwriteProjectId);
// console.log(conf.appwriteDatabaseId);
// console.log(conf.appwriteCollectionId);
// console.log(conf.appwriteBucketId);
// console.log(conf.tinymceapikey);

export default conf;
