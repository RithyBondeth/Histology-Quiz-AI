'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STARTERS = [
  'How do I distinguish an artery from a vein on H&E?',
  'What are the key features of the thyroid gland?',
  'Explain the layers of thick skin.',
  "How do I identify Peyer's patches in ileum?",
  'What is the difference between bronchus and bronchiole?',
  'Describe the renal corpuscle.',
];

export default function TutorClient() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your AI Histology Tutor for MMS2200. I can help you identify tissues, explain structural features, compare similar organs, and prepare for your practical exam. What would you like to learn today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setApiError(null);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (data.error) {
        setApiError(data.error);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
      }
    } catch {
      setApiError('Network error — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                m.role === 'user' && 'whitespace-pre-wrap',
                m.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-sm'
                  : 'bg-muted text-foreground rounded-bl-sm'
              )}
            >
              {m.role === 'assistant' && (
                <span className="mb-1 block text-xs font-semibold text-primary">🔬 Tutor</span>
              )}
              {m.role === 'assistant' ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ children }) => <div className="overflow-x-auto my-2"><table className="w-full text-xs border-collapse">{children}</table></div>,
                    thead: ({ children }) => <thead className="bg-muted/60">{children}</thead>,
                    th: ({ children }) => <th className="border border-border px-2 py-1 text-left font-semibold">{children}</th>,
                    td: ({ children }) => <td className="border border-border px-2 py-1">{children}</td>,
                    h1: ({ children }) => <p className="font-bold mt-2 mb-0.5">{children}</p>,
                    h2: ({ children }) => <p className="font-bold mt-2 mb-0.5">{children}</p>,
                    h3: ({ children }) => <p className="font-semibold mt-2 mb-0.5">{children}</p>,
                    h4: ({ children }) => <p className="font-semibold mt-1 mb-0.5">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-4 my-1 space-y-0">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 my-1 space-y-0">{children}</ol>,
                    li: ({ children }) => <li className="my-0 leading-snug [&>p]:inline [&>p]:m-0">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                    hr: () => <hr className="my-2 border-border" />,
                  }}
                >
                  {m.content.replace(/\n{3,}/g, '\n\n')}
                </ReactMarkdown>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm text-muted-foreground">
              <span className="animate-pulse">Thinking…</span>
            </div>
          </div>
        )}
        {apiError && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
            {apiError}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Starters */}
      {messages.length === 1 && (
        <div className="border-t px-4 py-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {STARTERS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border bg-muted/50 px-3 py-1 text-xs text-muted-foreground hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t p-4">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about any histology topic…"
            className="flex-1 rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button
            type="submit"
            disabled={loading || !input.trim()}
            className="gap-2"
          >
            <Send className="h-4 w-4" />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
