<template>
    <footer class="background-overlay">
		<div class="container">
			<div class="row row-cols-xl-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-5 position-relative">
				<div class="col">
					<div class="font-size-16 font-weight-600">Customer Service</div>
					<ul class="footer-menu">
						<li><router-link to="/help-center" class="footer-link">Help Center</router-link></li>
						<li><a href="" class="footer-link">Order Tracking</a></li>
						<li><a href="" class="footer-link">Free Shipping</a></li>
						<li><a href="" class="footer-link">Return & Refund</a></li>
						<li><a href="" class="footer-link">Astra Guarantee</a></li>
						<li><a href="" class="footer-link">Contact Us</a></li>
					</ul>
				</div>
				<div class="col">
					<div class="font-size-16 font-weight-600">About Astra</div>
					<ul class="footer-menu">
						<li><a href="" class="footer-link">About Us</a></li>
						<li><a href="" class="footer-link">Astra Blog</a></li>
						<li><a href="" class="footer-link">Astra Careers</a></li>
						<li><a href="" class="footer-link">Astra Policies</a></li>
						<li><a href="" class="footer-link">Privacy Policy</a></li>
						<li><a href="" class="footer-link">Seller Center</a></li>
					</ul>
				</div>
				<div class="col">
					<div class="font-size-16 font-weight-600">Payment Providers</div>
					<ul class="footer-menu">
						<li><a href="" class="footer-link">Cash On Delivery</a></li>
						<li><a href="" class="footer-link">Paymaya</a></li>
						<li><a href="" class="footer-link">Gcash</a></li>
						<li><a href="" class="footer-link">Debit/Credit Card</a></li>
						<li><a href="" class="footer-link">Stripe</a></li>
						<li><a href="" class="footer-link">Astra Pay</a></li>
					</ul>
				</div>
				<div class="col">
					<div class="font-size-16 font-weight-600">Follow Us</div>
					<ul class="footer-menu">
						<li><a href="" class="footer-link">Facebook</a></li>
						<li><a href="" class="footer-link">Instagram</a></li>
						<li><a href="" class="footer-link">Twitter</a></li>
						<li><a href="" class="footer-link">Linkedin</a></li>
						<li><a href="" class="footer-link">Youtube</a></li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom position-relative py-3">
				<div>Copyright &copy; 2022. GOCLOUD Inc. All rights reserved.</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
    footer {
        background-image: url('../../assets/footer.svg'); //WORKED!
    }
</style>
