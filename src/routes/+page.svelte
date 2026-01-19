<script>
	const eventDetails = {
		title: "Concert in the Park",
		subtitle: "A Fine Arts Booster Club Community Event",
		location: "Fischer Field Band Shell",
		address: "720 W 1st St, Newton, Kansas, United States",
		googleMaps: "https://maps.app.goo.gl/k7hacGpJkBvPQAuc8", // Example link
		date: "May 30",
		time: "Gates 6:15 | Show 7:00 – 9:00 PM",
		artists: [
			{
				name: "icoNic",
				genre: "Funk Rap / Funk",
				note: "THE OPENER",
				logo: "/iconic-logo.png",
				style: "color",
			},
			{
				name: "The Sassanachs",
				genre: "Bluegrass / Irish",
				note: "FEATURED",
				logo: "/sassanachs-logo.png",
				style: "theme",
			},
			{
				name: "The Flannelbacks",
				genre: "Folk / Bluegrass",
				note: "HEADLINER",
				logo: "/flannelbacks-photo.png",
				style: "photo",
			},
		],
		earlybirdPrice: "$5",
		gatePrice: "$7",
		squareLink: "https://square.link/u/ue0DR6Tt",
		cashApp: "$373FineArts",
		faqs: [
			{
				q: "What should I bring?",
				a: "Please bring your own lawn chairs or blankets for seating. The event is held in a grass park area.",
			},
			{
				q: "Is there food and drink?",
				a: "Yes! Local vendors will be on-site with refreshments. You are also welcome to bring your own snacks.",
			},
			{
				q: "What happens if it rains?",
				a: "In the event of severe weather, we will announce a rain date on our social media channels.",
			},
			{
				q: "How does it support the arts?",
				a: "100% of ticket proceeds go directly to the Newton Fine Arts Booster Club to fund scholarships and equipment for student artists.",
			},
		],
	};

	import { onMount } from "svelte";

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 30;
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Countdown Logic
	let timeLeft = $state({ days: 0, hours: 0, mins: 0, secs: 0 });
	const targetDate = new Date("2026-05-30T19:00:00").getTime();

	onMount(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			timeLeft = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				),
				mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				secs: Math.floor((distance % (1000 * 60)) / 1000),
			};

			if (distance < 0) clearInterval(timer);
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<svelte:head>
	<title
		>Concert in the Park | Live Music Newton KS | May 30 Fischer Field</title
	>
	<meta
		name="description"
		content="The biggest community concert in Newton, Kansas! Join us May 30 at Fischer Field Band Shell for live music featuring icoNic, The Sassanachs, and The Flannelbacks. Supporting Newton Fine Arts Booster Club (FABC)."
	/>
	<meta
		name="keywords"
		content="Concert in the Park, Newton KS events, things to do Newton Kansas, Fischer Field Band Shell, live music Newton KS, Newton Fine Arts Booster Club, FABC Newton, Newton Railers, community events Newton, May 30 events Kansas, student arts support, Newton Kansas concerts"
	/>

	<meta
		property="og:title"
		content="Concert in the Park 2026 | Newton, KS Community Music Event"
	/>
	<meta
		property="og:description"
		content="Don't miss the 2026 Concert in the Park at Fischer Field. Support student artists and enjoy a night of amazing live music. Get earlybird tickets now!"
	/>
	<meta property="og:url" content="https://concertinthepark.org" />
	<meta property="og:site_name" content="Concert in the Park - Newton, KS" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Concert in the Park | Newton KS | May 30"
	/>
	<meta
		name="twitter:description"
		content="Support the Arts! Join us at the Fischer Field Band Shell for Newton's premier music event. Earlybird tickets on sale now."
	/>
	<meta name="twitter:image" content="/social-preview.png" />
	<link rel="canonical" href="https://concertinthepark.org" />

	<!-- Structured Data: Combined Event and LocalBusiness -->
	<script type="application/ld+json">
		[
			{
				"@context": "https://schema.org",
				"@type": "Event",
				"name": "Concert in the Park 2026",
				"description": "Annual community concert supporting local student artists through the Newton Fine Arts Booster Club (FABC).",
				"startDate": "2026-05-30T19:00",
				"endDate": "2026-05-30T21:00",
				"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
				"eventStatus": "https://schema.org/EventScheduled",
				"location": {
					"@type": "Place",
					"name": "Fischer Field Band Shell",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "720 W 1st St",
						"addressLocality": "Newton",
						"addressRegion": "KS",
						"postalCode": "67114",
						"addressCountry": "US"
					}
				},
				"image": ["https://concertinthepark.org/social-preview.png"],
				"performer": [
					{ "@type": "Person", "name": "icoNic" },
					{ "@type": "Person", "name": "The Sassanachs" },
					{ "@type": "Person", "name": "The Flannelbacks" }
				],
				"offers": {
					"@type": "Offer",
					"url": "https://concertinthepark.org#tickets",
					"price": "5.00",
					"priceCurrency": "USD",
					"availability": "https://schema.org/InStock",
					"validFrom": "2026-01-01"
				}
			},
			{
				"@context": "https://schema.org",
				"@type": "NGO",
				"name": "Newton Fine Arts Booster Club",
				"alternateName": "Newton FABC",
				"url": "https://concertinthepark.org",
				"logo": "https://concertinthepark.org/railer-logo.png",
				"description": "Supporting the arts and student artists in the Newton, Kansas community.",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Newton",
					"addressRegion": "KS",
					"postalCode": "67114",
					"addressCountry": "US"
				}
			}
		]
	</script>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,400&family=Lato:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="header" class:scrolled>
	<div class="container container--flex">
		<a href="/" class="logo" onclick={closeMobileMenu}>
			<img
				src="/railer-logo.png"
				alt="Railers Logo"
				class="logo__img"
				loading="eager"
				fetchpriority="high"
			/>
			Newton <span>FABC</span>
		</a>
		<button
			class="mobile-menu-toggle"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
		>
			<span class="hamburger" class:open={mobileMenuOpen}></span>
		</button>
		<nav class="nav" class:open={mobileMenuOpen}>
			<a href="#about" onclick={closeMobileMenu}>The Mission</a>
			<a href="#lineup" onclick={closeMobileMenu}>The Music</a>
			<a href="#venue" onclick={closeMobileMenu}>The Venue</a>
			<a href="#tickets" class="btn btn--nav" onclick={closeMobileMenu}
				>Get Tickets</a
			>
			<a href="#faq" onclick={closeMobileMenu}>FAQ</a>
		</nav>
	</div>
</header>

<main>
	<section class="hero">
		<div class="hero__bg">
			<img
				src="/hero-bg.png"
				alt="Band Shell Park at Fischer Field"
				loading="eager"
				fetchpriority="high"
			/>
			<div class="hero__color-overlay"></div>
		</div>
		<div class="container hero__content">
			<div class="hero__float-text">Join the harmony</div>
			<h1 class="hero__title">
				Music's better <br /><span>together.</span>
			</h1>
			<p class="hero__subtitle">
				Every ticket supports our student artists through the <strong
					>Fine Arts Booster Club</strong
				>. Let’s make some noise for the next generation.
			</p>

			<div class="hero__countdown">
				<div class="cd-item">
					<span class="cd-val">{timeLeft.days}</span>
					<span class="cd-label">Days</span>
				</div>
				<div class="cd-item">
					<span class="cd-val">{timeLeft.hours}</span>
					<span class="cd-label">Hrs</span>
				</div>
				<div class="cd-item">
					<span class="cd-val">{timeLeft.mins}</span>
					<span class="cd-label">Min</span>
				</div>
				<div class="cd-item">
					<span class="cd-val">{timeLeft.secs}</span>
					<span class="cd-label">Sec</span>
				</div>
			</div>
			<div class="hero__actions">
				<a href="#tickets" class="btn btn--primary"
					>Grab a Ticket — {eventDetails.earlybirdPrice}</a
				>
				<a href="#lineup" class="btn btn--secondary">See the Lineup</a>
			</div>
		</div>
	</section>

	<section class="marquee">
		<div class="marquee__content">
			{#each Array(10) as _}
				<div class="marquee__item">
					{eventDetails.date} • {eventDetails.time} • {eventDetails.location}
					• SUPPORT THE ARTS •
				</div>
			{/each}
		</div>
	</section>

	<section id="about" class="mission">
		<div class="container mission__layout">
			<div class="mission__main">
				<h2 class="section-title">
					Supporting our <span>stars.</span>
				</h2>
				<p class="large-text">
					The Fine Arts Booster Club isn't just a group of
					parents—we're a community dedicated to keeping the arts
					alive in our schools.
				</p>
				<p>
					From funding music scholarships to purchasing new
					instruments, your presence at this concert directly impacts
					hundreds of local students. It's a night of great music for
					a great cause.
				</p>
			</div>
			<div class="mission__side">
				<div class="quote-card">
					<p>
						"Art is the pulse of our community. We play so they can
						dream."
					</p>
					<span>— FABC Member</span>
				</div>
			</div>
		</div>
	</section>

	<section id="lineup" class="lineup">
		<div class="container">
			<h2 class="section-title text-center">
				The <span>Soul</span> of the <span>Park</span>
			</h2>
			<div class="lineup-grid">
				{#each eventDetails.artists as artist, i}
					<div class="artist-box" class:featured={i === 2}>
						{#if artist.logo}
							<div
								class="artist-logo-wrap"
								class:photo={artist.style === "photo"}
							>
								<img
									src={artist.logo}
									alt={artist.name}
									class="artist-logo"
									class:themed={artist.style === "theme"}
									class:is-photo={artist.style === "photo"}
								/>
							</div>
						{/if}
						<div class="artist-info">
							<div class="artist-label">{artist.note}</div>
							<h3 class="artist-name">{artist.name}</h3>
							<p class="artist-genre">{artist.genre}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="venue" class="venue">
		<div class="container">
			<div class="venue__layout">
				<div class="venue__info">
					<h2 class="section-title">The <span>Venue</span></h2>
					<p class="large-text">{eventDetails.location}</p>
					<p>{eventDetails.address}</p>
					<p class="venue__description">
						Join us at the historic Fischer Field Band Shell. This
						open-air venue provides the perfect backdrop for an
						evening of community and music.
					</p>
					<a
						href={eventDetails.googleMaps}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn--secondary"
					>
						Get Directions
					</a>
				</div>
				<div class="venue__visual">
					<div class="venue__placeholder">
						<!-- This could be a static map or a nice photo of the band shell -->
						<img
							src="/fischer-field.png"
							alt="Venue"
							class="venue__img"
						/>
						<div class="venue__overlay"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="tickets" class="tickets">
		<div class="container">
			<div class="ticket-wrapper">
				<div class="ticket-design">
					<div class="ticket-header">
						<h2>Official <span>Admission</span></h2>
						<p>Earlybird Pricing is currently active!</p>
					</div>
					<div class="ticket-values">
						<div class="val">
							<span class="l">Now</span>
							<span class="v">{eventDetails.earlybirdPrice}</span>
						</div>
						<div class="val gate">
							<span class="l">At Gate</span>
							<span class="v">{eventDetails.gatePrice}</span>
						</div>
					</div>
					<div class="ticket-footer">
						<p>Fischer Field Band Shell | May 30</p>
						<p><u>Bring your own chair and/or blanket.</u></p>
					</div>
				</div>

				<div class="payment-hub">
					<h3>Secure your spot via</h3>
					<div class="hub-grid">
						<button
							type="button"
							class="hub-btn cashapp"
							onclick={() => {
								navigator.clipboard.writeText(
									eventDetails.cashApp,
								);
								alert(
									`Copied ${eventDetails.cashApp} to clipboard!`,
								);
							}}
						>
							<strong>Cash App</strong> Support
							<small
								>Pay to: <span>{eventDetails.cashApp}</span>
								<br /> No extra fees!</small
							>
						</button>
						<a
							href={eventDetails.squareLink}
							target="_blank"
							class="hub-btn square"
						>
							<strong>Square</strong> Checkout
							<small
								>All major cards accepted •
								<br />Small service fee applies</small
							>
						</a>
					</div>
					<p class="final-note">
						<strong
							><em
								>Please keep your digital receipt for entry. See
								you there!</em
							></strong
						>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="faq" class="faq">
		<div class="container">
			<h2 class="section-title text-center">
				Common <span>Questions</span>
			</h2>
			<div class="faq-grid">
				{#each eventDetails.faqs as faq}
					<div class="faq-item">
						<h3>{faq.q}</h3>
						<p>{faq.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="container">
		<div class="footer__content">
			<div class="footer__socials">
				<a href="/" aria-label="Facebook">FB</a>
				<a href="/" aria-label="Instagram">IG</a>
				<a href="/" aria-label="Twitter">TW</a>
			</div>
		</div>
		<p class="copyright">
			&copy; {new Date().getFullYear()} Newton Fine Arts Booster Club. Developed
			by Anchorforge Digital. All Rights Reserved.
		</p>
	</div>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(:root) {
		--bg: #0a0a0a;
		--surface: #141414;
		--primary: #ffffff;
		--accent-1: #f7d13b; /* Railer Gold */
		--accent-2: #333333; /* Railer Charcoal */
		--accent-3: #ffffff; /* Clean White */
		--text: #ffffff;
		--text-light: #a0a0a0;
		--font-heading: "Fraunces", serif;
		--font-body: "Lato", sans-serif;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: var(--bg);
		color: var(--text);
		font-family: var(--font-body);
		line-height: 1.5;
		overflow-x: hidden;
		position: relative;
	}

	:global(body::before) {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(
				90deg,
				rgba(255, 255, 255, 0.03) 1px,
				transparent 1px
			);
		background-size: 50px 50px;
		pointer-events: none;
		z-index: 1000;
	}

	.container {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 clamp(1rem, 4vw, 2rem);
	}

	.container--flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 3rem; /* Minimum gap between logo and nav */
	}

	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		min-height: 100px;
		padding: 1rem 0;
		z-index: 1000;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		background: transparent;
	}

	.header.scrolled {
		background: rgba(10, 10, 10, 0.8);
		backdrop-filter: blur(20px);
		min-height: 80px;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		font-family: var(--font-heading);
		font-weight: 900;
		font-size: 1.8rem;
		letter-spacing: -0.02em;
		flex-shrink: 0; /* Don't squash the logo */
		text-decoration: none;
		color: inherit;
	}

	.logo__img {
		height: 50px;
		width: auto;
	}

	.logo span {
		color: var(--accent-1);
		background: linear-gradient(to right, var(--accent-1), #bfa12e);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.mobile-menu-toggle {
		display: none;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1100;
		position: relative;
		width: 44px;
		height: 44px;
		flex-shrink: 0; /* Prevent the button itself from squashing */
	}

	.hamburger {
		display: block;
		width: 30px;
		height: 2px;
		background: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: background 0.2s;
	}

	.hamburger::before,
	.hamburger::after {
		content: "";
		position: absolute;
		left: 0;
		width: 30px;
		height: 2px;
		background: white;
		transition: all 0.3s;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		top: 0;
		transform: rotate(45deg);
	}

	.hamburger.open::after {
		bottom: 0;
		transform: rotate(-45deg);
	}

	.nav {
		display: flex;
		gap: 3.5rem;
		align-items: center;
		flex-wrap: wrap; /* Allow wrapping on small screens */
	}

	.nav a {
		text-decoration: none;
		color: white;
		font-weight: 800;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		opacity: 0.7;
		transition: all 0.3s;
	}

	.nav a:hover {
		opacity: 1;
		color: var(--accent-1);
	}

	.btn--nav {
		background: linear-gradient(45deg, var(--accent-1), #bfa12e);
		color: black !important;
		padding: 0.6rem 1.4rem;
		border-radius: 4px;
		opacity: 1 !important;
		border: none;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
		font-size: 0.8rem;
		font-weight: 900;
	}

	.btn--nav:hover {
		transform: scale(1.05);
	}

	/* Hero */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding-top: 100px;
	}

	.hero__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.hero__bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.6;
		filter: grayscale(100%) contrast(1.4);
	}

	.hero__color-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:
			radial-gradient(
				circle at 20% 30%,
				rgba(247, 209, 59, 0.1),
				transparent 50%
			),
			linear-gradient(to bottom, transparent, var(--bg));
	}

	.hero__float-text {
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 1.5rem;
		color: var(--accent-1);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin-bottom: 1.5rem;
	}

	.hero__title {
		font-family: var(--font-heading);
		font-size: clamp(5rem, 15vw, 10rem);
		line-height: 0.85;
		margin: 0 0 3rem 0;
		font-weight: 900;
		letter-spacing: -0.04em;
	}

	.hero__title span {
		color: var(--accent-1);
		display: block;
		font-style: italic;
	}

	.hero__subtitle {
		max-width: 600px;
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 3rem;
		color: var(--text-light);
		line-height: 1.4;
	}

	/* Countdown */
	.hero__countdown {
		display: flex;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.cd-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.cd-val {
		font-family: var(--font-heading);
		font-size: 4rem;
		font-weight: 900;
		line-height: 1;
		color: var(--accent-1);
	}

	.cd-label {
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.8rem;
		font-weight: 900;
		opacity: 0.5;
	}

	.hero__actions {
		display: flex;
		gap: 2rem;
	}

	.btn {
		font-weight: 900;
		text-decoration: none;
		padding: 1.5rem 3.5rem;
		border-radius: 4px;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.btn--primary {
		background: linear-gradient(45deg, var(--accent-1), #bfa12e);
		color: black;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
	}

	.btn--primary:hover {
		transform: scale(1.05) rotate(-1deg);
		box-shadow: 0 15px 40px rgba(247, 209, 59, 0.2);
	}

	.btn--secondary {
		border: 2px solid white;
		color: white;
	}

	/* Marquee */
	.marquee {
		background: var(--accent-1);
		color: black;
		padding: 1.5rem 0;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		transform: rotate(-1.5deg);
		margin: 20px 0 100px 0;
		z-index: 20;
		position: relative;
		width: 110vw;
		left: -5vw;
		border-top: 4px solid black;
		border-bottom: 4px solid black;
	}

	.marquee__content {
		display: flex;
		animation: scroll 30s linear infinite;
	}

	.marquee__item {
		font-size: 2.5rem;
		font-weight: 900;
		padding: 0 2rem;
		font-family: var(--font-heading);
		text-transform: uppercase;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Mission Section */
	.mission {
		padding: 200px 0 150px 0;
	}

	.mission__layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		align-items: center;
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: clamp(4rem, 8vw, 7rem);
		line-height: 0.85;
		margin-bottom: 3rem;
		font-weight: 900;
		letter-spacing: -0.04em;
	}

	.section-title span {
		color: var(--accent-3);
	}

	.text-center {
		text-align: center;
	}

	.large-text {
		font-size: 2.2rem;
		font-weight: 300;
		color: var(--text-light);
		margin-bottom: 4rem;
		line-height: 1.2;
	}

	.quote-card {
		background: var(--surface);
		padding: 5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
	}

	.quote-card::before {
		content: "";
		position: absolute;
		top: -20px;
		left: -20px;
		width: 100%;
		height: 100%;
		border: 1px solid var(--accent-1);
		z-index: -1;
	}

	.quote-card p {
		font-family: var(--font-heading);
		font-size: 2.2rem;
		font-style: italic;
		line-height: 1.2;
		margin: 0 0 2rem 0;
		font-weight: 700;
	}

	.quote-card span {
		font-weight: 900;
		color: var(--accent-1);
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}

	/* Lineup */
	.lineup {
		padding: 150px 0;
		background: #000;
	}

	.lineup-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1px;
		background: rgba(255, 255, 255, 0.1);
		margin-top: 5rem;
	}

	.artist-box {
		padding: clamp(2rem, 5vw, 4.5rem);
		background: var(--bg);
		transition: all 0.4s;
		overflow-wrap: break-word;
		word-wrap: break-word;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 350px;
		position: relative;
	}

	.artist-logo-wrap {
		width: 100%;
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px dashed rgba(255, 255, 255, 0.1);
		overflow: hidden;
		border-radius: 4px;
	}

	.artist-logo-wrap.photo {
		border: none;
		background: #000;
	}

	.artist-logo {
		max-width: 80%;
		max-height: 80%;
		object-fit: contain;
		transition: all 0.3s;
	}

	.artist-logo.themed {
		filter: brightness(0) invert(1);
	}

	.artist-logo.is-photo {
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.2);
	}

	.artist-box:hover .is-photo {
		filter: grayscale(0%) contrast(1);
	}

	.artist-info {
		position: relative;
		z-index: 2;
	}

	.artist-box:hover {
		background: var(--surface);
	}

	.artist-label {
		font-size: 0.8rem;
		font-weight: 900;
		color: var(--accent-1);
		margin-bottom: 1.5rem;
		text-transform: uppercase;
	}

	.artist-name {
		font-family: var(--font-heading);
		font-size: 2rem;
		margin: 0 0 1rem 0;
		font-weight: 900;
		line-height: 1.1;
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;
	}

	.artist-genre {
		font-weight: 700;
		color: var(--text-light);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 2rem;
		display: block;
	}

	/* Tickets */
	.tickets {
		padding: 150px 0;
	}

	.ticket-wrapper {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 6rem;
		align-items: center;
	}

	.ticket-design {
		background: var(--accent-1);
		color: black;
		padding: 6rem;
		clip-path: polygon(
			100% 0,
			100% 33%,
			95% 33%,
			95% 38%,
			100% 38%,
			100% 62%,
			95% 62%,
			95% 67%,
			100% 67%,
			100% 100%,
			0 100%,
			0 67%,
			5% 67%,
			5% 62%,
			0 62%,
			0 38%,
			5% 38%,
			5% 33%,
			0 33%,
			0 0
		);
	}

	.ticket-header h2 {
		font-family: var(--font-heading);
		font-size: 4rem;
		font-weight: 900;
		margin: 0;
		line-height: 1;
	}

	.ticket-values {
		display: flex;
		gap: 5rem;
		margin: 4rem 0;
	}

	.val .l {
		font-weight: 900;
		text-transform: uppercase;
		font-size: 0.9rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	.val .v {
		font-size: 5rem;
		font-weight: 900;
		font-family: var(--font-heading);
		line-height: 1;
	}

	.val.gate .v {
		opacity: 0.2;
		text-decoration: line-through;
	}

	.payment-hub h3 {
		font-size: 2.5rem;
		font-family: var(--font-heading);
		margin-bottom: 3rem;
		font-weight: 900;
	}

	.hub-grid {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.hub-btn {
		background: var(--surface);
		padding: 2.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		text-decoration: none;
		color: white;
		transition: all 0.3s;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
		font-family: inherit;
		width: 100%;
		text-align: left;
		min-height: 200px;
		box-sizing: border-box; /* Force identical sizing */
	}

	.hub-btn:hover {
		border-color: var(--accent-1);
		background: #202020;
		transform: translateX(10px);
	}

	.hub-btn strong {
		display: block;
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
	}

	.hub-btn.square strong {
		color: var(--accent-1);
	}

	.hub-btn.cashapp strong {
		color: var(--accent-1);
	}

	.hub-btn small {
		color: var(--text-light);
		font-size: 1rem;
	}

	/* Venue */
	.venue {
		padding: 150px 0;
		background: var(--surface);
	}

	.venue__layout {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 8rem;
		align-items: center;
	}

	.venue__description {
		margin: 2rem 0 3rem 0;
		color: var(--text-light);
		font-size: 1.2rem;
	}

	.venue__visual {
		position: relative;
	}

	.venue__placeholder {
		aspect-ratio: 16 / 9;
		background: #000;
		position: relative;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.venue__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.6;
		filter: grayscale(100%) contrast(1.5) brightness(0.8);
		transition: all 0.5s;
	}

	.venue__visual:hover .venue__img {
		filter: grayscale(0%) contrast(1.1);
		opacity: 1;
	}

	.venue__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			circle at center,
			transparent,
			var(--surface)
		);
	}

	/* FAQ */
	.faq {
		padding: 150px 0;
	}

	.faq-grid {
		max-width: 900px;
		margin: 5rem auto 0;
		display: grid;
		gap: 3rem;
	}

	.faq-item {
		background: var(--surface);
		padding: 3rem;
		border-left: 4px solid var(--accent-1);
	}

	.faq-item h3 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: var(--accent-1);
	}

	.faq-item p {
		color: var(--text-light);
		line-height: 1.6;
		font-size: 1.1rem;
	}

	.footer {
		padding: 100px 0 50px;
		background: #000;
	}

	.footer__content {
		margin-bottom: 4rem;
	}

	.footer__socials {
		display: flex;
		gap: 2.5rem;
		justify-content: center;
		align-items: center;
	}

	.footer__socials a {
		color: white;
		text-decoration: none;
		font-weight: 900;
		font-size: 1.2rem;
		transition: color 0.3s;
	}

	.footer__socials a:hover {
		color: var(--accent-1);
	}

	.copyright {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding-top: 3rem;
		color: var(--text-light);
		text-align: center;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.8rem;
	}

	@media (max-width: 1000px) {
		.mission__layout,
		.venue__layout,
		.ticket-wrapper {
			grid-template-columns: 1fr;
			gap: 5rem;
		}
		.section-title {
			font-size: 4rem;
		}
		.lineup-grid {
			grid-template-columns: 1fr;
		}
		.venue__visual {
			order: -1;
		}
	}

	@media (max-width: 1100px) {
		.mobile-menu-toggle {
			display: block;
		}
		.nav {
			position: fixed;
			top: 0;
			right: -100%;
			width: 80%;
			max-width: 300px;
			height: 100vh;
			background: rgba(10, 10, 10, 0.98);
			backdrop-filter: blur(20px);
			flex-direction: column;
			align-items: flex-start;
			padding: 100px 2rem 2rem;
			gap: 2rem;
			transition: right 0.3s ease;
			z-index: 1000;
		}
		.nav.open {
			right: 0;
		}
		.nav a {
			font-size: 1.2rem;
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		.hero__title {
			font-size: 18vw;
		}
		.footer__content {
			margin-bottom: 3rem;
		}
		.footer__socials {
			justify-content: center;
		}
		.hero__actions {
			flex-direction: column;
		}
		.ticket-values {
			gap: 2rem;
		}
		.val .v {
			font-size: 3.5rem;
		}
		.ticket-design {
			padding: 3rem;
		}
	}
</style>
