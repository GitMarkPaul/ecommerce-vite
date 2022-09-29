<script setup>
    import { onMounted, ref } from 'vue';
    
    const products = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            products.value = await response.json();
        } catch (err) {
            // Handle error
        }
    })
</script>

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
                        <div class="bread-link" aria-current="page">Orders</div>
                    </li>
                </ol>
                <h4>My Purchases</h4>
            </div>

            <div class="row g-3 mt-1">
                <div class="col-xl-12 position-sticky-top">
                    <ul class="nav nav-pills overflow-scroll-wrap p-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-to-pay-tab" data-bs-toggle="pill" data-bs-target="#pills-to-pay" type="button" role="tab" aria-controls="pills-to-pay" aria-selected="true">To Pay</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-to-ship-tab" data-bs-toggle="pill" data-bs-target="#pills-to-ship" type="button" role="tab" aria-controls="pills-to-ship" aria-selected="false">To Ship</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-to-receive-tab" data-bs-toggle="pill" data-bs-target="#pills-to-receive" type="button" role="tab" aria-controls="pills-to-receive" aria-selected="false">To Receive</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-completed-tab" data-bs-toggle="pill" data-bs-target="#pills-completed" type="button" role="tab" aria-controls="pills-completed" aria-selected="false">Completed</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-cancelled-tab" data-bs-toggle="pill" data-bs-target="#pills-cancelled" type="button" role="tab" aria-controls="pills-cancelled" aria-selected="false">Cancelled</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-return-refund-tab" data-bs-toggle="pill" data-bs-target="#pills-return-refund" type="button" role="tab" aria-controls="pills-return-refund" aria-selected="false">Return Refund</button>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-12">
                    <div class="row g-3">
                        <div class="col-xl-6" v-for="product in products.slice(0,6)" :key="product.id">
                            <div class="card round">
                                <div class="body">
                                    <div class="row g-3">
                                        <div class="col-xl-12">
                                            <div class="d-flex align-items-center justify-content-between gap-2">
                                                <div class="font-size-16 font-weight-500 d-flex align-items-center gap-2"><span class="material-symbols-rounded">storefront</span> SM Mega Mall</div>
                                                <div class="font-size-14 text-color-danger">Completed</div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="checkout-items">
                                                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                                    <img class="checkout-img rounded-3 background-accent-medium" loading="lazy" :src="product.image" alt="">
                                                </router-link>
                                                <div class="checkout-details">
                                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                
                                                    <div class="font-size-13 mt-2">Black Accent / 23</div>
                
                                                    <div class="d-flex align-items-center justify-content-between mt-2">
                                                        <div class="font-size-14 font-weight-500 text-color-danger">&#8369;{{ product.price }}</div>
                                                        <div class="badge background-accent-primary round font-size-12">x1</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-end gap-2 mt-3">
                                                <div class="font-size-14 font-weight-500">Order Total: </div>
                                                <div class="font-size-16 font-weight-600 text-color-danger">&#8369;{{ product.price }}</div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between gap-2 mt-3">
                                                <div class="font-size-14 font-weight-600 text-color-success d-flex align-items-center gap-2"><span class="material-symbols-rounded text-color-success">local_shipping</span> Parcel has been delivered</div>
                                                <router-link :to="{ name: 'OrderDetails' }" class="button-accent-success round">View <span class="material-icons-outlined">navigate_next</span></router-link>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-end mt-3">
                                                <button type="button" class="button-outline-primary round md">Write review</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .checkout-img {
        width: 70px;
        height: 70px;
        object-fit: cover;

        @media (max-width: 564px) {
            width: 60px;
            height: 60px;
        }
    }

    .checkout-items {
        display: flex;
        gap: 2rem;

        .checkout-details {
            width: 100%;
        }
    }
</style>