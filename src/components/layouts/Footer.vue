<template>
    <footer>
		<div class="container-fluid">
			<div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 row-cols-1 g-5">
				<div class="col">
					<div class="font-size-16 font-weight-600">Customer Service</div>
					<ul class="footer-menu">
						<li><router-link to="/help-center" class="footer-link">Help Center</router-link></li>
						<li><a href="" class="footer-link">Order Tracking</a></li>
						<li><a href="" class="footer-link">Free Shipping</a></li>
						<li><a href="" class="footer-link">Return & Refund</a></li>
						<li><a href="" class="footer-link">Auda Guarantee</a></li>
						<li><router-link :to="{ name: 'ContactUs' }" class="footer-link">Contact Us</router-link></li>
					</ul>
				</div>
				<div class="col">
					<div class="font-size-16 font-weight-600">About Auda</div>
					<ul class="footer-menu">
						<li><a href="" class="footer-link">About Us</a></li>
						<li><a href="" class="footer-link">Auda Blog</a></li>
						<li><a href="" class="footer-link">Auda Careers</a></li>
						<li><a href="" class="footer-link">Auda Policies</a></li>
						<li><a href="" class="footer-link">Privacy Policy</a></li>
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
						<li><a href="" class="footer-link">Auda Pay</a></li>
					</ul>
				</div>
				<div class="col">
					<div class="font-size-16 font-weight-600">Sell on Auda</div>
					<ul class="footer-menu">
						<li><a href="" class="footer-link">Supplier Membership</a></li>
						<li><a href="" class="footer-link">Learning Center</a></li>
						<li><a href="" class="footer-link">Partner Program</a></li>
						<li><a href="" class="footer-link">Seller Center</a></li>
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
			<div class="footer-bottom py-3">
				<div>Copyright &copy; 2022. GOCLOUD Inc. All rights reserved.</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
    // footer {
    //     background-image: url('../../assets/footer.svg'); //WORKED!
    // }
</style>
