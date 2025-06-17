<template>
    <div>
        <header>The Little Miss Mystic Mittens</header>
            <main>
                <div class="mystic-mittens-description">
                    <br>
                    <img src="\img\Other\little_miss_mystic_mittens.png" class="mittens-img">
                    <div class="mystic-mittens-text">
                    <p>Hi, this is The Little Miss Mystic Mittens. She has pulled THE STAR just for you! 
                    THE STAR brings rejuvenated hope and inspiration, and she hopes it brings you peace and joy. 
                    </p>
                    </div>
                </div>
            </main>
    </div>

</template>

<script>

</script>

<style>
.mystic-mittens-description {
    display: flex;
    flex-direction: row;
    max-width: 100ch;
    text-align: center;
    background-color: #fff0e4;
    padding: 30px;  
    border: black 1px solid;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
}

.mittens-img {
    max-width: 500px;
    padding-right: 10px;
}

.mystic-mittens-text {
    text-align: center;
    padding: 70px 0;
}

</style>