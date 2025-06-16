<template>
    <div class="chat-window">
        <div v-if="errorGetCollection" class="error">
            <p>Error loading messages: {{ errorGetCollection }}</p>
        </div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in convertedDocuments " :key="doc.id" class="single" >
                <span class="created-at">{{ doc.olusturulmaTarihi }}</span>
                <span class="name">{{ doc.kullanici }}</span>
                <span class="text" style="text-decoration: none;">{{ doc.mesaj }}</span>
            </div>

        </div>
    </div>
  
</template>

<script>
import { ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';
import getCollection from '@/composables/getCollection';
import { computed, onUpdated } from 'vue';

export default {
    setup() {
        const { documents, errorGetCollection }  = getCollection('mesajlar');
        
        const convertedDocuments = computed(() => {
            return documents.value.map(doc => {
                return {
                    ...doc,
                    olusturulmaTarihi: formatDistanceToNow(doc.olusturulmaTarihi.toDate()), // Tarihi daha okunabilir bir formata dönüştürüyoruz
                };
            });
        });

        const messages = ref(null);
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        });
        return {
            documents,
            errorGetCollection,
            convertedDocuments,
            messages
        };
    }
    

}
</script>

<style scoped>

</style>