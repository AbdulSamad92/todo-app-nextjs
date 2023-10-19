import { AddTodo } from '@/components/addTodo'
import { TodoSection } from '@/components/todoSecction'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <AddTodo></AddTodo>
      <TodoSection></TodoSection>
    </main>
  )
}
