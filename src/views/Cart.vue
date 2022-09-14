<template>
    <section class="padding-top-1 padding-bottom-5">
        <div class="container-fluid">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link to="/" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link to="/products" class="bread-link">Products</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Shopping Cart</div>
                    </li>
                </ol>
            </div>

            <div class="row g-5 pt-3">
                <div class="col-xl-7">
                    <div class="card round">
                        <div class="body">
                            <div class="row row-cols-1 g-3">
                                <div class="col">
                                    <div class="d-flex align-items-center justify-content-between border round p-1 px-3">
                                        <div class="form-check mx-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label mx-2" for="flexCheckDefault">
                                                Select all
                                            </label>
                                        </div>

                                        <button class="button-link-dark round" type="button">
                                            <span class="material-icons-outlined">delete_sweep</span>
                                            Delete Selected
                                        </button>
                                    </div>
                                </div>
                                <div class="col">
                                    <a href="" class="font-size-18 font-weight-600">SM Mega Mall</a>
                                </div>
                                <div class="col" v-for="n in 3">
                                    <div class="card">
                                        <div class="body">
                                            <div class="cart-items">
                                                <img class="cart-img round background-accent-medium" src="../assets/placeholders/default-placeholder.png" alt="">
                                                <div class="cart-details">
                                                    <a href="" class="font-size-16 font-weight-500 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>

                                                    <div class="badge background-accent-tertiary round sm">Black Accent x23</div>

                                                    <div class="font-size-16 font-weight-600 text-color-danger mt-2">&#8369;599</div>

                                                    <div class="d-flex align-items-center justify-content-between py-2">
                                                        <div class="form-group">
                                                            <input type="number" min="1" class="form-control quantity" placeholder="0" required>
                                                        </div>
                                                        <div class="d-flex gap-2">
                                                            <button type="button" class="button-accent-dark circle"><span class="material-icons-outlined">favorite_border</span></button>
                                                            <button type="button" class="button-accent-danger circle"><span class="material-icons-outlined">delete</span></button>
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
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .cart-img {
        width: 120px;
        height: 120px;
        object-fit: cover;
    }

    .cart-items {
        display: flex;
        gap: 1rem;

        .cart-details {
            width: 100%;
            display: grid;
        }
    }
    
    .quantity {
        width: 50%;
    }
</style>