import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-3 bg-gray-100 px-10 pt-1 shadow-md">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>Acerca de</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
