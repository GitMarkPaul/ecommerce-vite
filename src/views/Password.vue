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
                        <div class="bread-link" aria-current="page">Password</div>
                    </li>
                </ol>
                <h4>Update your password</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="current-password" class="form-label">Current password</label>
                                            <input type="password" class="form-control" placeholder="Enter your current password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="new-password" class="form-label">New password</label>
                                            <input type="password" class="form-control" placeholder="Enter your new password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="confirm-new-password" class="form-label">Confirm new password</label>
                                            <input type="password" class="form-control" placeholder="Confirm your new password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="button-primary round md" id="submit-button" disabled>Update password</button>
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
