import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-3 bg-gray-100 px-10 pt-1 shadow-md">
      <div className="-mb-px flex">
        <Link href="/">
          <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-2 mr-8">
            SpaceX Launches
          </a>
        </Link>
        <Link href="/about">
          <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-2 mr-8">
            Acerca de
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
