<template>
    <header>
		<div class="container">
			<nav class="navbar-nav">
				<div class="d-flex align-items-center gap-2">
					<router-link to="/">
						<img class="brand-logo" src="../../assets/auda.svg" alt="" />
					</router-link>
					<div class="form-icon-group margin-left-1 search-form" data-bs-toggle="modal" data-bs-target="#searchForm">
						<span class="material-icons-outlined icon-search">search</span>
						<input type="text" class="form-control round" placeholder="Search ...">
					</div>
				</div>
				<ul class="nav-menu">
					<li class="nav-item">
						<router-link to="/" class="nav-link button-link-dark round">
							<span class="material-icons-outlined">local_shipping</span>
							<div class="nav-text">Drop Shipping</div>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/shopping-cart" class="nav-link button-link-dark round" data-badge="3">
							<span class="material-icons-outlined">shopping_bag</span>
							<div class="nav-text">Shopping Cart</div>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/wishlist" class="nav-link button-link-dark round" data-badge="1">
							<span class="material-icons-outlined">favorite_border</span>
							<div class="nav-text">Wishlist</div>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'Chat' }" class="nav-link button-link-dark round" data-badge="9+">
							<span class="material-icons-outlined">chat</span>
							<div class="nav-text">Messages</div>
						</router-link>
					</li>
					<li class="nav-item">
						<a class="button-accent-primary round" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInterests" aria-controls="offcanvasInterests">
							<span class="material-icons-outlined">interests</span>
							<div class="nav-text">Interest</div>
						</a>
					</li>
					<li class="nav-item dropdown">
						<a class="button-accent-dark round" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="material-icons-outlined">person</span>
							<div class="nav-text">Account</div>
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link :to="{ name: 'Account' }" class="nav-link dropdown-item">
									Manage Account
								</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'Orders' }" class="dropdown-item">
									My Orders
								</router-link>
							</li>
							<li>
								<a class="dropdown-item" href="settings.html">
									Settings
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									Contact Support
								</a>
							</li>
							<li>
								<router-link :to="{ name: 'History' }" class="dropdown-item">
									Recently Viewed
								</router-link>
							</li>
							<li><hr class="dropdown-divider"></li>
							<li>
								<router-link :to="{ name: 'Login' }" class="dropdown-item font-weight-600">
									Login
								</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'Register' }" class="dropdown-item font-weight-600">
									Signup
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
				<div class="d-flex gap-2">
					<button type="button" class="button-accent-dark circle search-btn" data-bs-toggle="modal" data-bs-target="#searchForm"><span class="material-icons-outlined">search</span></button>
					<button type="button" class="button-accent-dark circle nav-btn-toggler"><span class="material-icons-outlined nav-toggler-icon">menu</span></button>
				</div>
			</nav>
		</div>
	</header>
</template>