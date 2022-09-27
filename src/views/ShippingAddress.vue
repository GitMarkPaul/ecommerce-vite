<template>
    <section class="pt-2 padding-bottom-3">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between flex-flow-wrap gap-2">
                <div class="bread">
                    <ol class="bread-menu">
                        <li class="bread-item">
                            <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                        </li>
                        <li class="bread-item">
                            <router-link :to="{ name: 'Account' }" class="bread-link">Account</router-link>
                        </li>
                        <li class="bread-item">
                            <div class="bread-link" aria-current="page">Address</div>
                        </li>
                    </ol>
                    <h4>Shipping Address</h4>
                </div>
                <button class="button-primary round"><span class="material-icons-outlined">add</span> Add new address</button>
            </div>

            <div class="row row-cols-xl-2 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 mt-2">
                <div class="col">
                    <div class="card">
                        <div class="body">
                            <div class="dropdown position-absolute bottom-0 right-0 py-2 px-2">
                                <button class="button-link-dark circle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span class="material-icons-outlined">more_horiz</span></button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="material-icons-outlined">edit</span>
                                            Edit address
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="initial-circle-sm background-accent-dark">
                                <span class="material-icons-outlined">location_on</span> 
                            </div>
                            <div class="font-size-16 font-weight-600 mt-1">Juan Dela Cruz</div>
                            <p class="font-size-13">Blk 20 Lot 22-24 St. Kolbe Brgy. SAGUIN PAMPANGA-SAN-FERNANDO-CITY PAMPANGA</p>
                            <div class="badge background-color-primary round mx-1">Home</div>
                            <div class="badge background-accent-primary round">Default shipping</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="body">
                            <div class="dropdown position-absolute bottom-0 right-0 py-2 px-2">
                                <button class="button-link-dark circle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span class="material-icons-outlined">more_horiz</span></button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="material-icons-outlined">edit</span>
                                            Edit address
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="material-icons-outlined">done</span>
                                            Set as default shipping
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            <span class="material-icons-outlined">delete</span>
                                            Delete address
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="initial-circle-sm background-accent-dark">
                                <span class="material-icons-outlined">location_on</span> 
                            </div>
                            <div class="font-size-16 font-weight-600 mt-2">Juan Dela Cruz</div>
                            <p class="font-size-13">Blk 20 Lot 22-24 St. Kolbe Brgy. SAGUIN PAMPANGA-SAN-FERNANDO-CITY PAMPANGA</p>
                            <div class="badge background-color-warning round">Office</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>