<script setup>
    import { onMounted, ref } from 'vue';
    
    const currencyCodes = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://restcountries.com/v2/all?fields=currencies');
            currencyCodes.value = await response.json();
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
                        <div class="bread-link" aria-current="page">Request for Quotation</div>
                    </li>
                </ol>
                <h4>Tell suppliers what you need</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-6">
                        <div class="font-size-18 font-weight-600 mb-2">Basic product information</div>
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Product name</label>
                                            <input type="text" id="product" class="form-control" placeholder="Please enter the subject" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Sourcing type</label>
                                            <select class="form-control" required>
                                                <option value="Customized Product">Customized Product</option>
                                                <option value="Non-customized Product">Non-customized Product</option>
                                                <option value="Total Solution">Total Solution</option>
                                                <option value="Business Service">Business Service</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Sourcing purpose</label>
                                            <select class="form-control" required>
                                                <option value="Wholesale">Wholesale</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Product Equipment">Product Equipment</option>
                                                <option value="Raw Materials for Production">Raw Materials for Production</option>
                                                <option value="Corporate Consumption">Corporate Consumption</option>
                                                <option value="Personal Use">Personal Use</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Quantity</label>
                                            <div class="d-flex gap-3">
                                                <input type="number" class="form-control" placeholder="0" required>
                                                <select class="form-control" required>
                                                    <option value="acres">acres</option>
                                                    <option value="amperes">amperes</option>
                                                    <option value="bags">bags</option>
                                                    <option value="barrels">barrels</option>
                                                    <option value="blades">blades</option>
                                                    <option value="boxes">boxes</option>
                                                    <option value="bushels">bushels</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Max budget</label>
                                            <div class="d-flex gap-3">
                                                <select class="form-control" required>
                                                    <option value="< 1000">less than 1000</option>
                                                    <option value="1000 - 5000">1000 - 5000</option>
                                                    <option value="5000 - 10000">5000 - 10000</option>
                                                    <option value="10000 - 50000">10000 - 50000</option>
                                                    <option value="> 50000">greater than 50000</option>
                                                </select>
                                                <select class="form-control" required>
                                                    <template v-for="currency in currencyCodes">
                                                        <template v-for="code in currency.currencies">
                                                            <option :value="code.code">{{ code.code }}</option>
                                                        </template>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label"><span class="text-color-danger">*</span> Details</label>
                                            <textarea class="form-controlo" cols="30" rows="3" placeholder="Enter atleast 20 characters" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form">
                                            <label for="product" class="form-label">Sourcing document</label>
                                            <input type="file" class="form-control">
                                            <div class="form-text">Product images or files lead to more accurate quotes.</div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 position-sticky-bottom background-color-light py-3">
                                        <button type="submit" class="button-primary round md" id="submit-button" disabled>Submit</button>
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
