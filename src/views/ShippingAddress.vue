<template>
    <section class="padding-bottom-3">
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
                <button class="button-primary round" data-bs-toggle="modal" data-bs-target="#addNewAddressModal"><span class="material-icons-outlined">add</span> Add new address</button>
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

    <!-- Add New Address Modal -->
    <div class="modal fade" id="addNewAddressModal" tabindex="-1" aria-labelledby="addNewAddressModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header position-sticky-top top-0 background-color-light">
                    <h5 class="modal-title" id="addNewAddressModalLabel">Add new address</h5>
                </div>
                <form action="">
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-xl-6">
                                <div class="form">
                                    <label for="firstname" class="form-label">First name</label>
                                    <input type="text" class="form-control" placeholder="Enter your first name" required autofocus>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="form">
                                    <label for="lastname" class="form-label">Last name</label>
                                    <input type="text" class="form-control" placeholder="Enter your last name" required>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="street" class="form-label">Street address</label>
                                    <input type="text" class="form-control" placeholder="Enter your house no, building and street name" required>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="tel" class="form-control" placeholder="Enter your contact number" required>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="lastname" class="form-label">Other Notes</label>
                                    <textarea class="form-control" cols="30" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="lastname" class="form-label">Province</label>
                                    <select class="form-control" required>
                                        <option label="Please choose your province" selected disabled></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="lastname" class="form-label">City/Municipality</label>
                                    <select class="form-control" required>
                                        <option label="Please choose your city or municipality" selected disabled></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="lastname" class="form-label">Barangay</label>
                                    <select class="form-control" required>
                                        <option label="Please choose your barangay" selected disabled></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="form">
                                    <label for="lastname" class="form-label">Select a label for effective delivery</label>
                                    <select class="form-control" required>
                                        <option label="Please choose" hidden></option>
                                        <option value="Office">Office</option>
                                        <option value="Home">Home</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-12 position-sticky-bottom background-color-light py-3">
                                <div class="display-flex justify-content-between gap-2">
                                    <button type="button" class="button-secondary round md block" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="button-primary round md block">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>