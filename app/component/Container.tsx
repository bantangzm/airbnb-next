"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520x] mx-auto xl:px-20 md:px-20 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
