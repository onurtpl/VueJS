import { auth } from "@/firebase/config";
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    const loginErrors = ref(null);
    const loginSuccess = ref(false);
    const loginUser = ref(null);

    const login = async (email, password) => {
        try {
            if (!email || !password) {
                loginErrors.value = 'Email and password are required';
                loginSuccess.value = false;
                return;
            }
            const userCredential=  await signInWithEmailAndPassword(auth, email, password);
            // const userCredential = await auth.signInWithEmailAndPassword(email, password);
            loginUser.value = userCredential.user;
            loginSuccess.value = true;
            loginErrors.value = null;
        } catch (error) {
            loginSuccess.value = false;
            loginUser.value = null;
            loginErrors.value = error.message;
        }
    }
    return { loginUser, loginErrors, loginSuccess, login };
}

export default useLogin;
