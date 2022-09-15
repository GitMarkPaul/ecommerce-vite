<template>
    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Delete Confirmation</h5>
                </div>
                <form action="">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xl-12">
                                <p class="font-size-16">Are you sure you want to delete this item? The process cannot be undone.</p>
                            </div>
                            <div class="col-xl-12">
                                <div class="display-flex justify-content-between gap-2">
                                    <button type="button" class="button-secondary round md block" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="button-accent-danger round md block">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>