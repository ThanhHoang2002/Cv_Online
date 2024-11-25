import { t } from "@lingui/macro";
import { ScrollArea, Separator } from "@reactive-resume/ui";
import { useRef } from "react";

import { ThemeSwitch } from "@/client/components/theme-switch";

import { ExportSection } from "./sections/export";
import { LayoutSection } from "./sections/layout";
import { NotesSection } from "./sections/notes";
import { TemplateSection } from "./sections/template";
import { ThemeSection } from "./sections/theme";
import { TypographySection } from "./sections/typography";
import { SectionIcon } from "./shared/section-icon";

export const RightSidebar = () => {
  const containterRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = (selector: string) => {
    const section = containterRef.current?.querySelector(selector);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex bg-secondary-accent/30">
      <ScrollArea orientation="vertical" className="h-screen flex-1 pb-16 lg:pb-0">
        <div ref={containterRef} className="grid gap-y-6 p-6 @container/right">
          <TemplateSection />
          <Separator />
          <LayoutSection />
          <Separator />
          <TypographySection />
          <Separator />
          <ThemeSection />
          <Separator />
          <ExportSection />
          <Separator />
          <NotesSection />
          <Separator />
          <Separator />
        </div>
      </ScrollArea>

      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        <div />

        <div className="flex flex-col items-center justify-center gap-y-2">
          <SectionIcon
            id="template"
            name={t`Template`}
            onClick={() => {
              scrollIntoView("#template");
            }}
          />
          <SectionIcon
            id="layout"
            name={t`Layout`}
            onClick={() => {
              scrollIntoView("#layout");
            }}
          />
          <SectionIcon
            id="typography"
            name={t`Typography`}
            onClick={() => {
              scrollIntoView("#typography");
            }}
          />
          <SectionIcon
            id="theme"
            name={t`Theme`}
            onClick={() => {
              scrollIntoView("#theme");
            }}
          />
          <SectionIcon
            id="page"
            name={t`Page`}
            onClick={() => {
              scrollIntoView("#page");
            }}
          />
          <SectionIcon
            id="statistics"
            name={t`Statistics`}
            onClick={() => {
              scrollIntoView("#statistics");
            }}
          />
          <SectionIcon
            id="export"
            name={t`Export`}
            onClick={() => {
              scrollIntoView("#export");
            }}
          />
          <SectionIcon
            id="notes"
            name={t`Notes`}
            onClick={() => {
              scrollIntoView("#notes");
            }}
          />
          <SectionIcon
            id="information"
            name={t`Information`}
            onClick={() => {
              scrollIntoView("#information");
            }}
          />
        </div>

        <ThemeSwitch size={14} />
      </div>
    </div>
  );
};