import type { Components } from "react-markdown";

export const MarkdownComponent: Components = {
  code({ inline, className, children, ...props }) {
    if (!inline) {
      return (
        <code
          className={`${className ?? ""} block bg-zinc-900 rounded-lg p-4 overflow-x-auto`}
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className="bg-zinc-700 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  },

  pre({ children }) {
    return (
      <pre className="bg-zinc-900 rounded-lg overflow-hidden my-2">
        {children}
      </pre>
    );
  },

  p({ children }) {
    return (
      <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
    );
  },

  ul({ children }) {
    return (
      <ul className="list-disc list-inside mb-2 space-y-1">
        {children}
      </ul>
    );
  },

  ol({ children }) {
    return (
      <ol className="list-decimal list-inside mb-2 space-y-1">
        {children}
      </ol>
    );
  },

  li({ children }) {
    return <li className="ml-2">{children}</li>;
  },

  h1({ children }) {
    return (
      <h1 className="text-2xl font-bold mb-2 mt-4 first:mt-0">
        {children}
      </h1>
    );
  },

  h2({ children }) {
    return (
      <h2 className="text-xl font-bold mb-2 mt-3 first:mt-0">
        {children}
      </h2>
    );
  },

  h3({ children }) {
    return (
      <h3 className="text-lg font-bold mb-2 mt-2 first:mt-0">
        {children}
      </h3>
    );
  },

  a({ children, href }) {
    return (
      <a
        href={href}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },

  blockquote({ children }) {
    return (
      <blockquote className="border-l-4 border-zinc-600 pl-4 italic my-2">
        {children}
      </blockquote>
    );
  },
};


