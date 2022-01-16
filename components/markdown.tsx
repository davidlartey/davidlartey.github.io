import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
// import { NormalComponents, SpecialComponents } from "react-markdown/lib/ast-to-react";
// import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

interface IProps {
  content: string
}

const MarkdownComponent: FunctionComponent<IProps> = ({ content }) => {
  // const components: Partial<NormalComponents & SpecialComponents> = {
  //   code({node, inline, className, children, ...props}) {
  //     const match = /language-(\w+)/.exec(className || '');

  //     return (!inline && match) ? (
  //       <SyntaxHighlighter
  //         style={materialLight} 
  //         PreTag="div"language={match[1]}
  //         children={String(children).replace(/\n$/, '')}
  //         {...props}
  //       />
  //     ) : (
  //       <code
  //         className={className || ""}
  //         {...props}
  //       >
  //         {children}
  //       </code>
  //     )
  //   }
  // }

  return (
    <div className="markdown-body">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default MarkdownComponent;
