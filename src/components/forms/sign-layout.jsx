export default function SignLayOut({ children }) {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-slate-50 p-8 rounded-lg shadow-md w-96 shadow-sm shadow-black">
        {children}
      </div>
    </div>
  );
}
