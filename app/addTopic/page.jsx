export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Titre de l'article"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description de l'article"
      />
      <button className="bg-blue-400 font-bold text-white py-3 px-6 w-fit">Ajouter article</button>
    </form>
  );
}
