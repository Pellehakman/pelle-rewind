import { getDatabase, ref, set } from "firebase/database";

export default function writeUserData(userId: string, name: any, email: any, imageUrl: any) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}