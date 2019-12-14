<template>
    <router-link to="/about" class="brand">
        <picture class="brand__img">
            <source srcset="img/mejdi.png 1x, img/mejdi.png 2x" media="(min-width: 120em)">
            <img class="brand__img" srcset="img/mejdi.png 1x, img/mejdi.png 2x" alt="Mejdi Hafiane Brand Image">
        </picture>
    
        
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .brand
    {
        width: 30rem;
        height: 30rem;
        display: block;

        @media only screen and (min-width: 100em)
        {
            width: 30rem;
            height: 30rem;
        }
        
        &__img
        {
            width: 90%;
            height: 90%;
        }
    }

</style>