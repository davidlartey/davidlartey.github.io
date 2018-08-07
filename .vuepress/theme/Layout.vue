<template>
	<div>
		<header>
			<div>
				<div></div> <!-- Image -->
				<div>
					<h2>{{ $site.title }}</h2>
					<h4>{{ $site.description }}</h4>
					<ul>
						<li>
							<a href="#">
								<i class="zmdi"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="zmdi"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="zmdi"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="zmdi"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div>
			<!-- About -->
			<div class="section">
				<div>
					<h4>About Me</h4>
					<a href="#">More</a>
				</div>
			</div>
			<div class="section">
				<div>
					<h4>Thougths</h4>
					<a href="#">View More</a>
				</div>
			</div>
			<div class="section">
				<div>
					<h4>Projects</h4>
					<a href="#">View All</a>
				</div>
			</div>
		</div>
		<footer>
			<a href="#">Built with <3 and a Vue</a>
		</footer>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {}
		}
	}
</script>

<style>
	@tailwind preflight;
	
	body {
		margin: 0px;
		padding: 0px;
	}
	header {
		padding: 100px auto 50px;
	}
</style>