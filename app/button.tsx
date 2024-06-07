export default function EmptyButton({ empty }: { empty: boolean }) {
  return (
    <button
      className={`border-accent border-4 px-6 py-1 max-w-[160px] text-white font-bold  transition-all-ease-in-out duration-100 ${
        !empty ? "bg-accent hover:scale-125" : "hover:bg-accent"
      }`}
    >
      GET ADDON
    </button>
  );
}
