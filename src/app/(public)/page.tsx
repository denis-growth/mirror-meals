/**
 * Mirror Meals — Landing Page
 *
 * Sections: Hero, How It Works, Features, Social Mirror, CTA
 */

import { ButtonLink } from "@/components/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Mirror Meals — Know What Your Food Does to You",
	description:
		"Snap a photo of your meal, let AI identify every ingredient, log how your body responds, and compare side-by-side with friends. Understand your gut like never before.",
}

export default function LandingPage() {
	return (
		<div>
			{/* ── Hero ──────────────────────────────────────────────────────── */}
			<section className="hero min-h-[80vh] bg-base-200">
				<div className="hero-content text-center max-w-3xl">
					<div>
						<div className="badge badge-primary badge-outline mb-4 text-sm px-4 py-3">
							🍽️ AI-Powered Food & Gut Tracking
						</div>
						<h1 className="text-5xl font-bold tracking-tight leading-tight">
							See exactly what your{" "}
							<span className="text-primary">food does</span>{" "}
							to your body
						</h1>
						<p className="py-6 text-lg text-base-content/70 max-w-xl mx-auto">
							Snap a photo. AI identifies every ingredient. Log how you feel
							— bloating, sleep, energy, mood. Then compare side-by-side
							with a friend to find patterns neither of you could see alone.
						</p>
						<div className="flex gap-3 justify-center flex-wrap">
							<ButtonLink href="/register" variant="primary" size="lg">
								Start Logging Free
							</ButtonLink>
							<ButtonLink href="#how-it-works" variant="ghost" size="lg">
								See How It Works
							</ButtonLink>
						</div>
					</div>
				</div>
			</section>

			{/* ── How It Works ──────────────────────────────────────────────── */}
			<section id="how-it-works" className="py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold">Three steps. Total clarity.</h2>
						<p className="text-base-content/60 mt-3 max-w-lg mx-auto">
							No calorie counting. No spreadsheets. Just a photo and a few taps.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{steps.map((s, i) => (
							<div key={s.title} className="flex flex-col items-center text-center gap-4">
								<div className="w-14 h-14 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-bold">
									{i + 1}
								</div>
								<div className="text-4xl">{s.emoji}</div>
								<h3 className="text-xl font-semibold">{s.title}</h3>
								<p className="text-base-content/60 text-sm">{s.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Features ──────────────────────────────────────────────────── */}
			<section id="features" className="py-20 px-6 bg-base-200">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold">Everything your gut needs</h2>
						<p className="text-base-content/60 mt-3 max-w-lg mx-auto">
							Built for people who actually want to understand how food affects
							their body — not just count macros.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((f) => (
							<div key={f.title} className="card bg-base-100">
								<div className="card-body">
									<div className="text-3xl mb-2">{f.emoji}</div>
									<h3 className="card-title text-lg">{f.title}</h3>
									<p className="text-base-content/60 text-sm">{f.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Health Log Categories ─────────────────────────────────────── */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold">Log what your body is saying</h2>
					<p className="text-base-content/60 mt-3 mb-12 max-w-lg mx-auto">
						Entries are automatically sorted into Morning, Afternoon, and Evening.
						Every signal, every day, in one place.
					</p>
					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((c) => (
							<div
								key={c.label}
								className="badge badge-lg badge-outline gap-2 py-4 px-5 text-base"
							>
								<span>{c.emoji}</span>
								<span>{c.label}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Social Mirror ─────────────────────────────────────────────── */}
			<section className="py-20 px-6 bg-base-200">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="badge badge-secondary badge-outline mb-4 px-4 py-3">
								👥 The Social Mirror
							</div>
							<h2 className="text-3xl font-bold leading-tight">
								Compare side-by-side with a friend
							</h2>
							<p className="text-base-content/60 mt-4 mb-6">
								Add friends or follow people. Pull up a split-screen view that
								shows your food log and health signals next to theirs — day by
								day, meal by meal. Find the patterns that explain why you bloat
								and they don't, even when you ate the same thing.
							</p>
							<ul className="space-y-2 text-sm text-base-content/70">
								{mirrorFeatures.map((m) => (
									<li key={m} className="flex items-center gap-2">
										<span className="text-secondary text-base">✓</span>
										{m}
									</li>
								))}
							</ul>
						</div>
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">You</p>
										{mirrorPreview.you.map((item) => (
											<div key={item.label} className="mb-3">
												<p className="text-xs text-base-content/50">{item.time}</p>
												<p className="text-sm font-medium">{item.label}</p>
												<p className="text-xs text-base-content/60">{item.note}</p>
											</div>
										))}
									</div>
									<div>
										<p className="text-xs font-bold text-secondary mb-3 uppercase tracking-widest">Friend</p>
										{mirrorPreview.friend.map((item) => (
											<div key={item.label} className="mb-3">
												<p className="text-xs text-base-content/50">{item.time}</p>
												<p className="text-sm font-medium">{item.label}</p>
												<p className="text-xs text-base-content/60">{item.note}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── CTA ───────────────────────────────────────────────────────── */}
			<section className="py-20 px-6 bg-primary text-primary-content">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold">Your gut has been trying to tell you something.</h2>
					<p className="mt-4 text-primary-content/80 max-w-xl mx-auto">
						Mirror Meals gives you the tools to finally listen. Free to start,
						no credit card required.
					</p>
					<ButtonLink
						href="/register"
						variant="secondary"
						size="lg"
						className="mt-8"
					>
						Start Logging Free →
					</ButtonLink>
				</div>
			</section>
		</div>
	)
}

/* ── Static Data ─────────────────────────────────────────────────────────── */

const steps = [
	{
		emoji: "📸",
		title: "Snap your meal",
		description:
			"Take a photo of anything you eat. Our AI scans the image and extracts every ingredient or dish it can identify — stored as a searchable text log.",
	},
	{
		emoji: "🩺",
		title: "Log how you feel",
		description:
			"After eating, record your body's signals — bloating, bowel movement, energy, sleep, pain, mood. Takes less than 10 seconds.",
	},
	{
		emoji: "🔍",
		title: "Spot the patterns",
		description:
			"Over time, Mirror Meals surfaces correlations between what you eat and how you feel — and lets you compare with friends to validate your findings.",
	},
]

const features = [
	{
		emoji: "🤖",
		title: "AI Ingredient Extraction",
		description:
			"Snap a photo and our vision AI identifies the food, dishes, and likely ingredients. Stored as plain text so you can search, filter, and tag.",
	},
	{
		emoji: "🕐",
		title: "Automatic Time Segments",
		description:
			"Entries are automatically sorted into Morning, Afternoon, and Evening based on when you log. Override manually anytime.",
	},
	{
		emoji: "📊",
		title: "Symptom Correlation",
		description:
			"See which foods consistently trigger bloating, pain, or poor sleep. Visual timelines connect meals to symptoms across days and weeks.",
	},
	{
		emoji: "👥",
		title: "Friend Network",
		description:
			"Add friends or follow people. Control your privacy — share only what you want. The side-by-side mirror view reveals what a solo log never could.",
	},
	{
		emoji: "🌙",
		title: "Sleep & Recovery Tracking",
		description:
			"Log sleep quality, duration, and any overnight symptoms. Tie late-night eating habits directly to next-day energy and gut health.",
	},
	{
		emoji: "💊",
		title: "Supplements & Meds",
		description:
			"Track supplements, probiotics, enzymes, or medications alongside food — so you can see what's actually making the difference.",
	},
]

const categories = [
	{ emoji: "🚽", label: "Bowel Movement" },
	{ emoji: "💧", label: "Hydration / Pee" },
	{ emoji: "😴", label: "Sleep Quality" },
	{ emoji: "🤕", label: "Pain Level" },
	{ emoji: "🎈", label: "Bloating" },
	{ emoji: "😊", label: "Mood / Stress" },
	{ emoji: "⚡", label: "Energy Level" },
	{ emoji: "💊", label: "Supplements" },
	{ emoji: "🏃", label: "Activity / Steps" },
	{ emoji: "🌡️", label: "Inflammation" },
]

const mirrorFeatures = [
	"Mutual friend system — both parties must connect",
	"Granular privacy controls per entry",
	"Side-by-side daily and weekly views",
	"Highlight shared meals with different outcomes",
	"Optional: follow public wellness journals",
]

const mirrorPreview = {
	you: [
		{ time: "8:14 AM", label: "🥐 Croissant + Latte", note: "AI: wheat, butter, milk" },
		{ time: "12:30 PM", label: "🥗 Caesar Salad", note: "AI: romaine, parmesan, croutons" },
		{ time: "7:45 PM", label: "🎈 Bloating: High", note: "Evening segment" },
	],
	friend: [
		{ time: "8:30 AM", label: "🥣 Oats + Banana", note: "AI: oats, banana, almond milk" },
		{ time: "12:15 PM", label: "🥗 Caesar Salad", note: "AI: romaine, parmesan, croutons" },
		{ time: "7:45 PM", label: "🎈 Bloating: None", note: "Evening segment" },
	],
}
