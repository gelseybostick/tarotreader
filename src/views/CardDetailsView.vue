<template>
    <div>
        <header>Tarot Card Details</header>
        <main>
            <div class="detailed-meanings">
                <TarotCardDetails
                    v-if="currentCard"
                    :card="currentCard"
                    class="tarotCardDetails"
                />
                <p v-else class="error">Card not found!</p>
            </div>
        </main>
    </div>
</template>

<script>
import TarotCardDetails from '../components/TarotCardDetails.vue';
import { tarotCards } from '../data/cardsData.js';

export default {
    components: {
        TarotCardDetails,
    },

    props: ['id'],

    computed: {
        currentCard() {
            return this.allCards.find(card => Number(card.id) === Number(this.id));
        }
    },

    data() {
        return {
            allCards: tarotCards.allCards,
        };
    },
};
</script>

<style>
header {
    text-align: center;
    font-size: 25px;
}

.detailed-meanings {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.error {
    color: red;
    text-align: center;
}
</style>