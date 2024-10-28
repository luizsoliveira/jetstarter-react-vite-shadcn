import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { cn } from "./lib/utils"

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center p-1 bg-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mr-4"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "w-64 bg-gray-100 p-4 transition-all duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 hover:bg-gray-200 rounded">Home</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}