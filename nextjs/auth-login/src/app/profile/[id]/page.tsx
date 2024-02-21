export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl p-2 font-bold">Profile</h1>
      <p className="p-2 text-3xl">Profile Page: <span className="text-blue-600 font-bold">{params.id}</span></p>
    </div>
  );
}
