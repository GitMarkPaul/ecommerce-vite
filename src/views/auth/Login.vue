<template>
    <section class="padding-top-5 padding-bottom-5">
        <div class="container">
            <div class="row align-items-center justify-content-center g-5">
                <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="display-flex justify-content-center">
                        <img src="../../assets/logo.png" class="avatar-circle-xl" alt="">
                    </div>
                    <div class="font-size-40 font-weight-600 text-align-center">Login to your Astra account</div>
                    <div class="row g-2 margin-top-2">
                        <div class="col-xl-12">
                            <form action="">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="username" class="form-label">Username</label>
                                            <input type="text" class="form-control form-input-lg" placeholder="Email or Username" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <div class="display-flex align-items-center justify-content-between">
                                                <label for="password" class="form-label">Password</label>
                                                <a href="" class="font-size-14">Forgot your password?</a>
                                            </div>
                                            <input type="password" class="form-control form-input-lg" placeholder="Password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="button-primary md block">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-xl-12">
                            <a href="" class="button-link-dark md block">Don't have an account yet? Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>