import { useEffect, useState } from 'react';
import {
  CalendarHeart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  Baby,
  Crown,
  HeartPulse,
  Star,
  Phone,
  MapPin,
  Clock,
  Mail,
  Check,
  ChevronDown,
  Menu,
  X,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Our Doctor', href: '#doctor' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Professional whitening, veneers, and smile makeovers tailored to you.',
    points: ['In-chair & take-home whitening', 'Porcelain veneers', 'Bonding & reshaping'],
  },
  {
    icon: HeartPulse,
    title: 'Preventive Care',
    desc: 'Routine exams, cleanings, and hygiene guidance to keep smiles healthy for life.',
    points: ['Comprehensive exams', 'Gentle cleanings', 'Digital X-rays'],
  },
  {
    icon: ShieldCheck,
    title: 'Restorative Dentistry',
    desc: 'Crowns, bridges, and fillings that rebuild strength and confidence.',
    points: ['Tooth-coloured fillings', 'Crowns & bridges', 'Root canal therapy'],
  },
  {
    icon: Baby,
    title: 'Family & Kids',
    desc: 'A calm, friendly experience that helps little ones love the dentist.',
    points: ['Kid-friendly checkups', 'Sealants & fluoride', 'Gentle first visits'],
  },
];

const CREDENTIALS = [
  'Doctor of Dental Surgery, Univ. of Michigan',
  '15+ years in private practice',
  'Member, American Dental Association',
  'Invisalign Preferred Provider',
];

const REVIEWS = [
  {
    name: 'Sarah M.',
    detail: 'Patient since 2019',
    rating: 5,
    text: 'I used to dread the dentist. The team at BrightSmile completely changed that. Gentle, patient, and genuinely kind — my kids actually ask to go.',
  },
  {
    name: 'David R.',
    detail: 'Veneers & whitening',
    rating: 5,
    text: 'My smile makeover exceeded every expectation. Dr. Patel listened to exactly what I wanted and the results look completely natural.',
  },
  {
    name: 'Lena T.',
    detail: 'Family of four',
    rating: 5,
    text: 'Spotless office, on-time appointments, and zero pressure. They explain everything before they do it. We finally found our forever dentist.',
  },
];

const FAQ = [
  {
    q: 'Do you accept new patients?',
    a: 'Yes! We are always welcoming new patients and families. You can book a first visit online in under two minutes, or call us and we will find a time that works for you.',
  },
  {
    q: 'Which insurance plans do you accept?',
    a: 'We accept most major PPO dental plans and are happy to file claims on your behalf. Not sure about yours? Give us a call with your plan details and our front desk will verify coverage before your visit.',
  },
  {
    q: 'What if I have a dental emergency?',
    a: 'We reserve same-day slots every weekday for emergencies like severe pain, broken teeth, or swelling. Call us as early as possible and we will get you seen the same day.',
  },
  {
    q: 'Are you good with anxious patients?',
    a: 'Absolutely. A large part of our practice is built around gentle, anxiety-free care. We offer noise-cancelling headphones, comfort blankets, and sedation options for longer procedures.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. For treatments not fully covered by insurance we offer 0% interest payment plans through our financing partner, so you can spread the cost over 6–24 months.',
  },
];

const HOURS = [
  { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 7:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 2:00 PM' },
  { day: 'Saturday', hours: 'By appointment' },
  { day: 'Sunday', hours: 'Closed' },
];

const STATS = [
  { value: '15+', label: 'Years of care' },
  { value: '12k+', label: 'Happy patients' },
  { value: '4.9', label: 'Average rating' },
  { value: '6', label: 'Days a week' },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white shadow-sm transition-transform group-hover:scale-105">
        <Smile className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
          BrightSmile
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-600">
          Dental Studio
        </span>
      </span>
    </a>
  );
}

function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100/80 bg-cream-50/90 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(15,42,61,0.18)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-600 hover:shadow-md active:scale-[0.98]"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Your Visit
          </button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100/70 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-100/80 bg-cream-50/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-base font-semibold text-white"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Your Visit
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal-200/45 blur-3xl animate-blob-drift" />
        <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl animate-blob-drift [animation-delay:-6s]" />
        <div className="absolute bottom-[-15%] left-1/3 h-72 w-72 rounded-full bg-ink-100/60 blur-3xl animate-blob-drift [animation-delay:-3s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            <Sparkles className="h-3.5 w-3.5" />
            Now accepting new patients
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-semibold text-ink-900 sm:text-5xl lg:text-6xl">
            A brighter smile,
            <span className="block text-teal-600">gentle from start to finish.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-500">
            Modern, family-friendly dentistry in a calm space designed around you. From
            routine cleanings to complete smile makeovers — we make every visit something to
            smile about.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30 active:scale-[0.98]"
            >
              <CalendarHeart className="h-5 w-5" />
              Book Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-cream-50 px-6 py-3.5 text-base font-semibold text-ink-700 transition-all hover:border-teal-300 hover:text-teal-700"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-2.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream-50 bg-teal-100 text-teal-700"
                  style={{ rotate: `${i * 8 - 12}deg` }}
                >
                  <Smile className="h-4 w-4" />
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1.5 font-semibold text-ink-800">4.9</span>
              </div>
              <p className="text-ink-400">Loved by 12,000+ patients</p>
            </div>
          </div>
        </div>

        {/* Visual card */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-teal-500 to-teal-700 p-8 shadow-2xl shadow-teal-900/20">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="relative flex flex-col items-center py-8 text-center text-white">
                <Smile className="h-16 w-16 animate-float" strokeWidth={1.6} />
                <p className="mt-5 font-display text-2xl font-medium">Your healthiest smile</p>
                <p className="mt-2 max-w-xs text-sm text-white/85">
                  starts with a visit built entirely around your comfort.
                </p>
              </div>
            </div>

            {/* floating stat chips */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-ink-100 bg-cream-50 px-4 py-3 shadow-xl animate-float sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Painless visits</p>
                  <p className="text-xs text-ink-400">Gentle, anxiety-free</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-5 bottom-10 hidden rounded-2xl border border-ink-100 bg-cream-50 px-4 py-3 shadow-xl animate-float [animation-delay:-2.5s] sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">On-time, always</p>
                  <p className="text-xs text-ink-400">No long waits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-cream-50 px-5 py-6 text-center">
              <p className="font-display text-3xl font-semibold text-teal-600">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-600">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">
            Complete care under one roof
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            From first checkups to full smile transformations, every service is delivered with
            the same gentle, unhurried care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal group relative flex flex-col rounded-2xl border border-ink-100 bg-cream-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="relative overflow-hidden bg-ink-900 py-20 text-cream-100 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Portrait placeholder */}
        <div className="reveal mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-teal-600/30 to-teal-800/40 p-1 shadow-2xl">
            <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[1.7rem] bg-gradient-to-b from-teal-500/20 to-ink-800">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/10">
                <Stethoscope className="h-11 w-11 text-teal-200" strokeWidth={1.6} />
              </div>
              <p className="mt-5 font-display text-2xl font-semibold text-white">Dr. Aanya Patel</p>
              <p className="mt-1 text-sm text-teal-200">Lead Dentist & Founder</p>
              <div className="mt-5 flex gap-2">
                {[Crown, Star, HeartPulse].map((Ic, idx) => (
                  <span
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-200"
                  >
                    <Ic className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="reveal [transition-delay:120ms]">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
            Meet your dentist
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Dr. Aanya Patel
          </h2>
          <p className="mt-2 text-teal-200">DDS — Lead Dentist & Founder</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/90">
            Dr. Patel founded BrightSmile with one belief: dentistry should feel calm, honest,
            and completely centered on you. After more than fifteen years in practice, she still
            takes the time to explain every option before any treatment begins — so you always
            feel informed, never rushed.
          </p>
          <p className="mt-4 max-w-xl text-cream-200/80">
            When she is not in the studio, she volunteers with a community dental outreach
            program and is an enthusiastic (if amateur) watercolor painter.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-300" strokeWidth={2.5} />
                <span className="text-sm text-cream-100/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="dotted relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-600">
            Patient stories
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">
            Smiles we have earned
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Real words from the people who trust us with their care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-2xl border border-ink-100 bg-cream-50 p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-teal-200" />
              <div className="mt-3 flex gap-1 text-amber-500">
                {[...Array(r.rating)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 font-display text-lg font-semibold text-teal-700">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{r.name}</p>
                  <p className="text-xs text-ink-400">{r.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-600">
            Good to know
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`reveal overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-teal-200 bg-teal-50/40' : 'border-ink-100 bg-cream-50'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink-900 sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-teal-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-500">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ onBook }: { onBook: () => void }) {
  return (
    <footer id="contact" className="relative bg-ink-900 pt-20 text-cream-200 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* CTA + contact info */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              Visit us
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 max-w-md text-cream-200/80">
              Book online in under two minutes, or reach out — we would love to welcome you to
              the studio.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactItem icon={Phone} label="Call us" value="(555) 010-2233" href="tel:+15550102233" />
              <ContactItem icon={Mail} label="Email" value="hello@brightsmile.dental" href="mailto:hello@brightsmile.dental" />
              <ContactItem icon={MapPin} label="Address" value="142 Maple Ave, Suite 4, Riverton" />
              <ContactItem icon={Clock} label="Same-day emergencies" value="Call before noon" />
            </div>

            <button
              onClick={onBook}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-600 hover:shadow-xl active:scale-[0.98]"
            >
              <CalendarHeart className="h-5 w-5" />
              Book Your Visit
            </button>
          </div>

          {/* Hours */}
          <div className="reveal [transition-delay:120ms]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
                <Clock className="h-5 w-5 text-teal-300" />
                Office hours
              </h3>
              <ul className="mt-5 divide-y divide-white/10">
                {HOURS.map((h) => {
                  const closed = h.hours === 'Closed';
                  return (
                    <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-cream-100">{h.day}</span>
                      <span className={closed ? 'text-ink-300/70' : 'text-teal-200'}>
                        {h.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white">
              <Smile className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-semibold text-white">BrightSmile Dental Studio</span>
          </div>
          <p className="text-sm text-cream-200/60">
            © {new Date().getFullYear()} BrightSmile Dental Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-cream-200/60">{label}</p>
        <p className="font-medium text-cream-100">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">{inner}</div>
  );
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream-50 shadow-2xl animate-scale-in">
        <div className="bg-teal-500 px-7 py-6 text-white">
          <h3 className="font-display text-2xl font-semibold">Book your visit</h3>
          <p className="mt-1 text-sm text-white/85">We will confirm by phone within one business day.</p>
        </div>
        {submitted ? (
          <div className="px-7 py-12 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Check className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <h4 className="mt-5 font-display text-xl font-semibold text-ink-900">Request received!</h4>
            <p className="mt-2 text-sm text-ink-500">
              Thank you — our front desk will reach out shortly to confirm your appointment.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            className="space-y-4 px-7 py-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <Field label="Full name" name="name" placeholder="Jane Doe" required />
            <Field label="Phone" name="phone" type="tel" placeholder="(555) 010-2233" required />
            <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred day</label>
              <select
                name="day"
                className="w-full rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink-700">Reason for visit</label>
              <select
                name="reason"
                className="w-full rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-ink-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
              >
                <option>New patient checkup & cleaning</option>
                <option>Cosmetic consultation</option>
                <option>Emergency / tooth pain</option>
                <option>Follow-up</option>
                <option>Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-600 active:scale-[0.98]"
            >
              Request appointment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full text-center text-sm font-medium text-ink-400 transition-colors hover:text-ink-700"
            >
              Maybe later
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
      />
    </div>
  );
}

export default function App() {
  const [booking, setBooking] = useState(false);
  useReveal();

  const openBooking = () => setBooking(true);

  return (
    <div className="min-h-screen bg-cream-100">
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services />
        <Doctor />
        <Reviews />
        <Faq />
        <Contact onBook={openBooking} />
      </main>
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
