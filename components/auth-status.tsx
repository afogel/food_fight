
export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-primary-content text-sm">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}
