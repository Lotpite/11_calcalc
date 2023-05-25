import Daily from "@/components/Daily";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center gap-10">
      <h1 className="text-3xl w-auto flex items-center justify-center border-b-2 p-4">Dashboard</h1>
      <Daily/>
    </section>
  )
}
