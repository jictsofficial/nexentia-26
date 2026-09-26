import CompetitionPageClient from "@/components/CompetitionPageClient";
import { competitionsData } from "@/data/competitions";

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default async function CompetitionPage({ params }: PageProps) {
  // await කරන්න
  const resolvedParams = await params;

  const competition = competitionsData.find(c => c.slug === resolvedParams.slug);

  if (!competition) {
    return <div>Competition not found.</div>;
  }

  return <CompetitionPageClient competition={competition} />;
}
