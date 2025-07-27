import { database } from "./appwrite";

const databaseService = {
  // List documents
  async getDocuments(dbId: string, collectionId: string) {
    try {
      const response = await database.listDocuments(dbId, collectionId);
      return response.documents || [];
    } catch (error: any) {
      console.error("Error: ", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
