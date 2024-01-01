// Inspired by: https://vaul.emilkowal.ski/

export function GridPattern() {
  return (
    <svg
      className="absolute pointer-events-none inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
          width={100}
          height={100}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          {/* Adjusted path for the halved grid */}
          <path d="M50 100V.5M.5 .5H100" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        {/* Adjusted the path coordinates to reflect the new grid */}
        <path
          d="M-50.5 0h101v101h-101Z M349.5 0h101v101h-101Z M249.5 200h101v101h-101Z M-150.5 300h101v101h-101Z"
          strokeWidth={0}
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
      />
    </svg>
  )
}
