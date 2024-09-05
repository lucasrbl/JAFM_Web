import { auth, db } from "@/config/firebase";
import { handleNavigation } from "@/utils/handleNavigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

type handleSignUpParamsTypes = {
    email: string,
    pass: string,
    collection: string,    
    phoneNumber: string,
    name: string,
    cpf: string,
    affiliate: string,
    classes: string,
    birthDate: string

}

export const handleSignUp = async ({ 
    email, 
    pass, 
    collection,
    affiliate,
    birthDate,
    classes,
    cpf,
    name,
    phoneNumber
}: handleSignUpParamsTypes) => {
    try {
      // Crie o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      await setDoc(doc(db, collection, user.uid), {
        email,
        phoneNumber,
        name,
        cpf,
        affiliate,
        classes,
        userUid: user.uid,
        birthDate
      });

      console.log("Usuário cadastrado com sucesso:", user);
      handleNavigation("/home");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };