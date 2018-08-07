<template>

	<section>
		<header>
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<img src="img/header-pic-main.jpg" class="header-image img-responsive img-thumbnail">
					</div>
					<div class="col-sm-8" style="height: 200px;">
						<div class="header-top">
							<h1 class="title">{{ $site.title }}</h1>
							<h1 class="sub-title">{{ $site.description }}</h1>
						</div>
						<ul class="header-footer">
							<li v-for="(socialMediaLink, socialMediaKey) in $site.themeConfig.homePage.socialMediaLinks">
								<a :href="socialMediaLink.dest" target="__blank" :title="socialMediaLink.title">
									<font-awesome-icon :icon="['fab', socialMediaLink.icon]" size="2x" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>

		<div class="container">
			<!-- About -->
			<div class="section">
				<div class="section-header">
					<h4 class="">About Me</h4>
				</div>
				<div class="section-content">
					<p>Hi, I'm David Lartey. You can call me Dbilovd (The Beloved). I was born in 1991. I'm from Prampram, Ghana, but spent the first three-quarters of my life in Bonny, Nigeria.</p>
					<p>I believe in God and I'm learning to live like Jesus Christ. I am a minimalist at heart.</p>
					<p>I like creating things with code, occasionally with words: this blog, soundcloud. I read, listen to new songs, watch Arsenal and daydream.</p>
				</div>
			</div>
			<div class="section">
				<div class="section-header">
					<h4>Thougths</h4>
					<a href="#">Read my Blog</a>
				</div>
				<div class="section-content">
					<div class="row">
						<div class="col-sm-4">
							<div class="card">
								<a href="#">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">Title</h3>
										<p class="card-text"><a href="">location.com</a></p>
									</div>
								</a>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<a href="#">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">Title</h3>
										<p class="card-text"><a href="">location.com</a></p>
									</div>
								</a>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<a href="#">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">Title</h3>
										<p class="card-text"><a href="">location.com</a></p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="section-header">
					<h4>Projects</h4>
					<a href="#">View All</a>
				</div>
				<div class="section-content">
					<div class="row">

						<div class="col-sm-4" v-for="(project, projectKey) in $site.themeConfig.homePage.projects">
							<div class="card">
								<a :href="project.home">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">{{ project.title }}</h3>
										<p class="card-text">{{ project.oneLiner }}</p>
										<p class="card-text">
											<a href="" target="_blank">{{ project.home }}</a>
										</p>
									</div>
								</a>
							</div>
						</div>

						<!--
						<div class="col-sm-4">
							<div class="card">
								<a href="#">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">LDT<em>!</em></h3>
										<p class="card-text">Social productivity and collaboration app.</p>
										<p class="card-text"><a href="#" target="_blank">ldtapp.com</a></p>
									</div>
								</a>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<a href="#">
									<img src="http://via.placeholder.com/200x100" class="card-img-top">
									<div class="card-body">
										<h3 class="card-title">Project Name</h3>
										<p class="card-text">Project one liner</p>
										<p class="card-text"><a href="" target="_blank">location.com</a></p>
									</div>
								</a>
							</div>
						</div>
						-->
					</div>
				</div>
			</div>
		</div>

		<footer class="container text-center">
			<a href="#">&hearts; <img src="/img/GH.png" /></a>
		</footer>
	</section>

</template>

<script type="text/javascript">
	import Vue from 'vue'
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { library } from '@fortawesome/fontawesome-svg-core'
	import { faCoffee } from '@fortawesome/free-solid-svg-icons'
	import { faGithub, faMedium, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

	library.add(faCoffee);
	library.add(faGithub)
	library.add(faMedium)
	library.add(faTwitter)
	library.add(faLinkedin)

	Vue.component('font-awesome-icon', FontAwesomeIcon)

	export default Vue.extend({
		data () {
			return {}
		}
	})
</script>

<style>	
	h1 {
		/* font-size: 3.5em; */
	}
	a,
	a:hover,
	a:visited,
	a:active {
		color: #7f0011;
		text-decoration: none;
	}
	.container {
		max-width: 800px;
		padding: 40px 20px 0;
	}
	header {
		background-color: #7f0011; /*#cf001c;*/
		border-bottom: 1px solid;
		color: #FFF;
		padding-top: 75px;
		padding-bottom: 75px;
	}
	header a,
	header a:hover,
	header a:visited,
	header a:active {
		color: #FFF;
	}
	header img.header-image {
		width: 200px;
		height: 200px;
	}
	header div.header-top {
		height: 100%;
		margin-bottom: -20px;
	}
	header div.header-top h1.title {
		font-weight: bolder;
		margin-top: -9px;
	}
	header div.header-top h1.sub-title {
		font-weight: lighter;
	}
	header ul.header-footer {
		padding: 0;
	}
	header ul li {
		display: inline;
		list-style: none;
		margin-right: 20px;
	}
	header ul a {
		color: #FFF;
	}
	.section {
		margin-bottom: 60px;
	}
	.section-header {
		border-bottom: 2px solid #ffd1d7;
		margin-bottom: 40px;
		padding-bottom: 15px;
	}
	.section-header h4 {
		border-bottom: 5px solid #7f0011;
		display: inline;
		margin-bottom: -2px;
		padding-bottom: 13px;
	}
	.section-header a {
		float: right;
	}
	.section-header a:hover,
	.section-header a:active,
	.section-header a:visited {
		text-decoration: underline;
	}
	.card a {
		color: inherit;
	}
	.card .card-text a {
		color: #7f0011;
		text-decoration: underline;
	}
	footer {
		min-height: 100px;
	}
</style>