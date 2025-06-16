<template>
  <div class="container">
    <Navbar @gotoHome="handleGotoHome" />
    <div class="chat-container">
      <ChatWindow />
      <ChatForm />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ChatForm from "@/components/ChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import { useRouter } from "vue-router";

export default {
  name: "ChatOda",
  components: {
    Navbar,
    ChatForm,
    ChatWindow,
  },

  setup() {
    const router = useRouter();

    const handleGotoHome = () => {
      console.log("Go to home");
      router.push({ name: "Home" }); // Örnek olarak chat odasına yönlendiriyoruz
    };
    return {
      handleGotoHome,
    };
  },
};
</script>

<style></style>
