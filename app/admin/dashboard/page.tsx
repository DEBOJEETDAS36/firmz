// app/admin/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch("/api/leads");

        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch.");

        const data = await res.json();
        setLeads(data.leads);
        setStatus("success");
      } catch {
        setErrorMsg("Could not load leads. Please try again.");
        setStatus("error");
      }
    }

    fetchLeads();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
          <p className="text-xs text-muted mt-0.5">Contact form leads</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-xs text-muted underline underline-offset-4 hover:text-foreground transition-colors"
          >
            ← View site
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Log out
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">

        {/* Stats bar */}
        {status === "success" && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-foreground font-medium">{leads.length}</span>
            <span className="text-muted">
              {leads.length === 1 ? "lead" : "leads"} received
            </span>
          </div>
        )}

        {/* Loading */}
        {status === "loading" && (
          <div className="flex items-center justify-center py-32 text-sm text-muted">
            Loading leads…
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex items-center justify-center py-32 text-sm text-red-500">
            {errorMsg}
          </div>
        )}

        {/* Empty state */}
        {status === "success" && leads.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center gap-2">
            <p className="text-foreground font-medium">No leads yet.</p>
            <p className="text-sm text-muted">
              When someone fills the contact form, they'll appear here.
            </p>
          </div>
        )}

        {/* Leads table — desktop */}
        {status === "success" && leads.length > 0 && (
          <>
            {/* Table for md and up */}
            <div className="hidden md:block rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-foreground/5">
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Name
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Email
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Message
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Received
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr
                      key={lead._id}
                      className={`border-b border-border last:border-0 transition-colors hover:bg-foreground/5 ${
                        i % 2 === 0 ? "" : "bg-foreground/[0.02]"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-5 py-4 text-muted">
                        <a
                          href={`mailto:${lead.email}`}
                          className="underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-muted max-w-xs">
                        <p className="line-clamp-2">{lead.message}</p>
                      </td>
                      <td className="px-5 py-4 text-muted whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for mobile */}
            <div className="md:hidden space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead._id}
                  className="rounded-xl border border-border p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted whitespace-nowrap">
                      {formatDate(lead.createdAt)}
                    </p>
                  </div>
                  <a
                    href={`mailto:${lead.email}`}
                    className="block text-sm text-muted underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {lead.email}
                  </a>
                  <p className="text-sm text-muted line-clamp-3">{lead.message}</p>
                </div>
              ))}
            </div>
          </>
        )}

      </main>
    </div>
  );
}