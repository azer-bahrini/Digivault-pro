import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Links");

  return (
    <div>
      <h1>{t("home")}</h1>
    </div>
  );
}
