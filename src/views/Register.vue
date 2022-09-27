<script setup>
    import { onMounted, ref } from 'vue';
    
    const countries = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flag');
            countries.value = await response.json();
        } catch (err) {
            // Handle error
        }
    })
</script>

<template>
    <section class="padding-top-3 padding-bottom-3">
        <div class="container">
            <div class="row align-items-center justify-content-center g-5">
                <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="font-size-32 font-weight-600 text-center">Create an account</div>
                    <div class="row g-2">
                        <div class="col-xl-12">
                            <router-link :to="{ name: 'Login' }" class="button-link-dark md block round my-3">Already have an account? Login</router-link>
                        </div>
                        <div class="col-xl-12">
                            <form action="">
                                <div class="row g-4">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="country" class="form-label"><span class="text-danger">*</span> Country/Region</label>
                                            <select class="form-control form-select" required>
                                                <template v-for="(country, index) in countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)" :key="index">
                                                    <option :value="country.name.common">{{ country.flag }}&nbsp; {{ country.name.common }}
                                                    </option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="country" class="form-label"><span class="text-danger">*</span> Please select trade role</label>
                                            <select class="form-control form-select" required>
                                                <option value="Buyer">Buyer</option>
                                                <option value="Seller">Seller</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="email" class="form-label"><span class="text-danger">*</span> Email</label>
                                            <input type="text" class="form-control" placeholder="Email address" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form">
                                            <label for="firstname" class="form-label"><span class="text-danger">*</span> First name</label>
                                            <input type="text" class="form-control" placeholder="Enter your first name" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form">
                                            <label for="lastname" class="form-label"><span class="text-danger">*</span> Last name</label>
                                            <input type="text" class="form-control" placeholder="Enter your last name" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="phone" class="form-label"><span class="text-danger">*</span> Phone</label>
                                            <input type="tel" class="form-control" placeholder="Enter your contact number" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="password" class="form-label"><span class="text-danger">*</span> Password</label>
                                            <input type="password" class="form-control" placeholder="Create your password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="password" class="form-label"><span class="text-danger">*</span> Confirm password</label>
                                            <input type="password" class="form-control" placeholder="Retype your password" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label mx-2" for="flexCheckDefault">
                                                While creating a website account: I agree to abide by the Auda Membership Agreement- Willing to receive emails from Auda members and services
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="button-dark md round block">Agree and Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
