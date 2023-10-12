import React, { useState, useRef } from 'react';

interface PopoverProps {
  description: string;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ description, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (ref.current && !(ref.current as any).contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative"
      ref={ref}
    >
      <button
        onMouseOut={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
        className="px-4 py-2 bg-bluelogo text-white rounded focus:outline-none"
      >
        {children}
      </button>

      {isOpen && (
        <div className="absolute left-0 ml-28 -mt-10 w-56 p-2 bg-white rounded shadow-xl z-50">
          {description}
        </div>
      )}
    </div>
  );
};

export default Popover;
