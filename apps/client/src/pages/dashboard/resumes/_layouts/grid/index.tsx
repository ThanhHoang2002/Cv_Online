import { t } from "@lingui/macro";
import { Separator } from "@reactive-resume/ui";
import { sortByDate } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useResumes } from "@/client/services/resume";

import { BaseCard } from "./_components/base-card";
import { CreateResumeCard } from "./_components/create-card";
import { ImportResumeCard } from "./_components/import-card";
import { ResumeCard } from "./_components/resume-card";

export const GridView = () => {
  const { resumes, loading } = useResumes();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-[180px] items-center justify-center rounded-[12px] bg-gradient-to-r from-[rgb(173,216,230)] via-[rgb(100,149,237)] to-[rgb(72,61,139)] text-[60px] font-medium text-white">
        <div
          className=""
          style={{
            opacity: 0,
            background:
              "radial-gradient(150px at 678px 133px, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)",
          }}
        ></div>

        <h1>{t`Resumes`}</h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <CreateResumeCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
        >
          <ImportResumeCard />
        </motion.div>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="m-4">
          <CreateResumeCard />
        </div>
        <div className="m-4">
          <ImportResumeCard />
        </div>
      </div>
      <Separator />
      <div>
        <h2 className="text-2xl font-medium">{t`Your resumes`}</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="duration-300 animate-in fade-in"
              style={{ animationFillMode: "backwards", animationDelay: `${i * 300}ms` }}
            >
              <BaseCard />
            </div>
          ))}

        {resumes && (
          <AnimatePresence>
            {resumes
              .sort((a, b) => sortByDate(a, b, "updatedAt"))
              .map((resume, index) => (
                <motion.div
                  key={resume.id}
                  layout
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: (index + 2) * 0.1 } }}
                  exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: 0.5 } }}
                >
                  <ResumeCard resume={resume} />
                </motion.div>
              ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
