import Link from 'next/link';

const Header = () => {
  return (
    <header>
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
