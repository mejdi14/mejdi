<template>
    <footer class="footer">
        <div class="footer__item">
            &copy; 2019 Mejdi Hafiane.
        </div>
        <div class="footer__item">
            <div class="footer__contact">Email: <a href="mailto:mejdihafiane@gmail.com" class="footer__link">mejdihafiane@gmail.com</a></div>
            <div class="footer__contact">Tel: <a href="tel: +21623825559" class="footer__link">+21623825559</a></div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .footer
    {
        position: absolute;
        bottom: -7.5rem;
        left: 0;
        width: 100%;
        padding: 3rem;
        background: $color-footer;
        color: $color-text;
        font-size: 1.6rem;
        text-align: center;
        font-family: $font-secondary;
        border-top: 1px solid $color-primary;
        user-select: text;        

        &__item
        {
            display: inline-block;
            &:not(:last-child) {margin-right: 8rem;}

            @media only screen and (max-width: 50em)
            {
                display: block;
                &:not(:last-child) 
                {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                text-align: left;
            }
        }

        &__contact 
        {
            display: inline-block;
            &:not(:last-child) {margin-right: 3rem;}

            @media only screen and (max-width: 50em)
            {
                
                &:not(:last-child) 
                {
                    margin-right: 3rem;
                    margin-bottom: .5rem;
                }
            }
        }

        &__link 
        {
            &:link, &:visited 
            {
                color: $color-white;
                text-decoration: none;
            }
        }
    }

</style>