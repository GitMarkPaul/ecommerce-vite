<template>
    <header>
		<div class="container-fluid">
			<nav>
				<div class="d-flex align-items-center gap-2">
					<router-link to="/" class="button-link-dark circle md">
						<img class="brand-logo" src="../../assets/logo.png" alt="" />
					</router-link>
					<div class="font-size-24 font-weight-600">Astra</div>
					<div class="form-icon-group margin-left-1 search-form" data-bs-toggle="modal" data-bs-target="#searchForm">
						<span class="material-icons-outlined icon-search">search</span>
						<input type="text" class="form-control round" placeholder="Search ...">
					</div>
				</div>
				<ul class="nav-menu">
					<li class="nav-item">
						<router-link to="/shopping-cart" class="nav-link button-accent-dark circle" data-badge="3">
							<span class="material-icons-outlined">shopping_bag</span>
							<div class="nav-text">Shopping Cart</div>
						</router-link>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link button-accent-dark circle" data-badge="1">
							<span class="material-icons-outlined">favorite_border</span>
							<div class="nav-text">Wishlist</div>
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link button-accent-dark circle" data-badge="9+">
							<span class="material-icons-outlined">notifications</span>
							<div class="nav-text">Notifications</div>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link button-accent-dark circle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInterests" aria-controls="offcanvasInterests">
							<span class="material-icons-outlined">interests</span>
							<div class="nav-text">Interest</div>
						</a>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link button-primary round">
							Signup
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/login" class="nav-link button-accent-dark round">
							Login
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="button-link-dark circle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<img src="../../assets/placeholders/student.png" class="avatar-circle-sm" alt="" />
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="profile.html"><span class="material-icons-outlined">account_circle</span> Manage Account</a></li>
							<li><a class="dropdown-item" href="#"><span class="material-icons-outlined">description</span>Orders</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#"><span class="material-icons-outlined">lightbulb</span>What's New</a></li>
							<li><a class="dropdown-item" href="settings.html"><span class="material-icons-outlined">settings</span>Settings</a></li>
							<li><a class="dropdown-item" href="#"><span class="material-icons-outlined">contact_support</span>Contact Support</a></li>
							<li><a class="dropdown-item" href="login.html"><span class="material-icons-outlined">logout</span>Logout</a></li>
						</ul>
					</li>
				</ul>
				<button type="button" class="button-link-dark md circle search-btn" data-bs-toggle="modal" data-bs-target="#searchForm"><span class="material-icons-outlined">search</span></button>
				<button type="button" class="button-link-dark md circle nav-btn-toggler"><span class="material-icons-outlined nav-toggler-icon">menu</span></button>
			</nav>
		</div>
	</header>
</template>