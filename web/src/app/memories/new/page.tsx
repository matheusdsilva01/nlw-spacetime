import Link from "next/link";

import NewMemoryForm from "@/components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";

const page = () => {
  return (
    <div className="ga-4 flex flex-1 flex-col p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>
      <NewMemoryForm />
    </div>
  );
};

export default page;
