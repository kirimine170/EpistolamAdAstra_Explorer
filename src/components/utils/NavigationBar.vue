<template>
    <v-app-bar>
        <v-app-bar-title>
            <v-btn @click="returnTopPage">
                <v-icon :icon="EpistolamAdAstraIcon" size="x-large"></v-icon>
                EpistolamAdAstra
            </v-btn>
        </v-app-bar-title>
        <template v-slot:extension>
            <v-spacer />

            <v-btn @click="writeMessage">
                メッセージを書く
            </v-btn>
            <v-spacer />
            <v-btn @click="returnTopPage">
                <v-icon :icon="EpistolamAdAstraIcon" size="x-large"></v-icon>
            </v-btn>
            <v-spacer />
            <v-btn @click="readMessage">
                メッセージを読む
            </v-btn>
            <v-spacer />
        </template>
    </v-app-bar>
</template>

<script>
import EpistolamAdAstraIcon from '@/components/icons/EpistolamAdAstraIcon.vue';
export default {
    data() {
        return {
            EpistolamAdAstraIcon: EpistolamAdAstraIcon,
        }
    },

    methods: {
        writeMessage() {
            //alert('kurumichan');
            this.$router.replace('/write');
        },
        returnTopPage() {
            this.$router.replace('/');
        },
        readMessage() {
            this.$router.replace('/read');
        }
    }
}
</script>