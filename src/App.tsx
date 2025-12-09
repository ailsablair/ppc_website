import './App.css';

const STORYBOOK_URL: string =
  (import.meta.env.VITE_STORYBOOK_URL as string | undefined) ??
  'https://ailsablair.github.io/ppc_website/';

function App() {
  return (
    <div className="ppc-storybook-shell">
      <iframe
        className="ppc-storybook-frame"
        src={STORYBOOK_URL}
        title="PipsQueak Pet Care Design System Storybook"
        loading="lazy"
      />
    </div>
  );
}

export default App;
