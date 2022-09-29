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
                        <div class="bread-link" aria-current="page">Edit Profile</div>
                    </li>
                </ol>
                <h4>Edit member profile</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-7">
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
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
                                            <label for="country" class="form-label"><span class="text-danger">*</span> Gender</label>
                                            <select class="form-control form-select" required>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="email" class="form-label"><span class="text-danger">*</span> Email</label>
                                            <input type="text" class="form-control" placeholder="Email address" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="email" class="form-label">Alternative Email</label>
                                            <input type="text" class="form-control" placeholder="Alternative Email address">
                                            <div class="form-text">(Your alternative email address can be used to receive inquiries so please make sure it is accurate and up-to-date.)</div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="street" class="form-label">Street Address</label>
                                            <input type="text" class="form-control" placeholder="Unit, House building street name" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="street" class="form-label">City</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="street" class="form-label">Province/State/County</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
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
                                            <label for="street" class="form-label">Zip/Postal code</label>
                                            <input type="number" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="phone" class="form-label">Tel</label>
                                            <input type="tel" class="form-control" placeholder="Enter your tel number">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="phone" class="form-label"><span class="text-danger">*</span> Mobile</label>
                                            <input type="tel" class="form-control" placeholder="Enter your mobile number" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="country" class="form-label">Department</label>
                                            <select class="form-control form-select" required>
                                                <option label="Please select" hidden></option>
                                                <option value="Director/CEO/General Manager">Director/CEO/General Manager</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Purchasing">Purchasing</option>
                                                <option value="Technical & Engineering">Technical & Engineering</option>
                                                <option value="Other">Other</option>
                                                <option value="Administrative">Administrative</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Owner/Entrepreneur">Owner/Entrepreneur</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="phone" class="form-label">Job Title</label>
                                            <input type="tel" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 position-sticky-bottom background-color-light py-3">
                                        <button type="submit" class="button-primary round md" id="submit-button" disabled>Save Changes</button>
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
