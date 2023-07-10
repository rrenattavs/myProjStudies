import { prisma } from '@/db'
import Link from "next/link"

const Home = async () => {
  const todos = await prisma.todo.findMany()
  prisma.todo.create({ data: { title: 'test', complete:false}})
  return (
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2x1">Todos</h1>
      <Link 
          className="border border-slate-300 text-slate-300 
          px-2 py-1 rounded hover:bg-slate-700 f
          ocus-within:bg-slate-700 outline-none" 
          href="/new">New
      </Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo =>(
          <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </>
  )
}

export default Home