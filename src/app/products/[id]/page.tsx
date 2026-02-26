export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Страница товара</h1>
      <p>ID товара: {id}</p>
      <a href={`/products/${id}/comments`}>К комментариям</a>
    </main>
  );
}