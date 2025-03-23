import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Đổi thành endpoint của bạn
  .setProject("67506d930039e1733c08");

const databases = new Databases(client);

export interface Subject {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];  
  title: string;
}


export const fetchSubjects = async (): Promise<Subject[]> => {
  try {
    const response = await databases.listDocuments<Subject>(
      "629d94faa7d8896834b3",
      "629d94fbb322cb02f5b0"
    );
    console.log("📌 Dữ liệu lấy từ Appwrite:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("❌ Lỗi khi lấy dữ liệu từ Appwrite:", error);
    return [];
  }
};
