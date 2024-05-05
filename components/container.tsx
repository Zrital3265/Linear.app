import React from "react";
import classNames from "classnames";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("mx-auto max-w-[120rem] px-8 py-2", className)}>
      {children}
    </div>
  );
};

export default Container;
