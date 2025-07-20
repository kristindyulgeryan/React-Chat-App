import { THEMES } from "../constants/index.js";
import { useThemeStore } from "../store/useThemeStore.js";

const PREVIEW_MESSAGE = [
  { id: 1, content: "Hey, HOw's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing gret! Just working on some new features",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="container mx-auto h-screen max-w-5xl px-4 pt-20">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-base-content/70 text-sm">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 rounded-lg p-2 transition-colors ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}`}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full overflow-hidden rounded-md"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="font medium w-full truncate text-center text-[11px]">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview section */}
        <h3 className="mb-3 text-lg font-semibold">Preview</h3>
      </div>
    </div>
  );
};

export default SettingsPage;
