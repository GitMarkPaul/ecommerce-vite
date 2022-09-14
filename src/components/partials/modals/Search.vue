<template>
    <!-- Modal -->
	<div class="modal fade" id="searchForm" tabindex="-1" aria-labelledby="searchFormLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="searchFormLabel">Search Products</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row g-3">
						<div class="col-xl-12">
							<form action="">
								<div class="font-size-18"></div>
								<div class="form-icon-group">
									<span class="material-icons-outlined icon-search">search</span>
									<input type="text" class="form-control round" placeholder="Search products in astra..." autocomplete="search" required autofocus>
								</div>
							</form>
						</div>
						<div class="col-xl-12">
							<div class="font-size-16 font-weight-500">Top product searches:</div>
							<div class="search-wrapper">
								<a href="#" class="search-link">Face Mask</a>
								<a href="#" class="search-link">Aquaflask</a>
								<a href="#" class="search-link">Bag</a>
								<a href="#" class="search-link">Sandals for Women</a>
								<a href="#" class="search-link">Dress</a>
								<a href="#" class="search-link">Tumbler</a>
								<a href="#" class="search-link">Shoes for Men</a>
								<a href="#" class="search-link">Lunch Box</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>