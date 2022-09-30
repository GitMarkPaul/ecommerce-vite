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
                        <div class="bread-link" aria-current="page">Review</div>
                    </li>
                </ol>
                <h4>Write your Review</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-6">
                        <div class="card round">
                            <div class="body">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="initial-circle-md rounded-4">
                                        <img src="../assets/placeholders/product-placeholder.png" alt="" width="100%" height="100%">
                                    </div>
                                    <div>
                                        <div class="font-size-16 font-weight-500">Delivered on <span class="text-color-danger">Thu, 15 Sept 2022</span></div>
                                        <div class="font-size-14">Shipped with Standard Local - Auda Xpress</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Your star rating of this product</label>
                                            <select class="form-control" required>
                                                <option value="1">1 Star</option>
                                                <option value="2">2 Star</option>
                                                <option value="3">3 Star</option>
                                                <option value="4">4 Star</option>
                                                <option value="5">5 Star</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Write your review about the product</label>
                                            <textarea class="form-control" cols="30" rows="3" placeholder="Enter atleast 20 characters" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> How is your overall experience with the seller?</label>
                                            <textarea class="form-control" cols="30" rows="3" placeholder="Enter atleast 20 characters" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label">Attach photo(s)</label>
                                            <input type="file" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 position-sticky-bottom background-color-light py-3">
                                        <button type="submit" class="button-primary round md" id="submit-button" disabled>Submit review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
