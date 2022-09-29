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
                        <router-link :to="{ name: 'Orders' }" class="bread-link">Orders</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Order details</div>
                    </li>
                </ol>
                <h4>Track your parcel</h4>
            </div>

            <div class="row g-3 mt-2">
                <div class="col-xl-7">
                    <div class="row g-3">
                        <div class="col-xl-12">
                            <div class="background-color-success round py-3 px-3">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="material-symbols-rounded font-size-40">inventory</span>
                                    <div class="d-grid">
                                        <div class="font-size-16 font-weight-600">Your order has been delivered</div>
                                        <div class="font-size-14">Please check your product(s) and file for Return/Refund by 20-09-2022 if needed.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card round">
                                <div class="body">
                                    <div class="d-flex justify-content-between gap-2">
                                        <div class="d-flex gap-2">
                                            <span class="material-symbols-rounded">local_shipping</span>
                                            <div class="d-grid">
                                                <div class="font-size-16 font-weight-600">Shipping Information</div>
                                                <div class="font-size-14">Standard Local</div>
                                                <div class="font-size-14">JnT Express - SSF9836234097</div>

                                                <div class="d-flex align-items-center gap-2 mt-2">
                                                    <span class="material-symbols-rounded text-color-success">verified</span>
                                                    <div class="font-size-14 text-color-success font-weight-600">Parcel has been delivered</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="" class="button-link-primary round">View</a>
                                    </div>

                                    <div class="d-flex justify-content-between gap-2 mt-4">
                                        <div class="d-flex gap-2">
                                            <span class="material-symbols-rounded">location_on</span>
                                            <div class="d-grid">
                                                <div class="font-size-16 font-weight-600">Delivery Address</div>
                                                <div class="font-size-14">Juan Dela Cruz</div>
                                                <div class="font-size-14">(+63) 945 485 4560</div>
                                                <div class="font-size-14">Blk 20 Lot 22-24 St. Kolbe Brgy. Saguin San Fernando City, Pampanga</div>
                                            </div>
                                        </div>
                                        <a href="" class="button-link-primary round">Copy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card round">
                                <div class="body">
                                    <div class="row g-3">
                                        <div class="col-xl-12">
                                            <div class="d-flex align-items-center justify-content-between gap-2">
                                                <div class="font-size-16 font-weight-500">SM Mega Mall</div>
                                                <router-link :to="{ name: 'Store' }" class="button-accent-dark round">Visit Shop <span class="material-icons-outlined">navigate_next</span></router-link>
                                            </div>
                                        </div>
                                        <div class="col-xl-12" v-for="product in products.slice(0,3)" :key="product.id">
                                            <div class="checkout-items">
                                                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                                    <img class="checkout-img round background-accent-medium" loading="lazy" :src="product.image" alt="">
                                                </router-link>
                                                <div class="checkout-details">
                                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                
                                                    <div class="font-size-13 mt-2">Black Accent / 23</div>
                
                                                    <div class="d-flex align-items-center justify-content-between mt-2">
                                                        <div class="font-size-14 font-weight-500 text-color-danger">&#8369;{{ product.price }}</div>
                                                        <div class="badge background-accent-primary round font-size-12">x3</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th class="font-size-14 font-weight-500">Merchandise Subtotal</th>
                                                        <th class="font-size-14 font-weight-500 float-end">&#8369;3,499</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="font-size-14 font-weight-500">Shipping fee</th>
                                                        <th class="font-size-14 font-weight-500 float-end">&#8369;55</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="font-size-14 font-weight-500">Shop voucher applied</th>
                                                        <th class="font-size-14 font-weight-500 float-end">-&#8369;200</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="font-size-14 font-weight-500">Order Total</th>
                                                        <th class="font-size-20 font-weight-500 float-end">&#8369;1,409</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="row g-3">
                        <div class="col-xl-12">
                            <div class="card round">
                                <div class="body">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="initial-circle-md rounded-4">
                                            <span class="material-symbols-rounded">security</span>
                                        </div>
                                        <div>
                                            <div class="font-size-16 font-weight-500">Payment Method</div>
                                            <div class="font-size-13">Cash on Delivery</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="d-flex gap-2">
                                <a href="" class="button-outline-primary round block md">Return/Refund</a>
                                <a href="" class="button-primary round block md">Order Received</a>
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