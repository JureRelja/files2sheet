export default function VideoComponent({ id }: { id: string }) {
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <iframe
      frameBorder="0"
      allowFullScreen
      src={src}
      width={800}
      height={450}
    />
  );
}
