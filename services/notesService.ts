import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID || "";
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID || "";

const notesService = {
  async getNotes() {
    const response = await databaseService.getDocuments(dbId, collectionId);
    if ("error" in response) {
      return { error: response.error };
    }
    return { data: response };
  },
};

export default notesService;
