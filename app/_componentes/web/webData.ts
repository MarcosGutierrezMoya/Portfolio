import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../_firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';

// Firesotre
async function getWebData() {

    const docSnap = await getDocs(collection(db, "web"))
    const storageRef = ref(storage, "gs://portfolio-e6089.appspot.com")
    const docData: any = []
    docSnap.forEach((doc) => {
        docData.push({ data: doc.data(), id: doc.id })
    });
    const arrayProjects: any = await Promise.all(docData.map((doc: any) => {
        return getDownloadURL(ref(storageRef, `Web/${doc.id}.png`))
            .then((url) => {
                return { url, ...doc }
            })
            .catch((error) => {
                console.error(error);
            });
    }))
    return arrayProjects;
}
getWebData();


export default getWebData