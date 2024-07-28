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
    const storageRef = ref(storage, "gs://portfolio-3be41.appspot.com")
    const docData: any = []
    docSnap.forEach((doc) => {
        docData.push({ data: doc.data(), id: doc.id })
    });
    const arrayProjects: any = await Promise.all(docData.map(async (doc: any) => {
        try {
            const url = await getDownloadURL(ref(storageRef, `Web/${doc.id}.png`));
            return { url, ...doc };
        } catch (error) {
            console.error(error);
        }
    }))
    return arrayProjects;
}
getWebData();
export async function getFoto() {
    const storageRef = ref(storage, "gs://portfolio-3be41.appspot.com")
    console.log("dentro");
    
    return getDownloadURL(ref(storageRef, `Web/foto.jpg`)).then(url=>url).catch((error) => {
        console.error('Error getting download URL', error);
      });
}

export async function getFamilyData() {
    const docSnapAll = await getDocs(collection(db, "ruleta"))
    const docDataAll: any = []
    docSnapAll.forEach((doc) => {
        docDataAll.push(doc.data())
    });
    return docDataAll;
}
export async function setFamilyData(data:Persona) {
    const familia = [] as Persona[];
    let todos = 0;
    getFamilyData().then(data=>familia.push(data))

    console.log(data);
    
    if (familia) {
        familia.forEach(element => {
            if (element.leRegala !== "") {
                todos++;
            }
        });
        if (todos === familia.length) {
            console.log("terminado");
            
        }
        
        await setDoc(doc(db, "ruleta", data.nombre), {
            nombre:data.nombre,
            regalos: data.regalos || [""],
            aRegalar: data.aRegalar,
            leRegala: data.leRegala
          });
        await updateDoc(doc(db,"ruleta",data.aRegalar),{
            leRegala:data.nombre
        })
    }

}

export default getWebData