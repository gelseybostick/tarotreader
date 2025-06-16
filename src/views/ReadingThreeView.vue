<template>
    <div>
        <header>Three Card Reading</header>
            <main>
                <div class="three-reading-container">
                    <AnimatedTarotCard class="tarot-card"/> 
                    <AnimatedTarotCard class="tarot-card"/> 
                    <AnimatedTarotCard class="tarot-card"/>
                </div>

            </main>
    </div>
</template>

<script>
import AnimatedTarotCard from '@/components/AnimatedTarotCard.vue';
import TarotCard from '@/components/TarotCard.vue';
import { tarotCards } from '@/data/cardsData';

export default {
    components: {
        AnimatedTarotCard,
        TarotCard,
    }
}
</script>

<style scoped>
.three-reading-container {
    display: flex;
    gap: 20px; 
    justify-content: center;
    padding: 20px;
}

.tarot-card {
    width: 300px; 
}

.tarot-card :deep(.card-details) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;
    grid-template-areas: 
        "img"
        "name"
        "number"
        "keywords"
        "description";
    row-gap: 10px;
    padding: 15px;
    height: 1300px;
    background: #fff0e4; 
}

.tarot-card :deep(.selected-card-img) {
    grid-area: img;
    max-width: 100%; 
    margin: 0 auto; 
    border-radius: 8px;
}

.tarot-card :deep(.revealed-card-name) {
    grid-area: name;
    text-align: center;
    font-size: 1.5rem;
    color: #3a4e85;
}

.tarot-card :deep(.revealed-card-number) {
    grid-area: number;
    text-align: center;
    font-weight: bold;
}

.tarot-card :deep(.revealed-card-keywords) {
    grid-area: keywords;
}

.tarot-card :deep(.revealed-card-keywords-text) {
    padding: 8px;
    border-radius: 4px;
}

.tarot-card :deep(.revealed-card-description) {
    grid-area: description;
}

.tarot-card :deep(.revealed-card-description-text) {
    line-height: 1.6;
    font-size: 0.9rem;
}
</style>