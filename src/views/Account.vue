<template>
    <section class="padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Account</div>
                    </li>
                </ol>
                <h4>Manage Account</h4>
            </div>

            <div class="row g-4 pt-2">
                <div class="col-xl-3 col-lg-3 col-md-4">
                    <ul class="list-group gap-1 position-sticky-top top-1">
                        <router-link :to="{ name: 'Account' }" class="list-group-item list-group-item-action active round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">person</span> My Auda Account</router-link>
                        <router-link :to="{ name: 'Wishlist' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">favorite_border</span> My Favorites</router-link>
                        <router-link :to="{ name: 'Following' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">star_border</span> Following</router-link>
                        <router-link :to="{ name: 'Orders' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">fact_check</span> My Orders</router-link>
                        <router-link :to="{ name: 'History' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">history</span> Browsing History</router-link>
                        <router-link :to="{ name: 'Quotation' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">ads_click</span> Request for Quotation</router-link>
                        <a href="" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">mail</span> Inquiries</a>
                        <a href="" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">contacts</span> Start Selling on Auda</a>
                        <a href="" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">language</span> Buyer Central</a>
                        <router-link :to="{ name: 'ShippingAddress' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">location_on</span> Shipping Addresses</router-link>
                        <router-link :to="{ name: 'Settings' }" class="list-group-item list-group-item-action round py-2 px-3 align-items-center d-flex gap-2 border-0"><span class="material-icons-outlined">settings</span> Settings</router-link>
                    </ul>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-8">
                    <div class="row g-4">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="header">
                                    <div class="position-absolute right-0 left-0">
                                        <div class="position-relative display-flex justify-content-between padding-left-2 padding-right-2">
                                            <img src="../assets/users/avatar.jpg" class="avatar" alt="">
                                            <button type="button" class="button-medium"><i class="bx bxs-camera-plus"></i> Add cover photo</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="row align-items-center justify-content-between g-3">
                                        <div class="col-xl-10 col-lg-9 col-md-9 col-sm-8">
                                            <div class="h2 font-weight-600 margin-top-3">Juan Dela Cruz <span class="material-icons-outlined text-color-success">verified</span></div>
                                            <div class="text-color-dark font-size-16 d-flex align-items-center gap-2 mb-3">
                                                <span class="flag-icon flag-icon-ph"></span>
                                                Philippines
                                            </div>
                                            <div class="badge background-color-success round">Verified</div>
                                            <div class="font-size-13 mt-1">Account verified by Auda</div>
                                        </div>
                                        <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4">
                                            <router-link :to="{ name: 'EditProfile' }" class="button-accent-primary round float-end"><span class="material-icons-outlined">edit</span> Edit</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="font-size-18 font-weight-600 mb-2">Contact Information</div>

                            <ul class="list-group">
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Name</div>
                                    <div class="font-size-14 font-weight-500">Juan Dela Cruz</div>
                                </li>
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Email</div>
                                    <div class="font-size-14 font-weight-500">jua***@gmail.com</div>
                                </li>
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Mobile</div>
                                    <div class="font-size-14 font-weight-500">(+63) 934 4352 454</div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xl-6">
                            <div class="font-size-18 font-weight-600 mb-2">Company Information</div>
                            <ul class="list-group">
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Name</div>
                                    <div class="font-size-14 font-weight-500">Juan Dela Cruz</div>
                                </li>
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Email</div>
                                    <div class="font-size-14 font-weight-500">jua***@gmail.com</div>
                                </li>
                                <li class="list-group-item card-background d-flex justify-content-between align-items-start py-2 px-3">
                                    <div class="me-auto font-size-14">Mobile</div>
                                    <div class="font-size-14 font-weight-500">(+63) 934 4352 454</div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="me-auto">
                                            <div class="font-size-16 font-weight-600">My QR Code</div>
                                            Scan my qr code
                                        </div>
                                        <div class="initial-circle-md">
                                            <span class="material-icons-outlined font-size-40">qr_code</span>
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

<style>
    .header {
        background-image: url('../assets/footer.svg');
    }
</style>