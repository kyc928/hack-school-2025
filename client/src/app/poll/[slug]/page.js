export default function userPage({ params }) {
  const slug = params.slug;
  return <h1> This poll's slug: {slug}</h1>;
}
