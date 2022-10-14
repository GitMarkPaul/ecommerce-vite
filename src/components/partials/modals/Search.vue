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
									<input type="text" class="form-control round" placeholder="What are you looking for..." autocomplete="search" required autofocus>
								</div>
							</form>
						</div>
						<div class="col-xl-12">
							<div class="font-size-16 font-weight-500">Top product searches:</div>
							<div class="search-wrapper">
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Face Mask</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Aquaflask</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Bag</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Sandals for Women</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Dress</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Tumbler</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Shoes for Men</router-link>
								<router-link :to="{ name: 'SearchResults' }" class="search-link">Lunch Box</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>