import { Layout } from "@/components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";

export default function Home() {
  return (
    <Layout title="Smit Hydraulics">
      <Box className={["w-full", { height: "140rem" }]} />
    </Layout>
  );
}
