<template>
    <section class="mb-10">
        <h1 class="text-center text-2xl sm:text-3xl text-[#E5E5E5] mt-10 mb-2">出すあてのないメールを打つクセがついたのは、いつからだろう。
        </h1>
        <h2 class="text-center text-xl text-[#E5E5E5] mb-5">「秒速5センチメートル　コスモナウト」より</h2>
        <img src="/src/assets/img/5CentimetersPerSecond.png" alt="秒速5センチメートルより、貴樹がメールを打つシーン" class="w-full" />
        <span class="text-sm text-[#E5E5E5]">©Makoto Shinkai / CoMix Wave Films</span>
    </section>
    <div class="flex justify-center mb-10">
        <v-btn @click="createMessage" class="bg-white">
            メッセージを書く
        </v-btn>
    </div>
    <div class="mx-3 sm:mx-10">
        <section>
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-[#E5E5E5] text-center sm:text-left">宇宙船<br
                    class="sm:hidden">「Epistolam ad Astra」<br class="sm:hidden">へようこそ</h2>
        </section>
        <section class="mb-10">
            <h2 class="text-xl sm:text-2xl text-center sm:text-left font-semibold mb-4 text-[#E5E5E5]">
                閉じたままの手紙を、遠い宇宙へ。</h2>
            <p class="mx-4 text-[#E5E5E5]">「Epistolam
                adAstra」は、かけがえのない思い出、届けられなかった想い、そして静かに秘めた感謝を、デジタル宇宙の彼方へと送り出すための宇宙船（プラットフォーム）です。<br>
                あて先はないけれど、心の中のメッセージを宇宙の彼方へと放つ。そんな旅に、あなたも出発しませんか？</p>
        </section>

        <section class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-[#E5E5E5] text-center sm:text-left">伝えたいあなたへ</h3>
            <ul class="list-none mx-4 sm:ml-6 text-[#E5E5E5]">
                <li class="text-[#E5E5E5]">あの人に届けたかった、でも届かなかったメッセージを送信。</li>
                <li class="text-[#E5E5E5]">「このメッセージは秘密にして」を選べば、あなたの思いは静かに宇宙を漂います。</li>
            </ul>
        </section>

        <section class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-[#E5E5E5] text-center sm:text-left">読みたいあなたへ</h3>
            <ul class="list-none mx-4 sm:ml-6 text-[#E5E5E5]">
                <li class="text-[#E5E5E5]">宇宙船に届いた様々なメッセージをランダムに読むことができます。</li>
                <li class="text-[#E5E5E5]">たまには、誰かのメッセージに耳を傾けてみませんか？</li>
            </ul>
        </section>

        <footer class="text-center p-4">
            <p class="text-[#E5E5E5]">Epistolam ad Astraは、<br class="sm:hidden">あなたが宇宙に放つ一通の手紙を、永遠の星にします。</p>
        </footer>
    </div>
</template>

<script>
import newMessageButton from '../components/utils/Button.vue'
import navigationBar from '../components/utils/NavigationBar.vue'
export default {
    components: {
        navigationBar,
        newMessageButton,
    },
    methods: {
        createMessage() {
            this.$router.replace('/write');
        }
    },
}
</script>