<script setup>
    import { defineAsyncComponent } from 'vue';

    const ProductList = defineAsyncComponent(() => import('../components/ProductList.vue'));
</script>

<template>
    <section class="padding-bottom-3">
        <div class="container">
            <div class="row g-3 mt-1">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="header">
                            <div class="position-absolute right-0 left-0">
                                <div class="position-relative display-flex justify-content-between padding-left-2 padding-right-2">
                                    <img src="../assets/placeholders/default-placeholder.png" class="avatar" alt="">
                                    <button type="button" class="button-medium"><i class="bx bxs-camera-plus"></i> Add cover photo</button>
                                </div>
                            </div>
                        </div>
                        <div class="body">
                            <div class="row align-items-center justify-content-between g-3">
                                <div class="col-xl-9 col-lg-8 col-md-7">
                                    <div class="h2 font-weight-600 margin-top-3">SM Mega Mall</div>
                                    <div class="text-color-dark font-size-16">We've Got It All For You</div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-5 d-flex gap-2   ">
                                    <router-link :to="{ name: 'Chat' }" class="button-outline-primary block round"><span class="material-icons-outlined">chat</span> Chat Now</router-link>
                                    <button type="button" class="button-primary block round"><span class="material-icons-outlined">add</span> Follow</button>
                                </div>
                            </div>

                            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-2 g-4 mt-3">
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">inventory_2</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Products</div>
                                        <div class="font-size-13">135</div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">person_add</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Following</div>
                                        <div class="font-size-13">11.3k</div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">people_alt</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Followers</div>
                                        <div class="font-size-13">99.5k</div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Chat Performance</div>
                                        <div class="font-size-13">within a minutes</div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">star_rate</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Rating</div>
                                        <div class="font-size-13">4.9 (170.5k Rating)</div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="initial-circle-sm background-accent-success p-2">
                                        <span class="material-icons-outlined">how_to_reg</span>
                                    </div>
                                    <div>
                                        <div class="font-size-14 font-weight-600">Joined</div>
                                        <div class="font-size-13">3 years ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 position-sticky-top">
                    <ul class="nav nav-pills nav-fill overflow-scroll-wrap p-3" role="tablist">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Store' }" class="nav-link round active">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link round">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link round">All Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link round">Best Seller</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link round">New Arrivals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link round">Promotion</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-12">
                    <div class="d-flex align-items-center justify-content-between mt-2">
                        <div class="font-size-20 font-weight-600">Recommended for you</div>
                    </div>
                    <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-1">
                        <Suspense>
                            <template #default>
                                <ProductList></ProductList>
                            </template>
                            <template #fallback>
                                <div class="col" v-for="n in 20">
                                    <div class="card round hover-scale-1 placholder-glow">
                                        <img class="card-product-img placeholder col-12" src="../assets/placeholders/default-placeholder.png" alt="" />
                                        <div class="body d-grid placeholder-glow">
                                            <a href="#" class="font-size-14 font-weight-500 mt-2 placeholder col-10"></a>
                                            <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-4 placeholder col-4"></div>
                                            <a href="#" class="round block placeholder p-4 col-12"></a>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Suspense>
                    </div>
                </div>
            </div>

            <div class="position-sticky-bottom py-2 px-2 d-flex background-color-light gap-2 w-100 justify-content-center floating-window mt-4">
                <router-link :to="{ name: 'ContactSupplier' }" class="button-primary round"><span class="material-icons-outlined">mail</span> Contact Supplier</router-link>
                <router-link :to="{ name: 'Chat' }" class="button-warning round"><span class="material-icons-outlined">chat</span>Chat Now</router-link>
            </div>
        </div>
    </section>

</template>

<style scoped>
    .floating-window {
        z-index: 1;
    }
    .header {
        background-image: url('../assets/footer.svg');
    }
</style>
