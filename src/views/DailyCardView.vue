<template>
    <header>Daily Card</header>
    <div class="daily-card">
        <main>
            <div class="daily-card-container">
                <AnimatedTarotCard/>
            </div>
        </main>
    </div>
</template>

<script>
import AnimatedTarotCard from '@/components/AnimatedTarotCard.vue';
import TarotCard from '@/components/TarotCard.vue';

export default {
    components: {
        AnimatedTarotCard,
        TarotCard,
    }
}
</script>

<style>

</style>