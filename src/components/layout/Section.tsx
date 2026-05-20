import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = forwardRef<HTMLElement, Props>(function Section(
  { children, id, className = "" },
  ref,
) {
  return (
    <section ref={ref} id={id} className={`relative w-full ${className}`}>
      {children}
    </section>
  );
});

export default Section;
