import Link from "next/link";
import React from "react";

const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, <br /> comece a{" "}
        <Link
          href="/memories/new"
          className="underline transition-all hover:text-gray-50"
        >
          criar agora!
        </Link>
      </p>
    </div>
  );
};

export default EmptyMemories;
