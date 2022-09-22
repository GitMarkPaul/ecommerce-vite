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
    <section class="pt-2 padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Cart' }" class="bread-link">Cart</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Shipping' }" class="bread-link">Shipping</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Payment</div>
                    </li>
                </ol>
                <h4>Summary Order</h4>
            </div>

            <div class="row g-4 pt-2">
                <div class="col-xl-7 col-lg-7">
                    <div class="card mb-3">
                        <div class="body">
                            <div class="font-size-18 font-weight-600">Billing address</div>
                            <div class="d-grid gap-2 mt-3">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">person</span>
                                    </div>
                                    <div class="font-size-14 font-weight-500">Juan Dela Cruz</div>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">location_on</span>
                                    </div>
                                    <div class="font-size-14 font-weight-500">Blk 20 Lot 22-24 St. Kolbe Brgy. Saguin San Fernando City, Pampanga</div>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">phone</span>
                                    </div>
                                    <div class="font-size-14 font-weight-500">09876543211</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="body">
                            <div class="row g-3">
                                <div class="col-xl-12" v-for="product in products.slice(0,3)" :key="product.id">
                                    <div class="checkout-items">
                                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                            <img class="checkout-img round background-accent-medium" loading="lazy" :src="product.image" alt="">
                                        </router-link>
                                        <div class="checkout-details">
                                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>

                                            <div class="font-size-13 mt-2">Black Accent / 23</div>

                                            <div class="d-flex align-items-center justify-content-between mt-2">
                                                <div class="font-size-14 font-weight-500">&#8369;{{ product.price }}</div>
                                                <div class="badge background-accent-primary round font-size-12">Qty: 3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="card mb-3">
                        <div class="body">
                            <div class="font-size-18 font-weight-600 mb-2">Payment Method</div>
                            <p>Complete your purchase item by selecting your payment type order.</p>
                            
                            <div class="d-grid gap-2">
                                <div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3 position-relative">
                                    <div class="initial-circle-md round">
                                        <span class="material-icons-outlined">local_shipping</span>
                                    </div>
                                    <div>
                                        <div class="font-size-16 font-weight-500">Cash on Delivery (default)</div>
                                        <div class="font-size-13">Default shipping method</div>
                                    </div>
                                    <div class="initial-circle-xs background-color-success position-absolute top-0 right-0 mt-2 mx-2">
                                        <span class="material-icons-outlined">check</span>
                                    </div>
                                </div>
                                <div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3" data-bs-toggle="modal" data-bs-target="#debitCreditModal">
                                    <div class="initial-circle-md round">
                                        <span class="material-icons-outlined">credit_card</span>
                                    </div>
                                    <div>
                                        <div class="font-size-16 font-weight-500">Debit/Credit Card</div>
                                        <div class="font-size-13">Pay with your most trusted debit/credit card.</div>
                                    </div>
                                </div>
                                <div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3">
                                    <div class="initial-circle-md round">
                                        <i class="bx bxl-paypal"></i>
                                    </div>
                                    <div>
                                        <div class="font-size-16 font-weight-500">Paypal</div>
                                        <div class="font-size-13">Pay with the world's most popular payment method.</div>
                                    </div>
                                </div>
                                <div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3" data-bs-toggle="modal" data-bs-target="#audaPayModal">
                                    <div class="initial-circle-md round">
                                        <span class="material-icons-outlined">token</span>
                                    </div>
                                    <div>
                                        <div class="font-size-16 font-weight-500">Auda Pay</div>
                                        <div class="font-size-13">Pay using your auda wallet tokens</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card background-accent-medium">
                        <div class="body">
                            <div class="font-size-18 font-weight-600">Your order</div>

                            <table class="table table-borderless mt-3 mb-3">
                                <thead>
                                    <tr>
                                        <th class="font-size-14 font-weight-500">Subtotal</th>
                                        <th class="font-size-14 font-weight-500 float-end">&#8369;3,499</th>
                                    </tr>
                                    <tr>
                                        <th class="font-size-14 font-weight-500">Shipping fee</th>
                                        <th class="font-size-14 font-weight-500 float-end">&#8369;55</th>
                                    </tr>
                                    <tr>
                                        <th class="font-size-14 font-weight-500">Voucher discount</th>
                                        <th class="font-size-14 font-weight-500 float-end">0.00</th>
                                    </tr>
                                    <tr>
                                        <th class="font-size-14 font-weight-500">Total</th>
                                        <th class="font-size-20 font-weight-500 float-end">&#8369;1,409</th>
                                    </tr>
                                </thead>
                            </table>

                            <div class="font-size-16">*Please check your order carefully before placing an order.</div>

                            <div class="d-grid gap-2 mt-3">
                                <router-link :to="{ name: 'OrderDetails' }" class="button-dark md round block">Place order <strong>&#8369;1,409</strong></router-link>
                                <router-link :to="{ name: 'Shipping' }" class="button-outline-dark md round block">Return to shipping</router-link>
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
