<template>
    <section class="padding-top-3 padding-bottom-3">
        <div class="container">
            <div class="row align-items-center justify-content-center g-5">
                <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-24 font-weight-600">Login to your Auda account</div>
                            <div class="row g-2 mt-3">
                                <div class="col-xl-12">
                                    <form action="">
                                        <div class="row g-4">
                                            <div class="col-xl-12">
                                                <div class="form">
                                                    <label for="username" class="form-label">Username</label>
                                                    <input type="text" class="form-control" placeholder="Email or Username" required>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="form">
                                                    <div class="display-flex align-items-center justify-content-between">
                                                        <label for="password" class="form-label">Password</label>
                                                        <a href="" class="font-size-14">Forgot your password?</a>
                                                    </div>
                                                    <input type="password" class="form-control" placeholder="Password" required>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <button type="submit" class="button-dark md round block">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-xl-12">
                                    <router-link :to="{ name: 'Register' }" class="button-link-dark md block round">Don't have an account yet? Register</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="font-size-14 font-weight-500 text-center py-3">Or, login with</div>
                    <div class="d-flex gap-2 mt-3">
                        <div class="d-flex align-items-center gap-3 border round py-2 px-2 block hover-scale-1 font-weight-500 background-color-light">
                            <div class="initial-circle-sm"><span class="bx bxl-facebook-circle"></span></div>
                            facebook
                        </div>
                        <div class="d-flex align-items-center gap-3 border round py-2 px-2 block hover-scale-1 font-weight-500 background-color-light">
                            <div class="initial-circle-sm"><span class="bx bxl-google"></span></div>
                            Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>