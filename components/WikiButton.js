export default function wikipediaUrl(urls) {
  return urls === null ? (
    'No url'
  ) : (
    <a
      className="bg-green-500 hover:bg-gray-400 text-gray-200  py-2 px-4 rounded inline-flex items-center"
      href={urls}
      target="_blank"
    >
      Wikipedia
    </a>
  );
}
