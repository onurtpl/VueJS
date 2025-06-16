import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const user = ref(auth.currentUser);

await auth.onAuthStateChanged(_user => {
    if (_user) {
        console.log('User is logged in:', _user);
        user.value = _user;
    } else {
        console.log('No user is logged in');
        user.value = null;
    }
});

const getUser = () => {
    return { user };
    }

export default getUser;