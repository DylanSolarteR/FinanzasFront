export default function SubmitButton({children}){
    return(
        <button
            type="submit"
            className="bg-slate-500 text-slate-50 py-2 px-4 rounded-lg hover:bg-slate-600">
                {children}
        </button>
    )//En blue-500 y hover blue-600 tambien se ve bien
}