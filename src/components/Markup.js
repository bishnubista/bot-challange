function createMarkup(content) {
  return { __html: content };
}

export function Markup({ content }) {
  return <div dangerouslySetInnerHTML={createMarkup(content)} />;
}
