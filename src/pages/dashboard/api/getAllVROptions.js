import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const getAllVROptions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "VROptions"));
    const vrOptions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { vrOptions }; // Return an object with vrOptions
  } catch (error) {
    console.error("Error fetching VR options:", error);
    return { vrOptions: [] }; // Return an object to match the expected format
  }
};
