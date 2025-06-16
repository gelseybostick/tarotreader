<template>
    <div>
        <div class="tarot-card">                                 
            <img :src="card.img" :alt="card.name" class="card-image"/>
            <p class="card-number">{{ card.number }}</p>  
            <p class="card-name">{{ card.name }}</p>            
            <p class="keywords">{{ card.keywords }}</p>
            <p class="card-description">{{ card.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.tarot-card {
    display: grid;
    margin: auto;
    width: 100%;
    text-align: center;
    border: 1px solid black;
    row-gap: 10px;
    max-width: 1fr;
    background-color: #fff0e4;
    color: black;
    border-radius: 8px;
    padding: 50px;
    grid-template-areas:         
        "card-image"
        "card-number"
        "card-name"
        "card-keywords"
        "card-description";
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-number {
    grid-area: card-number;
}

.card-name {
    font-size: x-large;
	grid-area: card-name;
}

.card-image {
	grid-area: card-image;
    max-width: 200px;
    margin: 0 auto;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
}

.keywords {
	grid-area: card-keywords;
}

.card-description {
	grid-area: card-description;
}

</style>