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
                        <div class="bread-link" aria-current="page">Manufacturers</div>
                    </li>
                </ol>
                <h4>Source factory-direct and get customized product</h4>
            </div>

            <div class="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-4 row-cols-2 g-3 mt-2 mb-4">
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mens-apparel.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Men's Apparell</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-gadgets.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobile & Gadgets</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-accessories.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobiles Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-entertainment.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home Entertainment</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/babies-kids.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Babies & Kids</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-living.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home & Living</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/groceries.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Groceries</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-bag.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Bags</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-accessories.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-apparel.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Apparel</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/health-personal-care.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Health & Personal Care</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/makeup-fragrances.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Makeup & Fragrances</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row g-4 pt-2">
                <div class="col-xl-12 position-sticky-top">
                    <ul class="nav nav-pills overflow-scroll-wrap p-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active">All Categories</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link">Agriculture</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link">Food and Beverage</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link">Apparel</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link">Fabric and Textile Raw Material</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link">Electrical Equipment and Supplies</button>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-12" v-for="n in 6">
                    <div class="card">
                        <div class="body">
                            <div class="row g-2 align-items-center justify-content-between">
                                <div class="col-xl-6 col-md-6">
                                    <div class="d-flex gap-3">
                                        <router-link :to="{ name: 'Store' }">
                                            <img class="avatar-circle-md" src="../assets/store.png" alt="">
                                        </router-link>
                                        <div class="me-auto">
                                            <div class="fon-size-14 font-weight-600 text-color-success d-flex align-items-center gap-1"><span class="material-icons-outlined font-size-20">verified</span> Verified</div>
                                            <router-link :to="{ name: 'Store' }" class="font-size-16 font-weight-600">Shandong Rippa Machinery Group Co., Ltd.</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6">
                                    <div class="d-flex gap-2 float-end">
                                        <button class="button-outline-dark circle"><span class="material-icons-outlined">favorite_border</span></button>
                                        <button class="button-outline-dark round">Chat now</button>
                                        <router-link :to="{ name: 'ContactSupplier' }" class="button-outline-dark round">Contact us</router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 mt-2">
                                <div class="col-xl-6 col-md-6">
                                    <div class="me-auto mb-3">
                                        <div class="font-size-14 font-weight-600">Ratings and reviews</div>
                                        <div>4.2/5 (3 reviews)</div>
                                    </div>
                                    <div class="font-size-14 font-weight-600">Factory capabilities:</div>
                                    <ul class="mt-2 px-3">
                                        <li>Customization From Samples</li>
                                        <li>Full Customization</li>
                                        <li>Supplier Assessment Procedures</li>
                                        <li>Finished Product Inspection</li>
                                    </ul>
                                </div>
                                <div class="col-xl-6 col-md-6">
                                    <div class="row row-cols-xl-4 row-cols-md-2 row-cols-sm-4 row-cols-2 g-2">
                                        <div class="col" v-for="product in products.slice(0,4)" :key="product.id">
                                            <div class="background-accent-medium py-3 px-3 mt-3">
                                                <img class="thumbnail-sm" :src="product.image" alt="">
                                                <div class="text-center mt-2">
                                                    <div class="font-size-13 font-weight-600">&#8369;{{ product.price }}</div>
                                                    <div class="font-size-13 font-weight-500">1 piece</div>
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
        </div>
    </section>
</template>

