import InsightRoll from "@/src/components/About/InsightRoll"

const insights = [
  "BSc Mathematics & Statistics",
  "6+ Years of Experience",
  "AWS Cloud Practitioner",
  "Thrive in challenging environments",
  "Enjoy working in teams",
]

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}
