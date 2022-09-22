<template>
    <div class="modal fade" id="debitCreditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="debitCreditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="debitCreditModalLabel">Pay with credit card</h5>
                </div>
                <form action="">
                    <div class="modal-body">
                        <div class="row g-4">
                            <div class="col-xl-12">
                                <p class="font-size-16">Make sure you have enough balance in your account. You will have to fill a form for basic card details remember that we charge <strong>3.5% + Php 15</strong> for our processing fee</p>
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