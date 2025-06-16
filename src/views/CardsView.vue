<template>
    <div>
        <header>Tarot Card Meanings</header>
            <main>
                <div class="tarot-container">
                    <TarotCard
                        v-for="card in allCards"
                        :key="card.id"
                        :card="card"
                        class="tarotCardCard"
                        @click="goToCard(card.id)"                    
                    />
                </div>

            </main>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import TarotCard from '../components/TarotCard.vue';
import { tarotCards } from '../data/cardsData.js';


export default {
    components: {
        TarotCard,
    },

    data() {
        return {
            allCards: tarotCards.allCards, 
        };
    },

    methods: {
        goToCard(id) {
            this.$router.push(`/card/${id}`);
        },
    },
};

</script>

<style scoped>
header {
    text-align: center;
    font-size: 25px;
}

.tarot-container {
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
    padding: 20px;
}


.tarotCardCard {
    flex-shrink: 0; 
    max-width: 100%; 
}

</style>