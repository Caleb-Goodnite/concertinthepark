<script>
	const eventDetails = {
		title: 'Concert in the Park',
		subtitle: 'A Fine Arts Booster Club Community Event',
		location: 'Fischer Field Band Shell',
		date: 'May 30',
		time: 'Gates 6:15 | Show 7:00 – 9:00 PM',
		artists: [
			{ name: 'icoNic', genre: 'Funk Rap / Funk', note: 'THE OPENER' },
			{
				name: 'The Sassanachs',
				genre: 'Bluegrass / Irish',
				note: 'FEATURED'
			},
			{ name: 'The Flannelbacks', genre: 'Folk / Bluegrass', note: 'HEADLINER' }
		],
		earlybirdPrice: '$5',
		gatePrice: '$7',
		squareLink: 'https://square.link/u/ue0DR6Tt',
		cashApp: '$newtonFABC'
	};

	let scrolled = false;
	if (typeof window !== 'undefined') {
		window.onscroll = () => {
			scrolled = window.scrollY > 30;
		};
	}
</script>

<svelte:head>
	<title>{eventDetails.title} | Support the Arts</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,400&family=Lato:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="header" class:scrolled>
	<div class="container container--flex">
		<div class="logo">
			<img src="/railer-logo.png" alt="Railers Logo" class="logo__img" />
			Newton <span>FABC</span>
		</div>
		<nav class="nav">
			<a href="#about">The Mission</a>
			<a href="#lineup">The Music</a>
			<a href="#tickets" class="btn btn--nav">Get Tickets</a>
		</nav>
	</div>
</header>

<main>
	<section class="hero">
		<div class="hero__bg">
			<img src="/hero-bg.png" alt="Band Shell Park" />
			<div class="hero__color-overlay"></div>
		</div>
		<div class="container hero__content">
			<div class="hero__float-text">Join the harmony</div>
			<h1 class="hero__title">
				Musics better <br /><span>together.</span>
			</h1>
			<p class="hero__subtitle">
				Every ticket supports our student artists through the <strong>Fine Arts Booster Club</strong
				>. Let’s make some noise for the next generation.
			</p>

			<div class="hero__actions">
				<a href="#tickets" class="btn btn--primary">Grab a Ticket — {eventDetails.earlybirdPrice}</a
				>
				<a href="#lineup" class="btn btn--secondary">See the Lineup</a>
			</div>
		</div>
	</section>

	<section class="marquee">
		<div class="marquee__content">
			{#each Array(10) as _}
				<div class="marquee__item">
					{eventDetails.date} • {eventDetails.time} • {eventDetails.location} • SUPPORT THE ARTS •
				</div>
			{/each}
		</div>
	</section>

	<section id="about" class="mission">
		<div class="container mission__layout">
			<div class="mission__main">
				<h2 class="section-title">Supporting our <span>stars.</span></h2>
				<p class="large-text">
					The Fine Arts Booster Club isn't just a group of parents—we're a community dedicated to
					keeping the arts alive in our schools.
				</p>
				<p>
					From funding music scholarships to purchasing new instruments, your presence at this
					concert directly impacts hundreds of local students. It's a night of great music for a
					great cause.
				</p>
			</div>
			<div class="mission__side">
				<div class="quote-card">
					<p>"Art is the pulse of our community. We play so they can dream."</p>
					<span>— FABC Member</span>
				</div>
			</div>
		</div>
	</section>

	<section id="lineup" class="lineup">
		<div class="container">
			<h2 class="section-title text-center">The <span>Soul</span> of the <span>Park</span></h2>
			<div class="lineup-grid">
				{#each eventDetails.artists as artist, i}
					<div class="artist-box" class:featured={i === 2}>
						<div class="artist-label">{artist.note}</div>
						<h3 class="artist-name">{artist.name}</h3>
						<p class="artist-genre">{artist.genre}</p>
					</div>
				{/each}
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
					</div>
				</div>

				<div class="payment-hub">
					<h3>Secure your spot via</h3>
					<div class="hub-grid">
						<div class="hub-btn cashapp">
							<strong>Cash App</strong> Support
							<small>Pay to: <span>{eventDetails.cashApp}</span> <br /> No extra fees!</small>
						</div>
						<a href={eventDetails.squareLink} target="_blank" class="hub-btn square">
							<strong>Square</strong> Checkout
							<small>All major cards accepted • Small service fee applies</small>
						</a>
					</div>
					<p class="final-note">Please keep your digital receipt for entry. See you there!</p>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="container">
		<p>
			&copy; {new Date().getFullYear()} Newton Fine Arts Booster Club. Developed by Anchorforge Digital.
			All Rights Reserved.
		</p>
	</div>
</footer>

<style>
	:global(:root) {
		--bg: #0a0a0a;
		--surface: #141414;
		--primary: #ffffff;
		--accent-1: #f7d13b; /* Railer Gold */
		--accent-2: #333333; /* Railer Charcoal */
		--accent-3: #ffffff; /* Clean White */
		--text: #ffffff;
		--text-light: #a0a0a0;
		--font-heading: 'Fraunces', serif;
		--font-body: 'Lato', sans-serif;
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
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 50px 50px;
		pointer-events: none;
		z-index: 1000;
	}

	.container {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 2rem;
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
		height: 100px; /* Slightly taller for the new logo */
		z-index: 1000;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		background: transparent;
	}

	.header.scrolled {
		background: rgba(10, 10, 10, 0.8);
		backdrop-filter: blur(20px);
		height: 80px;
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
			radial-gradient(circle at 20% 30%, rgba(247, 209, 59, 0.1), transparent 50%),
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
		margin-bottom: 4rem;
		color: var(--text-light);
		line-height: 1.4;
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
		content: '';
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
		padding: 4.5rem;
		background: var(--bg);
		transition: all 0.4s;
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
		font-size: 3.5rem;
		margin: 0 0 1rem 0;
		font-weight: 900;
		line-height: 1;
	}

	.artist-genre {
		font-weight: 700;
		color: var(--text-light);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 2rem;
		display: block;
	}

	.artist-desc {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text);
		opacity: 0.9;
		max-width: 500px;
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
		display: block;
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

	.footer {
		padding: 80px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		color: var(--text-light);
		text-align: center;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	@media (max-width: 1000px) {
		.mission__layout,
		.ticket-wrapper {
			grid-template-columns: 1fr;
			gap: 5rem;
		}
		.section-title {
			font-size: 4rem;
		}
	}

	@media (max-width: 600px) {
		.hero__title {
			font-size: 18vw;
		}
		.nav {
			display: none;
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
