<template>
    <section class="pt-2 padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Account' }" class="bread-link">Account</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Address</div>
                    </li>
                </ol>
                <h4>Shipping Address</h4>
            </div>
        </div>
    </section>
</template>