export default function ProjectPlaceholder({ label = 'Project Image Placeholder', compact = false }) {
  return (
    <div className={`placeholder-surface ${compact ? 'min-h-[230px]' : 'min-h-[320px]'}`}>
      <div className="placeholder-grid" />
      <div className="absolute inset-6 rounded border border-accent/15" />
      <div className="absolute left-8 top-8 h-2 w-24 rounded-full bg-accent/40" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-soft/20" />
      <div className="absolute bottom-14 right-14 h-12 w-12 rounded-full border border-soft/30" />
      <span className="relative z-10 rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-soft">
        {label}
      </span>
    </div>
  );
}
