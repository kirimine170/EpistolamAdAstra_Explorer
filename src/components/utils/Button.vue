<template>
    <button @click="メッセージ作成画面に遷移" class="text-center text-2xl font-bold border-2 rounded-lg bg-[#E5E5E5] px-10 py-5 mb-2">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: ['buttonText'],
}
</script>