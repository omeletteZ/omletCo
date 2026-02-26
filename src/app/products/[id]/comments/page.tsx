export default async function CommentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Комментарии</h1>
      <p>ID товара: {id}</p>
      <p>Комментарии товара с ID: {id}</p>
      <a href={`/products/${id}`}>Назад к товару</a>
    </main>
  );
}