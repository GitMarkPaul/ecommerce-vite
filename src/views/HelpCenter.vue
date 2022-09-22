<script setup>
    import { onMounted, ref } from 'vue';
    
    const articles = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            articles.value = await response.json();
        } catch (err) {
            // Handle error
        }
    })
</script>

<template>
    <section class="background-accent-primary py-5 text-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7">
                    <div class="font-size-32 font-weight-600">Hi, how can we help?</div>
                    <div class="form-icon-group mt-4">
                        <span class="material-icons-outlined icon-search">search</span>
                        <input type="text" class="form-control form-hc-control round" placeholder="Search ...">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-3">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Categories</div>
            </div>
            <div class="row row-cols-xl-4 row-cols-lg-5 row-cols-md-4 row-cols-sm-4 row-cols-2 g-3 mt-2">
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-danger">
                                    <span class="material-icons-outlined text-color-danger">storefront</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Shop with Auda</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-danger">
                                    <span class="material-icons-outlined text-color-danger">payments</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Payments</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-danger">
                                    <span class="material-icons-outlined text-color-danger">sync_alt</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Returns & Refunds</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-success">
                                    <span class="material-icons-outlined text-color-success">local_shipping</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Orders & Shipping</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-warning">
                                    <span class="material-icons-outlined">groups</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Sellers & Partners</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-danger">
                                    <span class="material-icons-outlined text-color-danger">local_offer</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">Deals & Rewards</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg background-accent-primary">
                                    <span class="material-icons-outlined text-color-primary">article</span>
                                </div>
                                <div class="font-size-16 font-weight-500 mt-2">General</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-3 padding-bottom-5">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Hot Questions</div>
            </div>
            
            <ul class="list-group list-group-flush mt-3">
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between px-3 py-3" v-for="article in articles.slice(0,20)">
                    <div class="font-size-18">{{ article.title }}</div>
                </a>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
    .form-hc-control {
        background: var(--color-light) !important;
        padding: 14px 40px !important;
    }
</style>