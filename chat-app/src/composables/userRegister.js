import { db, auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

export const useRegister = () => {

  const registerErrors = ref(null);
  const registerSuccess = ref(false);
  const registerUser = ref(null);

  const signup = async (displayName, email, password) => {

    try {
      if (!displayName){
        registerErrors.value = 'Display name is required';
        registerSuccess.value = false;
        return;
      }
        
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      registerUser.value = userCredential.user;
      registerSuccess.value = true;
      registerErrors.value = null;
    } catch (error) {
      registerSuccess.value = false;
      registerUser.value = null;
      registerErrors.value = error.message;
      
    }
  };

  return { registerUser, registerErrors, registerSuccess, signup };
}

export default useRegister;;