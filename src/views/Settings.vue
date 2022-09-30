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
                        <div class="bread-link" aria-current="page">Settings</div>
                    </li>
                </ol>
                <h4>Settings</h4>
            </div>

            <div class="row row-cols-xl-4 row-cols-md-4 row-cols-sm-3 row-cols-2 g-3 mt-2">
				<div class="col">
					<a href="">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-tertiary">
									<span class="material-symbols-rounded hover-img-scale-1">reviews</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Product Reviews</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<a href="">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-danger">
									<span class="material-symbols-rounded hover-img-scale-1">cancel</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Cancellations</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<a href="">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-success">
									<span class="material-symbols-rounded hover-img-scale-1">assignment_return</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Refund & Returns</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<a href="">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-warning">
									<span class="material-symbols-rounded hover-img-scale-1">token</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Tokens</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<router-link :to="{ name: 'Language' }">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg">
									<span class="material-symbols-rounded hover-img-scale-1">translate</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Language</div>
							</div>
						</div>
					</router-link>
				</div>
				<div class="col">
					<router-link :to="{ name: 'Vouchers' }">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-danger">
									<span class="material-symbols-rounded hover-img-scale-1">loyalty</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Vouchers</div>
							</div>
						</div>
					</router-link>
				</div>
                <div class="col">
					<router-link :to="{ name: 'Password' }">
						<div class="card hover-scale-1 round text-center h-100">
							<div class="body">
								<div class="initial-circle-lg background-accent-warning">
									<span class="material-symbols-rounded hover-img-scale-1">lock</span>
								</div>
								<div class="font-size-16 font-weight-600 mt-2">Password</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
        </div>
    </section>
</template>
