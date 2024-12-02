import LocaleSelectorView from "./LocaleSelectorView";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";

const LocaleSelectorController = () => {
  const router = useRouter();
  const locale = useLocale();

  const onLanguageChange = (language: string) => {
    router.push(`${language}`);
  };

  return (
    <LocaleSelectorView
      onLanguageChange={onLanguageChange}
      selectedLanguage={locale}
    />
  );
};

export default LocaleSelectorController;
