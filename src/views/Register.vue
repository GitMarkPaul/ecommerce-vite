<template>
    <section class="padding-top-3 padding-bottom-3">
        <div class="container">
            <div class="row align-items-center justify-content-center g-5">
                <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="font-size-32 font-weight-600 text-center">Create an account</div>
                    <div class="row g-2 margin-top-2">
                        <div class="col-xl-12">
                            <form action="">
                                <div class="row g-4">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="text" class="form-control" placeholder="Email address" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form">
                                            <label for="firstname" class="form-label">First name</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form">
                                            <label for="lastname" class="form-label">Last name</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="phone" class="form-label">Phone</label>
                                            <input type="tel" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" placeholder="Create your password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="password" class="form-label">Confirm password</label>
                                            <input type="password" class="form-control" placeholder="Retype your password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="button-dark md round block">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-xl-12">
                            <router-link :to="{ name: 'Login' }" class="button-link-dark md block">Already have an account? Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>