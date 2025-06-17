<template>
    <div class="animated-card-container">
        <div 
            class="card-back"
            v-if="showCardBack"
            @click="stopRotation">
            <img src="/img/card_back_no_bg.png" class="card-back-img">
        </div>
        <div class="revealed-card">
        <div
            class="card-face"
            v-show="!showCardDetails"
            :style="{ opacity: showCardBack ? 0 : 1 }">
            <img
                v-for="card in allCards"
                :key="card.id"
                :src="card.img"
                :alt="card.name"
                :class="{ 'active': currentCardIndex === card.id - 1 }"
                @click="selectCard(card)">
        </div>
        <div v-if="showCardDetails" class="card-details">
            <img :src="getCardImage(selectedCard.img)" :alt="selectedCard.name" class="selected-card-img" />
            <div class="revealed-card-name">
                <h2>{{ selectedCard.name }}</h2>
            </div>
            <div class="revealed-card-number">
                <p v-if="selectedCard.number !== undefined">{{ selectedCard.number }}</p>
            </div>
            <div class="revealed-card-keywords">
                <h3>Keywords:</h3>
                <p class="revealed-card-keywords-text">{{ selectedCard.keywords }}</p>
            </div>
            <div class="revealed-card-description">
                <h3>Description:</h3>
                <p class="revealed-card-description-text">{{ selectedCard.description }}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { tarotCards } from '../data/cardsData.js';

export default {
    data() {
        return {
            allCards: tarotCards.allCards,
            showCardBack: true,
            showCardDetails: false,
            currentCardIndex: 0,
            rotationInterval: null,
            rotationSpeed: 50,
            selectedCard: null,
        }
    },
    mounted() {
        this.startRotation();
    },
    beforeUnmount() {  
        this.stopRotation();
    },
    
    methods: {
        getCardImage(path) {
            return path;
        },
        startRotation() {
            this.rotationInterval = setInterval(() => {
                this.currentCardIndex = (this.currentCardIndex + 1) % this.allCards.length;
            }, this.rotationSpeed);
        },
        stopRotation() {
            clearInterval(this.rotationInterval);
            this.showCardBack = false;
            this.selectCard(this.allCards[this.currentCardIndex]);
        },
        selectCard(card) {
            this.selectedCard = card;
            this.showCardDetails = true;
        }
    }
};
</script>


<style>
.card-back {
    text-align: center;    
}

.card-details {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 30px 20px 50px auto;
    grid-template-areas: 
        "img name"
        "img number"
        "img keywords"
        "img description";
    row-gap: 5px; 
    column-gap: 20px;
    max-height: 700px;
    background-color: #fff0e4;
    padding: 20px;
    border: black 1px solid;
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
}

.selected-card-img {
    grid-area: img;
    max-width: 300px;
}

.revealed-card-name {
    grid-area: name;
    color: #3a4e85;
}

.revealed-card-number {
    grid-area: number;
}

.revealed-card-keywords {
    grid-area: keywords;
}

.revealed-card-description {
    grid-area: description;
}

.revealed-card-keywords-text, .revealed-card-description-text {
    text-indent: 25px;
}

</style>