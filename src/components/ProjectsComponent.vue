<template>
    <div class="portfolio">
        <div class="row">
            <project-component :project="projects.adventurecord" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.w3il" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.portfolio" :class="{'slide-left': loading}">

            </project-component>
        </div>
    </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent'

export default {
    components: {ProjectComponent},
    data(){return{
        loading: true,
        projects: 
        {
            adventurecord: 
            {
                name: 'Waiter',
                summary: " This is one of my favorite projects, we were trying to help the owners of big restaurants and coffee shops with customers service. \n\n This app allow the waiter to take the customer order directly on a tablette or a phone and the app will send this order to the kitchen at the moment by sending a request to the printer which will print a ticket.",
                img: 'blackwaiter.png',
                demo: 'https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Kotlin'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'SqlServer'},
                    {name: 'Gitlab'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },

            w3il: 
            {
                name: 'Dux Mobile',
                summary: "This was the biggest project i have worked on yet. The goal was to help commercials in their daily work, this project gave me the chance to try many new features and technologies. \n\n I bounced many hats during this project and worked a lot on things like MVVM design pattern, rxJava, live data, view models, WebSocket for realtime notifications and more.",
                img: 'duxmobile.png',
                demo: 'https://play.google.com/store/apps/details?id=com.asmtunis.dux&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Kotlin'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'SqlServer'},
                    {name: 'Gitlab'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },

            portfolio: 
            {
                name: 'Android Flat Dialog',
                summary: 'The idea behind this project was to contribute to the android cummunity and give something back. i decided to create a simple but beautiful dialog and i called it flat dialog. \n\n The full process of making this library was a total joy and a great experience for me.',
                img: 'flatdialog.png',
                demo: 'https://github.com/mejdi14/Flat-Dialog-Android',
                code: 'https://github.com/mejdi14/Flat-Dialog-Android',
                technologies: 
                [
                    {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Gitlab'},
                    {name: 'Jitpack'},
                    {name: 'UI/UX'},
                ]
            }
        }
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
    .portfolio {margin-top: 4rem}

    .slide-left
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
    .slide-right
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }
</style>