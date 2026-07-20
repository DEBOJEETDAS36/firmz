"use client";

import { useState, useRef, useEffect } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaBalanceScale } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

type ChatMessage = {
    role: "assistant" | "user";
    content: string;
};

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            content:
                "Welcome to DTAX Law & Accountancy. I'm your AI Legal Assistant. How can I assist you today?",
        },
    ]);

    const suggestions = [
        "How do I register a company?",
        "I need GST compliance assistance",
        "Help me register a trademark",
        "I need contract drafting",
        "I need legal consultation",
        "I need income tax planning",
    ];

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = (text?: string) => {
        const userMessage = (text ?? message).trim();
        if (!userMessage) return;

        setMessages((prev) => [
            ...prev,
            { role: "user", content: userMessage },
            {
                role: "assistant",
                content: "Thinking...",
            },
        ]);

        setMessage("");
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isOpen && (
                <div className="mb-4 w-[390px] max-w-[95vw] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                                <FaBalanceScale />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold">AI Legal Assistant</h2>
                                <p className="text-xs text-gray-300">DTAX Law & Accountancy</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xl text-gray-300 hover:text-white"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="h-[430px] overflow-y-auto bg-gray-50 p-5">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${msg.role === "assistant"
                                    ? "items-start gap-3"
                                    : "justify-end"
                                    }`}
                            >
                                {msg.role === "assistant" && (
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                                        <FaBalanceScale />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.role === "assistant"
                                        ? "border bg-white text-gray-800"
                                        : "bg-black text-white"
                                        }`}
                                >
                                    <p className="text-sm leading-6">{msg.content}</p>
                                </div>
                            </div>
                        ))}

                        {messages.length === 1 && (
                            <div className="mt-8">
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-700">
                                    Suggested Questions
                                </p>

                                <div className="space-y-3">
                                    {suggestions.map((question) => (
                                        <button
                                            key={question}
                                            onClick={() => handleSend(question)}
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-left text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:border-black hover:bg-gray-100 hover:shadow-md"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={chatEndRef} />
                    </div>

                    <div className="border-t bg-white p-4">
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSend();
                                }}
                                placeholder="Ask your legal or tax question..."
                                className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-5 py-3 text-sm text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-black focus:bg-white"
                            />

                            <button
                                onClick={() => handleSend()}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:scale-105 hover:bg-gray-800"
                            >
                                <IoSend size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full border-2 border-white bg-black px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
            >
                <HiOutlineChatBubbleLeftRight size={22} />
                <span className="text-sm font-semibold tracking-wide">Ask AI</span>
            </button>
        </div>
    );
}
