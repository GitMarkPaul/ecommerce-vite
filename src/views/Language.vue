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
                        <router-link :to="{ name: 'Settings' }" class="bread-link">Settings</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Language</div>
                    </li>
                </ol>
                <h4>Language Preference</h4>
            </div>

            <form action="" class="validate-form">
                <div class="row g-3 mt-1">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="body">
                                <div class="row g-3">
                                    <div class="col-xl-10">
                                        <div class="form">
                                            <select class="form-control form-select" required>
                                                <option label="Choose your prefer language" hidden></option>
                                                <option value="English">English (Default)</option>
                                                <option value="Spanish">Spanish</option>
                                                <option value="Korean">Korean</option>
                                                <option value="Tagalog">Tagalog</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-2">
                                        <button type="submit" class="button-primary round md block" id="submit-button" disabled>Save Changes</button>
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
