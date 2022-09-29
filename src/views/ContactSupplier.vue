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
                        <div class="bread-link" aria-current="page">Contact Supplier</div>
                    </li>
                </ol>
                <h4>Tell suppliers what you need</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <div class="d-flex gap-3">
                                            <img class="avatar-circle-md" src="../assets/store.png" alt="">
                                            <div class="me-auto">
                                                <div class="font-size-16 font-weight-600">Ada Si</div>
                                                <div class="font-size-14 font-weight-500">Shandong Rippa Machinery Group Co., Ltd.</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Detailed Requirements</label>
                                            <textarea class="form-controlo" cols="30" rows="3" placeholder="Please type in" required></textarea>
                                            <div class="form-text"> Enter product details such as color, size, materials etc. and other specification requirements to receive an accurate quote.</div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label">Add attachment</label>
                                            <input type="file" class="form-control">
                                            <div class="form-text">Product images or files lead to more accurate quotes.</div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="background-accent-medium py-3 px-3">Please make sure your contact information is correct (View and Edit). Your message will be sent directly to the recipient(s) and will not be publicly displayed. Note that if the recipient is a Gold Supplier, they can view your contact information, including your registered email address. Auda will never distribute or sell your personal information to third parties without your express permission. </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="button-primary round md" id="submit-button" disabled>Send inquiry now</button>
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
