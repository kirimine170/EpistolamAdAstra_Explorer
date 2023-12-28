<template>
    <h1 class="text-center text-[#E5E5E5] text-2xl mt-10 mb-6">メッセージを作成</h1>
    <v-container>
        <v-row>
            <v-col style="display: flex; align-items: stretch;">
                <!-- TODO このカード、本当はコンポーネントにまとめた方がいいかも。 -->
                <v-card @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="mode p-5" id="fireworks">
                    <v-img src="/src/assets/img/fireworks.png">
                        <v-card-title class="text-[#E5E5E5] text-2xl">花火</v-card-title>
                    </v-img>
                    <p class="mt-5">

                        メッセージを送ったら最後、花火のように消えてしまうメッセージです。
                        <br>
                        (誰にも届くことはありません)
                    </p>
                </v-card>
            </v-col>
            <v-col style="display: flex; align-items: stretch;">
                <v-card @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="mode p-5" id="letter">
                    <v-img src="/src/assets/img/letter.png">
                        <v-card-title class="text-[#E5E5E5] text-2xl">手紙</v-card-title>
                    </v-img>
                    <p class="mt-5">
                        どこかの誰かに届くかもしれないメッセージです。
                        <br>
                        (誰かが読んだら消えてしまいます)
                    </p>
                </v-card>

            </v-col>
            <v-col style="display: flex; align-items: stretch;">
                <v-card @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="mode p-5" id="noticeboard">
                    <v-img src="/src/assets/img/noticeboard.png">
                        <v-card-title class="text-[#E5E5E5] text-2xl">掲示板</v-card-title>
                    </v-img>
                    <p class="mt-5">
                        メッセージを送ったら、掲示板に貼り出されます。
                        <br>
                        (何回も読めるメッセージですが、古いものから削除されます)
                    </p>
                </v-card>

            </v-col>
        </v-row>
    </v-container>

    <!-- <%= form_with model: @message, local: true, html: {class: "bg-[#0f3460] p-4 rounded" } do |form| %>
            <div class="field mb-4">
                <%= form.label :dear, "あて先（任意）" , class: "text-[#E5E5E5] block mb-2" %>
                <%= form.text_field :dear,
                class: "form-control w-full p-2 rounded bg-[#0f3460] text-[#E5E5E5] border border-[#E5E5E5]" %>
            </div>
            
            <div class="field mb-6">
                <%= form.label :content, "メッセージ" , class: "text-[#E5E5E5] block mb-2" %>
                <%= form.text_area :content,
                class: "form-control w-full p-2 rounded bg-[#0f3460] text-[#E5E5E5] border border-[#E5E5E5]" ,
                required: true %>
            </div>
            
            <div class="actions text-center">
                <%= form.submit "宇宙に送る" , class: "bg-[#28527a] text-[#E5E5E5] p-2 rounded w-full" %>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <% end %> -->
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onMouseEnter(event) {
            event.target.style.transform = 'translateY(-3%) rotate(1deg)';
            event.target.style.Transition = 'transform 0.5s ease-in-out';
            console.log(event.target.id);
        },
        onMouseLeave(event) {
            event.target.style.transform = '';
        },
    },
}
</script>
<style>
.mode {
    transition: transform 0.25s ease-in-out;
}
</style>