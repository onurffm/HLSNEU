// Original-Markenicons als Inline-SVG (echte Markenfarben), damit Social-Links
// sofort wiedererkennbar sind. Größe über className (z.B. "h-5 w-5").

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden role="img">
      <defs>
        <linearGradient id="ig-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.35" stopColor="#FA7E1E" />
          <stop offset="0.62" stopColor="#D62976" />
          <stop offset="0.85" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-g)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.25" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden role="img">
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#1877F2" />
      <path
        d="M15.3 12.2h-2.1V20h-3v-7.8H8.6V9.6h1.6V8.2c0-2 1.2-3.2 3-3.2.9 0 1.7.1 1.9.1v2.3h-1.3c-1 0-1.2.5-1.2 1.2v1h2.5l-.8 2.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden role="img">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.66-.06-1.29-.17-1.9H12v3.6h5.39a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.98-4.3 2.98-7.22z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.91a6 6 0 0 1 0-3.82V7.5H3.07a10 10 0 0 0 0 9l3.34-2.59z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.51 3.83 1.5l2.86-2.86C16.95 2.99 14.7 2 12 2A10 10 0 0 0 3.07 7.5l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96z"
      />
    </svg>
  );
}
