<template>
    <div class="padding-top-5 padding-bottom-5 text-center">
        <span class="material-icons-outlined font-size-56">sentiment_dissatisfied</span>
        <h1 class="mt-3">404 Page not Found</h1>
        <p class="font-size-16 mb-5">The page you are looking for doesn't exist or an other error occured.</p>
        <router-link :to="{ name: 'Home' }" class="button-accent-primary round md">Go Back Home</router-link>
    </div>
</template>