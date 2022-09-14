<script setup>
    import { defineAsyncComponent } from 'vue';

    const ProductList = defineAsyncComponent(() => import('../components/ProductList.vue'));
</script>

<template>
    <section class="padding-top-4 padding-bottom-5">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-26 font-weight-600">Discover more products</div>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2">
                <Suspense timeout="0">
                    <template #default>
                        <ProductList></ProductList>
                    </template>
                    <template #fallback>
                        <div class="col" v-for="n in 20">
                            <div class="card round hover-scale-1 placholder-glow">
                                <img class="card-product-img placeholder col-12" src="../assets/placeholders/default-placeholder.png" alt="" />
                                <div class="body d-grid placeholder-glow">
                                    <a href="#" class="font-size-16 font-weight-500 mt-2 placeholder col-10"></a>
                                    <div class="font-size-18 font-weight-600 text-color-danger mt-2 mb-4 placeholder col-4"></div>
                                    <a href="#" class="round block placeholder p-4 col-12"></a>
                                </div>
                            </div>
                        </div>
                    </template>
                </Suspense>
            </div>
        </div>
    </section>
</template>