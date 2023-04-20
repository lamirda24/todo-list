import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayouts from "@/layouts/MainLayouts";
import Container from "@/components/Reusable/Container";
import MainActivity from "@/components/Activity/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayouts>
      <Container data_cy="ContentContainer" className="pt-[60px]">
        <MainActivity />
      </Container>
    </MainLayouts>
  );
}
