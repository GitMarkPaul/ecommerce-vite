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
                        <div class="bread-link" aria-current="page">Shipping</div>
                    </li>
                </ol>
                <h4>Delivery address</h4>
            </div>

            <div class="row g-4 pt-2">
                <div class="col-xl-7 col-lg-7">
                    <div class="card">
                        <div class="body">
                            <form action="">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Contact Information</label>
                                        <input type="text" class="form-control" placeholder="Email or phone number" required>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Country</label>
                                        <select class="form-control form-select">
                                            <option value="Philippines">Philippines</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="country" class="form-label">First name</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="country" class="form-label">Last name</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Address</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Apartment, suite, et. (optional)</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="country" class="form-label">Postal code</label>
                                        <input type="number" class="form-control" required>
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="country" class="form-label">City</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Region</label>
                                        <select class="form-control form-select">
                                            <option value="Metro Manila">Metro Manila</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="country" class="form-label">Phone</label>
                                        <input type="tel" class="form-control" required>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="card mb-3">
                        <div class="body">
                            <div class="font-size-18 font-weight-600">Shipping address</div>
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
                    <div class="card background-accent-medium">
                        <div class="body">
                            <div class="font-size-18 font-weight-600">Your order</div>
                            <div class="row g-3 mb-4 mt-3">
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

                            <hr class="divider">

                            <table class="table table-borderless mt-3">
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

                            <div class="d-grid gap-2 mt-3">
                                <router-link :to="{ name: 'Payment' }" class="button-dark md round block">Continue to payment</router-link>
                                <router-link :to="{ name: 'Cart' }" class="button-outline-dark md round block">Return to cart</router-link>
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
