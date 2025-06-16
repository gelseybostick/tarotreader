<template>
    <div>
        <header>Single Card Reading</header>
            <main>
                <div class="single-reading-container">
                    <AnimatedTarotCard/>
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

<style>

</style>