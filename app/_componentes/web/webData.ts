import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../_firebase/firebase";
import { collection, getDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}

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

export async function getFamilyData() {
    const docSnapAll = await getDocs(collection(db, "ruleta"))
    const docDataAll: any = []
    docSnapAll.forEach((doc) => {
        docDataAll.push(doc.data())
    });
    return docDataAll;
}
export async function setFamilyData(data:Persona) {
    console.log(data);
    
    await setDoc(doc(db, "ruleta", data.nombre), {
        nombre:data.nombre,
        regalos: data.regalos,
        aRegalar: data.aRegalar,
        leRegala: data.leRegala
      });
    await updateDoc(doc(db, "ruleta", data.aRegalar), {
        leRegala: data.nombre
      });
}

export default getWebData