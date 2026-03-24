import { Problems } from "../../components/Problems";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Problems />
      </div>
    </main>
  );
}
