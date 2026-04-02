import PageContainer from "@/components/PageContainer";
import { fetchTheme } from "@/lib/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: { brandId: string };
}) {
  const { brandId } = await searchParams;
  const theme = await fetchTheme(brandId ?? 1);

  return <PageContainer theme={theme} />;
}
