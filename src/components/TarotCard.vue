<template>
    <div>
        <main>
            <div @click="$emit('click')" class="tarot-card">                            
                <p class="card-name">{{ card.name }}</p>                
                <img :src="card.img" :alt="card.name" class="card-image"/>
                <p class="card-number">{{ card.number }}</p>   
                <p class="keywords">{{ card.keywords }}</p>
        
        </div>
        </main>
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
main {
    width: 100%;
}
.tarot-card {
    border: 3px solid black;
    color: black;
    width: 236px;
    height: 408px;
    background-color: #fff0e4;
    border-radius: 8px;
    padding: 16px;
    display: grid;
    grid-template-areas: 
        "card-name"
        "card-image"
        "card-number"
        "card-keywords"
        "card-description";
    place-items: center;
    text-align: center;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
}

.tarot-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 2);
    cursor: pointer;
}

.card-number {
    grid-area: card-number;
}

.card-name {
    font-family:Garamond;
    font-weight:900;
    font-size:x-large;
	grid-area: card-name;
}

.card-image {
	grid-area: card-image;
    max-width: 150px;
    
}

.keywords {
	grid-area: card-keywords;
}

.card-description {
	grid-area: card-description;
}

</style>