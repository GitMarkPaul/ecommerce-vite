<template>
    <div class="modal fade" id="audaPayModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="audaPayModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="audaPayModalLabel">Pay with auda pay</h5>
                </div>
                <form action="">
                    <div class="modal-body">
                        <div class="row g-4">
                            <div class="col-xl-12">
                                <p class="font-size-16">Make sure you have enough balance to pay your order.</p>
                                <div class="rounded-4 background-accent-danger py-3 px-3 d-flex align-items-center gap-3">
                                    <span class="material-icons-outlined text-color-danger">error</span>
                                    <div class="font-size-14 text-color-danger font-weight-500">Sorry, You have insufficient balance in your account.</div>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="display-flex justify-content-between gap-2">
                                    <button type="button" class="button-secondary round md block" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="button-primary round md block">Pay now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>