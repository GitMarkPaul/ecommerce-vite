<template>
    <section class="padding-bottom-3">
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
                        <router-link :to="{ name: 'Settings' }" class="bread-link">Settings</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Vouchers</div>
                    </li>
                </ol>
                <h4>My Collected Vouchers</h4>
            </div>

            <div class="row row-cols-xl-2 row-cols-md-2 row-cols-1 g-3 mt-1">
                <div class="col" v-for="n in 6">
                    <div class="card round">
                        <div class="body">
                            <div class="d-flex gap-3">
                                <div class="initial-circle-md rounded-4">
                                    <span class="material-symbols-rounded">loyalty</span>
                                </div>
                                <div class="me-auto">
                                    <div class="font-size-16 font-weight-500">30% Off with min. spend of 499</div>
                                    <div class="font-size-14">Valid till: Oct. 01 to Dec. 31, 2022</div>
                                    <button class="button-primary round mt-2">Use now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" v-for="n in 6">
                    <div class="card round">
                        <div class="body">
                            <div class="d-flex gap-3">
                                <div class="initial-circle-md rounded-4">
                                    <span class="material-symbols-rounded">loyalty</span>
                                </div>
                                <div class="me-auto">
                                    <div class="font-size-16 font-weight-500">30% Off with min. spend of 499</div>
                                    <div class="font-size-14">Valid till: Oct. 01 to Dec. 31, 2022</div>
                                    <button class="button-primary round mt-2" disabled>Expired</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
